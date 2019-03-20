import { assert } from '../node_modules/chai/chai.js'

import { ReactiveProxy } from '../src/scripts/reactive-object.js'
import { Watcher } from '../src/scripts/watcher.js'
import { Stack } from '../src/scripts/util-iso.js'

describe('Whole reactive system', function() {
	let inputObject
	let stack
	before(() => {
		inputObject = {
			shallowText: 'text value',
			arr: [
				1,
				2,
				3
			],
			obj: {
				deepText: 'text value of nested property'
			}
		}

		stack = new Stack()
	})

	describe('ReactiveProxy', function(){

		it('constructs from a bare object', function() {
			let rProxy = new ReactiveProxy(inputObject, stack)
			assert(typeof rProxy === 'object', 'is a Proxy instance')
		})

		it('can use the default stack instantiated in the import()ed Watcher module')
		// it('can use the default stack instantiated in the import()ed Watcher module', function() {
			// let rProxy = new ReactiveProxy(inputObject)
			// assert(rProxy.watcherStackForKeyMetas instanceof Stack)
		// })

	    it('gets shallow properties', function() {
	    	assert(inputObject.shallowText === new ReactiveProxy(inputObject, stack).shallowText)
	    })

	    it('gets deep properties', function() {
	    	let p = new ReactiveProxy(inputObject, stack),
	    	    o = inputObject
	    	assert.strictEqual(p.arr[0], o.arr[0])
	    	assert.strictEqual(p.obj.deepText, o.obj.deepText)
	    })

	    it('sets existing properties', function() {
	    	let rProxy = new ReactiveProxy(inputObject, stack)
	    	rProxy.shallowText = 'new text'
	    	assert(rProxy.shallowText === 'new text')
	    })

	    it('sets a new property key', function() {
	    	let rProxy = new ReactiveProxy(inputObject, stack)
	    	rProxy.newKey = 'surprise!'
	    	assert.strictEqual(rProxy.newKey, 'surprise!')
	    })

	    it(`doesn't get progressively slower over time with successive reads or writes`)
	})

	describe('Watcher', function() {
		let rProxy
		let watcherFn
		let runCount
		beforeEach(function() {
			rProxy = new ReactiveProxy(inputObject, stack)
			runCount = 0
		})

		it('construction: gives error without dependentFn argument', function() {
			assert.throws(() => new Watcher())
		})

		it('is notified immediately after construction', function() {
			new Watcher(oldVal => runCount = runCount + 1)
			assert(runCount === 1)
		})

		it('is notified when a preexisting watched value changes', function() {
			new Watcher(oldVal => {
				runCount = runCount + 1
				rProxy.shallowText // Do nothing; simply trigger the Proxy 'get' handler
			})
			rProxy.shallowText = 'different value'
			assert.strictEqual(runCount, 2) // Once immediate, once after access
		})

		it(`doesn't get trapped in a loop if it sets a property it watches`)

		it(`can watch a hitherto non-existent property`)
	})

})