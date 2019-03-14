import { registerDOMNodesToCustomEls } from './custom-el-reg.js'
import { ReactiveVm } from './reactive-vm.js'
import { Watcher } from './reactive-object.js'

// Import globals to module-scope
let { document, navigator, location } = window

// Convenience
let { querySelector: $, querySelectorAll: $a } = document
let d = document

// Test
let objA = {
	aPropertyName: 'aValue',
	aDeeperObject: {
		aNumericalProp: 2
	}
}

let watcher = new Watcher(oldOutput => {
	let value = objA.aDeeperObject.aNumericalProp
	console.debug('Watcher noticed a change in the value it was watching!', value)
})

document.addEventListener('DOMContentLoaded', ()=>{

let reactiveDom = new ReactiveVm({
	data: objA,
	el: d.querySelector('[data-vm-target]'),
	methods: {
		sayChungus: function sayBungus(){
			console.debug('Chungus. This is:', this)
			console.debug(`We're going to modify a reactive property...`,)
			this.aDeeperObject.aNumericalProp = 5
			console.debug(`...and then take a look at it:`, this.aDeeperObject.aNumericalProp)
			return 'sup folks'
		}
	}
})

console.debug('say chungus please', reactiveDom.$sayChungus())

}) // DOMContentLoaded


// Bind to window for REPL use
window.r = reactiveDom