// import config from './browser-config.js'

// Import globals to module-scope
let { document, navigator, location } = window

// Convenience
let { querySelector: $, querySelectorAll: $a, addEventListener: on } = document
let d = document, w = window

on('DOMContentLoaded', ()=>{
	console.debug('Hello world!')
})