// In-house 
import { Stack } from './util-iso.js'
import { ReactiveProxy } from './reactive-object.js'
import throttle from '../../peers/throttle.js'

/*
	Wrapper around ReactiveProxy which binds it to a DOM element, in order to use the ReactiveProxy as a "viewmodel"

	TODO: This basically acts as a factory rather than a normal class
	instance, because the constructor returns a non-instance object (the user
	cannot ever access the instance itself with `this`). Should we refactor/rename this?

	TODO: should this just extend the ReactiveProxy Class?
*/
export class ReactiveVm {
	constructor({
		el,
		watcherStack,
		data = {},
		methods = {}
	}={}){
		this.opt = {el, data, methods} // Save initial args into options object

		if (el instanceof HTMLElement){
			this.el = el
		} else {
			throw Error('[ReactiveVm] needs an active HTMLElement object as its `el` property.')
		}

		this.watcherStack = watcherStack

		let reactiveProxy = new ReactiveProxy(data, this.watcherStack)

		// Elements whose referenced values (KeyMetas) have changed since last render
		this.dirtyEls = []

		this.attemptRender = throttle(this.renderPass, 1000, true)

		this.methods = {}
		for (let key in methods){
			let inputFn = methods[key]
			let fnWithVmReference = (...args)=>{
				inputFn(reactiveProxy, ...args)
			}
			if (this.methods[key] === undefined){
				this.methods[key] = fnWithVmReference
			} else {
				throw Error(`[ReactiveVm] Property ${key} already exists; can't attach method of same name.`)
			}
		}
		
		this.vm = reactiveProxy
	}

	renderPass(){
		console.debug('TODO: render pass here')
		console.debug(this.dirtyEls)
		this.dirtyEls.forEach(dirtyEl => {
			let renderOutput = dirtyEl.soloRender()
		})
		this.dirtyEls = []
	}

	render(/*HTMLElement or custom class*/newDirtyEls){
		// Remember that the following elements tried to render since last pass
		this.dirtyEls = [...this.dirtyEls, ...newDirtyEls]

		this.attemptRender()
	}
}