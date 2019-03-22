import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js'
import last from '../../node_modules/lodash-es/last.js'
import isEqual from '../../node_modules/lodash-es/isEqual.js'
import template from '../../node_modules/lodash-es/template.js'

import { Stack } from './util-iso.js'
import { Watcher } from './watcher.js'

// TODO TEMP dev only
let verbose = 0
let c = console.debug
let ce = console.error
let ci = console.info
let cw = console.warn
let info1 = (...args) => { if (verbose >= 1) console.info(...args) } // TODO delete
let info2 = (...args) => { if (verbose >= 2) console.info(...args) } // TODO delete
let info3 = (...args) => { if (verbose >= 3) console.info(...args) } // TODO delete

// This is the meta-information for the value of a reactive object's property. It has its own list of Watchers 
// (much like a Publisher) which it notifies whenever its internal value changes.
export class KeyMeta {
	constructor(key){
		this.previousValue = undefined
		this.value = undefined
		this.key = key
		this.dependants = new Set()
		this.preExisting = null // Whether or not there are pre-existing values on the target at this key (such as inherited or inbuilt properties)
	}

	set(value){
		// console.debug('SET', value)
		this.previousValue = this.value
		this.value = value
		this.notifyWatchers()
		return this
	}

	// These subscription methods are the important public methods that link the metas and watchers
	addWatcherToDependants(watcher){
		if (this.dependants.has(watcher)) return false // This watcher's already registered to this KeyMeta
		// console.debug('ADDING DEPENDANT:', watcher)
		// The watcher must make sure it has added itself to the watcher list before trying to 
		// `get` any reactive properties, if it wants to be automatically registered as a dependency.
		if (watcher){
			this.dependants.add(watcher) // Add this dependency to the current target watcher
		} else {
			// console.error('No current watchers for:', this.key)
		}
	}

	// TODO: no use for this yet?
	unsubscribeWatcher(watcher){
		// console.debug('UNSUBSCRIBE before:', watcher, this.dependants)
		this.dependants.remove(watcher)
	}

	notifyWatchers(){
		// console.debug('NOTIFY', this.key, this.value, this.dependants)
		this.dependants.forEach(watcher => {
			// console.debug('CALLING UPDATE ON WATCHER', watcher, this.key)
			watcher.update(this)
		})
	}

	// get valueNoTrigger(){
		// console.debug('valueNoTrigger', this.value)
		// return this.value
	// }
}

/*
	Each ReactiveProxy only stores reactive properties one level deep (its own direct children). 
	It recursively makes its extensible (property-having) children ReactiveProxies before adding them it its own properties.
*/
export class ReactiveProxy {
	constructor(targetObj, watcherStackForKeyMetas = Watcher.stack){
		this.watcherStackForKeyMetas = watcherStackForKeyMetas

		this.metas = {}

		ReactiveProxy.metasNamespace = '_reactiveVmNamespace_'

		return this.walk(targetObj) // Because we don't return an instance, all instance ("this") references are essentially private
	}

	/*
		Recursively interate through a plain javascript object's properties to replace all its 
		simple properties with proxies
	*/
	walk(target){
		for (let [key, child] of Object.entries(target)){
			if (typeof child === 'function'){
				// TODO - how do we deal with functions?
			}
			if (key.match(/^\$/)){ // Special prefix to make plain objects/functions
				// TODO - do nothing?
				// console.debug('plain $ prefix:', key)
			} else if (Object.isExtensible(child)){
				// Anything that *can* have properties, we want to shim with a proxy so we can track those properties 
				// with a KeyMeta

				// Deep-recurse from the bottom up, overwriting any objects with Proxies
				target[key] = new ReactiveProxy(child) 
			}
		}

		return this.makeProxy(target)
	}

	makeProxy(target){
		for (let [key, val] of Object.entries(target)){
			this.metas[key] = new KeyMeta(key).set(val)
		}

		const handler = {
			get: (target, key, receiver)=>{
				/*
					Affects:
						`[]` accessor operator
						`.` accessor operator
				*/
				info3(`TRAP --- get. getting key:`, key, target)
				let retrievedValue = this.getKeyValue(target, key)
				return retrievedValue
			},
			set: (target, key, value, /*receiver*/)=>{
				/*
					Affects:
						`=` operator
						Array.push()
				*/
				// console.debug(`TRAP --- set. setting $key to $value:`, key, value)
				let meta = this.getMeta(key, target)
				// console.debug('retreived/created meta is:', meta)
				this.setKeyValue(target, key, value, meta)
				return true
			},
			defineProperty: (target, key, descriptor)=>{
				/*
					Affects:
						Object.defineProperty()
				*/
				// console.debug('TRAP --- defineProperty. key, descriptor:', key, descriptor)
				if ('value' in descriptor){ // Data descriptor
					this.setKeyValue(target, key, descriptor.value, this.getMeta(key, target), descriptor)
					return true
				} else if (descriptor.get || descriptor.set ){ // Accessor descriptor
					// We probably shouldn't let user interfere with accessors here
					return false
				} else {
					// Value hasn't changed, so just update the descriptor attributes.
					// We're not changing the value so we probably don't need to call setKeyValue()
					Object.defineProperty(target, key, descriptor)
					return true
				}
			},
			deleteProperty: (target, key)=>{
				/*
					Affects:
						`delete` operator
						Array.pop() ?
				*/
				// info3('TRAP --- deleteProperty. key:', key)
				this.deleteKey(target, key, this.getMeta(key, target))
			}
		}

		target = new Proxy(target, handler) // Write over target with its Proxy
		return target
	}

	getMeta(key, target){
		if (!key) throw Error('[getMeta] Key needed for method .getMeta(key)')
		// console.debug('getMeta', key)

		let metasKey = key

		// Differentiate pre-existing meta for this key from an inherited/inbuilt property key on metas itself
		if (metasKey in this.metas){
			let preexistingMeta = this.metas[metasKey]
			if (preexistingMeta instanceof KeyMeta){
				// We've already added a meta for this key
				// console.debug('preexisting', key)
				return preexistingMeta
			} else {
				// Need this to stop clashing with pre-existing properties of the this.metas object like Array.length or .push()
				metasKey = ReactiveProxy.metasNamespace + key
			}
		}

		// We couldn't find a pre-existing meta for this key, so we'll make one. Consumer is trying to get a value of a property which doesn't (or rather, shouldn't) already exist, because none of the traps that should have been fired when someone added a value to this property's key have created a KeyMeta for this key.
		this.addMeta(key, metasKey, target) 

		return this.metas[metasKey] 
	}

	addMeta(key, metasKey, target){
		let newMeta = new KeyMeta(key)
		this.metas[metasKey] = newMeta

		// Does the target, if not metas, already have this property?
		if (key in target){
			// This key shares a name with a property / method of these inbuilt objects
			if ([Object, Array, Function].some(inbuiltType => key in inbuiltType.prototype)){
				// This is a preexisting property, so we need to be cautious about our ability to track it
				this.metas[metasKey].preExisting = true
			}
		}
		
		let targetVal = target[key]
		// console.debug('TARGETVAL', targetVal, target)

		this.metas[metasKey].set(targetVal) // Add the real value to the meta
	}

	getKeyValue(target, key){
		let targetVal = target[key] // Remember, this access could have gone through a proxy before returning to us
		let keyMeta = this.getMeta(key, target)
		// console.debug('GETkEYvALUE keymeta, watcherstack, targetVal', keyMeta, this.watcherStackForKeyMetas, targetVal)

		// This kind of situation might happen, eg, with an inbuilt 'length' property for an array that was modified.
		if (!isEqual(targetVal, keyMeta.value) && typeof targetVal !== 'function'){
			// console.warn(`[ReactiveProxy] Target property "${key}" was changed without updating its KeyMeta (or notifying its dependants); targetVal, keyMeta.value`, targetVal, keyMeta.value)
		}

		// This is the important part that allows any actions within watcher functions to be alerted to changes, simply by having accessed reactive properties.
		if (this.watcherStackForKeyMetas.current){
			keyMeta.addWatcherToDependants(this.watcherStackForKeyMetas.current)
		} else {
			// console.warn(key)
			// console.warn(`There is no current watcher, yet we're trying to get the ${key}'s value`)
		}
		// return keyMeta.value
		return keyMeta.value
	}

	setKeyValue(target, key, value, keyMeta, descriptor){
		// console.debug('SET KEYMETA + KEY VALUE', key, value, keyMeta)
		let diff = value !== keyMeta.value
		let bothUndefined = value === undefined && keyMeta.value === undefined
		if (diff || bothUndefined){ // Prevent unnecessary update runs, but run if this might be the first set of a new property
			// console.debug('~~~~ qualified for a write')
			if (Object.isExtensible(value)){
				value = new ReactiveProxy(value) // We want to recurse to the bottom of the tree before starting to set values
			}
			
			// Write to the KeyMeta
			keyMeta.set(value) // This is the part that actually informs watchers 

			if (keyMeta.preExisting){
				// console.error(`[ReactiveProxy:setKeyValue] Tried to set a preexisting/inherited property on the target, such as "length". Silently failing.`)
			} else {
				// Write to the target's property
				// TODO: do we actually need to do this, or to even ever actually read/write the target, unless perhaps the property is a function?
				let descriptorToAssign = Object.assign({ 
					value,
					writable: true,
					enumerable: true,
					configurable: true
				}, descriptor)
				Object.defineProperty(target, key, descriptorToAssign) // Touch the actual internal property
			}
		}
	}

	deleteKey(target, key, keyMeta){
		delete target[key]
		keyMeta.set(undefined)
	}
}