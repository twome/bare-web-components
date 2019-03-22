import { registerDOMNodesToCustomEls } from './custom-el-reg.js'
import { ReactiveVm } from './reactive-vm.js'
import { ReactiveProxy } from './reactive-object.js'
import { Watcher } from './watcher.js'
import { Texta } from './texta.js'

import { Stack } from './util-iso.js'

// Import globals to module-scope
let { document, navigator, location } = window

// Test
let objA = {
	aPropertyName: 'aValue',
	aDeeperObject: {
		aNumericalProp: 2
	},
	texta: {
		text: 'Testarooni', 
		toggle: true
	}
}

let customWatcherStack = new Stack()

document.addEventListener('DOMContentLoaded', ()=>{

let app = new ReactiveVm({
	data: objA,
	el: document.querySelector('[data-vm-target]'),
	methods: {
		// sayChungus: function sayBungus(vm){
		// 	// console.debug('Chungus. VM is:', vm)
		// 	console.debug(`We're going to modify a reactive property to 5...`,)
		// 	vm.aDeeperObject.aNumericalProp = 5
		// 	console.debug(`...and then take a look at it:`, vm.aDeeperObject.aNumericalProp)
		// 	return 'sup folks'
		// }
	},
	watcherStack: customWatcherStack
})

let proxy = new ReactiveProxy(objA, customWatcherStack)

let runCount = 0
let lastVal
let watcher = new Watcher(oldOutput => {
	// console.debug('WATCHER PROCESS RUN', oldOutput)
	runCount = runCount + 1
	// console.debug('watcher before accessing:', runCount)
	let value = proxy.unknownProperty
	value = proxy.unknownProperty
	value = proxy.unknownProperty
	value = proxy.unknownProperty
	value = proxy.unknownProperty
	lastVal = value
	console.debug('watcher after accessing:', value, runCount)
	// if (oldOutput) console.debug('Watcher noticed a change in the value it was watching!', value)
	return value
}, customWatcherStack)
console.debug('*** EXTERNAL runCount and accesses', lastVal, runCount, proxy.unknownProperty, proxy.unknownProperty)
if (runCount === 1) console.debug('∆∆∆∆∆∆∆ PASSED!!!')

proxy.unknownProperty = 'first'
console.debug('*** EXTERNAL runCount and accesses',  lastVal, runCount, proxy.unknownProperty, proxy.unknownProperty)
if (runCount === 2) console.debug('∆∆∆∆∆∆∆ PASSED!!!')

proxy.unknownProperty = 'second'
console.debug('*** EXTERNAL runCount and accesses',  lastVal, runCount, proxy.unknownProperty, proxy.unknownProperty)
if (runCount === 3) console.debug('∆∆∆∆∆∆∆ PASSED!!!')

proxy.unknownProperty = 'third'


let textaEl = document.querySelector('.texta')

// let textaClassed = new Texta(textaEl, app)
// app.methods.sayChungus()

// Bind to window for REPL use
Object.assign(window, { app, Stack, Watcher, ReactiveProxy, ReactiveVm, Texta })

}) // DOMContentLoaded