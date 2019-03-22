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
			arr: [1, 2, 3],
			obj: {
				deepText: 'text value of nested property'
			}
		}

		stack = new Stack()
	})

	describe('ReactiveProxy', function(){

		it('constructs from an empty object', function() {
			let rProxy = new ReactiveProxy({})
			assert.isObject(rProxy)
		})
		
		it('constructs from a simple object', function() {
			let rProxy = new ReactiveProxy(inputObject)
			assert.isObject(rProxy)
		})


	    it('gets shallow properties', function() {
	    	assert(inputObject.shallowText === new ReactiveProxy(inputObject).shallowText)
	    })

	    it('gets deep properties', function() {
	    	let p = new ReactiveProxy(inputObject),
	    	    o = inputObject
	    	assert.strictEqual(p.arr[0], o.arr[0])
	    	assert.strictEqual(p.obj.deepText, o.obj.deepText)
	    })

	    it('sets existing properties', function() {
	    	let rProxy = new ReactiveProxy(inputObject)
	    	rProxy.shallowText = 'new text'
	    	assert(rProxy.shallowText === 'new text')
	    })

	    it('sets a new property key', function() {
	    	let rProxy = new ReactiveProxy(inputObject)
	    	rProxy.newKey = 'surprise!'
	    	assert.strictEqual(rProxy.newKey, 'surprise!')
	    })

		it('can use the default stack instantiated in the import()ed Watcher module')

	    it(`doesn't get progressively slower over time with successive reads or writes`)
	})

	describe('Watcher', function() {
		let rProxy
		let watcherFn
		let runCount
		beforeEach(function() {
			rProxy = new ReactiveProxy(inputObject)
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
			let lastVal
			new Watcher(oldVal => {
				runCount = runCount + 1
				lastVal = rProxy.shallowText // Do nothing; simply trigger the Proxy 'get' handler
			})
			rProxy.shallowText = 'different value'
			assert.strictEqual(runCount, 2) // Once immediate, once after access
			assert.strictEqual(rProxy.shallowText, 'different value')
			assert.strictEqual(lastVal, 'different value')
		})

		it(`is notified when a hitherto non-existent property is first assigned`, function() {
			let lastVal
			new Watcher(oldVal => {
				runCount = runCount + 1
				lastVal = rProxy.nonExistentKey // Do nothing; simply trigger the Proxy 'get' handler
				rProxy.nonExistentKey
				rProxy.nonExistentKey
				rProxy.nonExistentKey
				rProxy.nonExistentKey
				lastVal = rProxy.nonExistentKey
			})
			assert.strictEqual(lastVal, undefined)
			assert.strictEqual(runCount, 1)

			rProxy.nonExistentKey = 42 // trigger a dependentProcess()
			assert.strictEqual(lastVal, 42)
			assert.strictEqual(runCount, 2)

			rProxy.nonExistentKey = 'eh?' // trigger a dependentProcess()
			assert.strictEqual(lastVal, 'eh?')
			assert.strictEqual(runCount, 3)
		})

		it(`dependentProcess receives its last return output as its own first parameter`, function() {
			let oldValsLog = []
			new Watcher(oldVal => {
				runCount = runCount + 1
				
				oldValsLog.push([oldVal, runCount])

				rProxy.shallowText // Do nothing; simply trigger the Proxy 'get' handler
				return 'static runCount'
			})
			assert.sameDeepOrderedMembers(oldValsLog, [[undefined, 1]]) // By here we have done 1 run (initialising)

			rProxy.shallowText = 'different value'
			assert.sameDeepOrderedMembers(oldValsLog, [
				[undefined, 1], 
				['static runCount', 2]
			]) // By here we've done 2 runs

			// rProxy.shallowText = 'another different value'
			// assert.sameDeepOrderedMembers(oldValsLog, [undefined, '1 runs', '2 runs']) // By here we've done 3 runs
		})

		it(`doesn't need to specify a stack - both Watcher and KeyMeta can use static Watcher.stack`, function() {
			let noProvidedStackProxy = new ReactiveProxy(inputObject)
			new Watcher(oldVal => {
				runCount = runCount + 1
				noProvidedStackProxy.shallowText // Do nothing; simply trigger the Proxy 'get' handler
			})
			noProvidedStackProxy.shallowText = 'a change'
			assert.strictEqual(runCount, 2)
			noProvidedStackProxy.shallowText = 'another change'
			assert.strictEqual(runCount, 3)
		})

		it(`doesn't get trapped in a loop if it sets a property it watches`)
	})

})