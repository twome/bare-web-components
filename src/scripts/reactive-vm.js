// In-house 
import { Stack } from './util-iso.js'
import { ReactiveProxy, Watcher } from './reactive-object.js'

/*
	Wrapper around ReactiveProxy which binds it to a DOM element, in order to use the ReactiveProxy as a "viewmodel"

	TODO: This basically acts as a factory rather than a normal class
	instance, because the constructor returns a non-instance object (the user
	cannot ever access the instance itself with `this`). Should we refactor/rename this?
*/
export class ReactiveVm {
	constructor({
		el = {},
		data = {},
		methods = {}
	}={}){
		const opt = {el, data, methods} // Save initial args into options object

		if (typeof el === 'string'){
			const foundEls = document.querySelectorAll(el)
			el = foundEls[0]
			if (foundEls.length >= 2){
				console.error('[ReactiveVm] Matched elements:', foundEls)
				throw Error('[ReactiveVm] Needs a *unique* selector; you provided a selector that matches >1 page elements.')
			}
		}
		if (el instanceof HTMLElement){
			this.el = el
		} else {
			throw Error('[ReactiveVm] needs an active HTMLElement object or a selector string which identifies to a unique HTMLElement as its `el` property.')
		}

		let watcherStack = new Stack()

		let vm = new ReactiveProxy(data, watcherStack)

		// Attach methods with '$' prefix to root of reactive vm object
		for (let key in opt.methods){
			let fn = opt.methods[key]
			if (vm[key] === undefined){
				vm['$' + key] = fn
			} else {
				throw Error(`[ReactiveVm] Property ${key} already exists; can't attach method of same name.`)
			}
		}

		// Helper properties for user
		vm['$data'] = data
		vm['$el'] = el
		
		return vm
	}
}