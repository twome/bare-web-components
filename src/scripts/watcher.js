import { Stack } from './util-iso.js'

/*
	dependentProcess(oldOutput): a function which returns a value. This function can *depend on* the properties of a reactive object, and so each time those reactive properties change, this function is run again to "refresh" its output value. This is basically like a "render" function for a template, (and was made for that purpose), but can be used more abstractly.

	watcherStack: this is a Stack of potential watchers, shared between watchers and KeyMetas, that are added to each reactive property's *internal* list of subscribers as that reactive property is running its *getter* function. The watcher stack is filled up emphemerally and then depleted for each individual reactive property.
*/
export class Watcher {
	constructor(dependentProcess, stackOfWatchersCurrentlyAccessing){
		if (!dependentProcess) throw Error('Missing dependentProcess constructor param')
		this.dependentProcess = dependentProcess

		this.stackOfWatchersCurrentlyAccessing = stackOfWatchersCurrentlyAccessing || Watcher.stack

		this.lastOutput = undefined
		this.update() // Runs the process using initial values, during which process this is registered to all accessed KeyMetas
		// TODO this is delaying the value the watcher sees by one?
	}

	update(){
		this.stackOfWatchersCurrentlyAccessing.push(this) // We add this watcher as the current target for the active Dep instance
		
		// Call the dependentProcess, which uses reactive properties to output something (like a component's HTML)
		this.lastOutput = this.dependentProcess(this.lastOutput)

		// We've stopped accessing reactive properties, so tell KeyMetas to stop looking for this watcher
		this.stackOfWatchersCurrentlyAccessing.pop()
	}
}
Watcher.stack = new Stack() // This will be the pseudo-global "state" shared by KeyMetas and Watchers
