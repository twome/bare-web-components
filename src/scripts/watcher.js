import { Stack } from './util-iso.js'

/*
	dependentProcess(oldOutput): a function which returns a value. This function can *depend on* the properties of a reactive object, and so
	each time those reactive properties change, this function is run again to "refresh" its output value. This is basically like
	a "render" function for a template, (and was made for that purpose), but can be used more abstractly.

	watcherStack: this is a global-like array of potential watchers that are added to each reactive property's *internal* list of
	subscribers as that reactive property is running its *getter* function. The watcher stack is filled up emphemerally and then 
	depleted for each individual reactive property.
*/
export class Watcher {
	constructor(dependentProcess, watcherStack){
		if (!dependentProcess) throw Error('Missing dependentProcess constructor param')
		this.dependentProcess = dependentProcess

		// Static properties
		Watcher.stack = Watcher.stack || new Stack()
		this.watcherStack = watcherStack || Watcher.stack

		this.dependentOutput = null
		this.update() // Runs the process using initial values
	}

	update(){
		const oldOutput = this.dependentOutput

		this.watcherStack.push(this) // We add this watcher as the current target for the active Dep instance
		// Call the dependentProcess, which uses reactive properties to output something (like a component's HTML)
		this.dependentOutput = this.dependentProcess(oldOutput)

		if (this.dependentOutput instanceof Promise){
			this.dependentOutput.then(val => {
				this.dependentOutput = val
				this.watcherStack.pop()
			})
		} else {
			// We've stopped accessing reactive properties, so tell KeyMetas to stop looking for this watcher
			this.watcherStack.pop()
		}
	}
}