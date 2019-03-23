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
})

let textaEl = document.querySelector('.texta')

// let textaClassed = new Texta(textaEl, app)
// app.methods.sayChungus()

// Bind to window for REPL use
Object.assign(window, { app, Stack, Watcher, ReactiveProxy, ReactiveVm, Texta })

}) // DOMContentLoaded