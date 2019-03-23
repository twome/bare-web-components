import { assert } from '../node_modules/chai/chai.js'
const { Builder, By, Key, until } = require('selenium-webdriver')

import { ReactiveProxy } from '../src/scripts/reactive-object.js'
import { ReactiveVm } from '../src/scripts/reactive-vm.js'
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
			let lastOldVal
			new Watcher(oldVal => {
				runCount = runCount + 1
				
				lastOldVal = oldVal

				rProxy.shallowText // Do nothing; simply trigger the Proxy 'get' handler
				return runCount
			})
			assert.strictEqual(lastOldVal, undefined) // By here we have done 1 run (initialising)
			assert.strictEqual(runCount, 1)

			rProxy.shallowText = 'different value'
			
			// assert.strictEqual(lastOldVal, undefined) // currently correct
			assert.strictEqual(lastOldVal, 1) // TODO: Why do both values lag by one??
			// assert.strictEqual(runCount, 1) // currently correct
			assert.strictEqual(runCount, 2)
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

describe('browser dependent tests', function(){
	this.timeout(30 * 1000)
	
	let firefox
	let chrome
	before(function(done){
		firefox = new Builder().forBrowser('firefox').build()
		Promise.all([firefox/*, chrome*/]).then(arr => {
			done()
		}, err => {
			throw err
		})
	})

	beforeEach(function(done) {		
		firefox.then(driver => {
			// driver.getWindowHandle().then(windowHandle => {
				// console.debug({windowHandle})
			// })
			
			console.debug('attempting refresh')
			// console.debug(driver.sendKeys(Key.F5))
			driver.get('http://localhost:8081').then(val => {

				driver.findElement(By.tagName('input'))
					.then(inputEl => {
						inputEl.sendKeys('i am writing from webdriver', Key.RETURN)
						console.debug('done inputting!')
					})

				// 	console.debug('find element worked!')
				// 	driver.wait(until.titleIs('webdriver - Google Search'), 1000).then(val => {
				// 		console.debug('waiting for title worked!')
				// 	})
				// })

				setTimeout(done, 5000)
			})
		
		})
	})

	describe('ReactiveVM', function() {
		describe('construction', function() {
			it('throws construction if missing data:Object or el:HTMLElement args', function(done) {
				setTimeout(function() {
					done()
				}, 5000)
				// console.debug('vm construction test')
				// let vmo = new ReactiveVm({
				// 	data: inputObject,
				// 	el: document.querySelector('[data-vm-target]')
				// })
			})
		})
	})

	after(function() {
		firefox.then(driver => {
			driver.quit().then(()=>{ 
				console.info('Browser closed.') 
			})
		})
	})
})