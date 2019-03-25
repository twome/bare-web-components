import { assert } from '../node_modules/chai/chai.js'
const { Builder, By, Key, until } = require('selenium-webdriver')

describe('browser dependent tests', function(){
	this.timeout(30 * 1000)
	
	let firefox
	let chrome
	let domContentLoaded
	let driver
	before(function(done){
		let firefoxBuild = new Builder().forBrowser('firefox').build()
		Promise.all([firefoxBuild/*, chrome*/]).then(arr => {
			driver = arr[0]
			done()
		}, err => {
			throw err
		})
	})

	describe('ReactiveVM', function() {
		beforeEach(function(done) {		
			console.info('Refreshing...')
			driver.get('http://localhost:8081').then(val => { // TODO: does this refresh?
				done()
			})
		})

		describe('construction', function() {
			
			it('throws construction if missing data:Object or el:HTMLElement args', function(done) {
				let inBrowserScript = function(){
					// This is all turned into text which is eval'd in the browser's JS engine.
					let callback = arguments[arguments.length - 1] // Selenium adds this last argument before exec'ing

					let main = () => {
						callback(document.querySelector('body'))
					}

					if (document.readyState === 'complete'){ 
						main() 
					} else {
						document.addEventListener('DOMContentLoaded', main)	
					}
				}
				driver.executeAsyncScript(inBrowserScript).then(val => {
					// assert(something)
					done()
				}, err => {
					throw err
				})
			})

		})

	})

	after(function() {
		driver.quit()
	})
})