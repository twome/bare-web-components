/*
	Custom element registry
*/
/* side-effects: true */

// Get a reference to the "classed" version of every instance (DOM element) of each custom element we've made
export let registerDOMNodesToCustomEls = (customElClasses, existingInstances)=>{
	let customElInstances = existingInstances || new Map()
	for (let type of customElClasses){
		if (! customElInstances.get(type)) customElInstances.set(type, [])
		let instancesOfType = customElInstances.get(type)
		document.querySelectorAll(type.selector).forEach(el => {
			// Here we instatiate every HTMLElement into its custom class
			let classedEl = new type(el)
			instancesOfType.push(classedEl)
		})	
		customElInstances.set(type, instancesOfType)
	}
	return customElInstances
}