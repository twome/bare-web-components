// import { ReactiveVm } from './reactive-vm'
import { Watcher } from './watcher.js'

// Test UI component that just has a text field
export class Texta {
	constructor(el, app){
		this.el = el
		this.app = app

		// Internal state (not canonical, the reactive VM is canonical)
		this.state = {}
		this.state.textValue = 'Place du Holder'
		this.state.toggleButton = false
		
		this.watcher = new Watcher(oldVal => {

			// This access inside a Watcher's dependentProcess should add this Watcher to numericalProp's list of watchers
			this.state.textValue = this.app.vm.texta.text
			this.state.toggleButton = this.app.vm.texta.toggle

			// Don't render here; ask the app to add this component to the rendering spool
			this.app.render([this])

			return this.state
		})

		this.templateStr = `<span class="texta_preface">Texta: </span> {{this.state.textValue}} <button class="texta_toggleBtn">{{this.state.toggleButton}}</button>`

		this.soloRender()
	}

	// If we want to render just this component into the live DOM
	soloRender(){
		let rendered = `<span class="texta_preface">Texta: </span> ${this.state.textValue} <button class="texta_toggleBtn">${this.state.toggleButton}</button>`
		this.el.innerHTML = rendered
	}
}