/* global assert */

import { ReactiveProxy } from '../src/scripts/reactive-object.js'
import { ReactiveVm } from '../src/scripts/reactive-vm.js'
import { Watcher } from '../src/scripts/watcher.js'

import { deepObject } from './static-data.js'

describe('ReactiveVm', function() {
	let inputObject
	let sandboxEl
	before(() => {
		inputObject = deepObject
		sandboxEl = document.getElementById('sandbox')
	})

	describe('construction', function(){

		it('constructs from an empty object', function() {
			let testEl = document.createElement('div')
			testEl.setAttribute('data-vm-target', '') // Valueless attribute
			sandboxEl.appendChild(testEl)

			let app = new ReactiveVm({
				data: inputObject,
				el: testEl
			})
		})
		
	})

	describe('DOM binding', function() {
		let testEl
		beforeEach(function() {
			testEl = document.createElement('div')
			sandboxEl.innerHTML = ''
		})

		it('runs methods with access to the VM')
		it('works without a provided watcherStack')
		
		it('registers custom elements (components)')
		it('sends render signal to watching components when its vm changes')
		it('throttles/spools render requests to meet performance goal')
	})
})