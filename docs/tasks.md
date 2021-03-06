# Todo / tasks

∆ test using the OUTPUT code, not source -- in env:dev, we need to expose/export everything we need to test

Goal: Learn the Web Components spec APIs and create a simple "reactive" UI framework that handles rendering from a viewmodel, through a virtual DOM, and into the real DOM, and then watches the viewmodel in order to re-render. User input in the rendered components directly modifies the viewmodel.

What we'll need:

- [x] Learn Proxies to watch vm object for changes (trigger a render), 
	- MutationObservers?? probably only need to use to watch out for *OTHER* javascript adding/changing elements	

- Write render function(s) for each component class
	- how the hell do we trigger a render on "any property of an object changing", rather than one specific property?
		- simply give the same THROTTLED render() call to every property, AND pass in the current keyMeta as an argument, so then the render function could theoretically customise the way that it works to *only* update those properties that have changed between each render pass!
		- add a 'forComponent: ' property to each Watcher, so that each KeyMeta's watcher list then contains a list of every component instance that is watching the (unknowable beforehand) VM props that it needs to access
		- do we need the proxy itself to be a reactive property? - only if we want to efficiently sense whether anything at all needs to be updated (without yet knowing *what* exactly)
			- can we we track successive get()s as they descend the object tree, thus linking them into a full path that tells us the property being accessed?
		- first we need to use/change props and have them react
		- then we need to simply call a method
		- then we need to run a watcher around a {{}} in a text node
		- then we need to run a watcher around attribute values
	- Learn \<template\> and \<slot name="foo"\> / [slot="foo"]
	- Learn HTML imports "include for the web"
	- use Lodash/ERB template syntax? no, that won't parse as valid html (does it need to if we're processing it as static text?). will need to use custom attributes (not data-) and es6 template literals `${}` or handlebars-esque `{{}}` within text nodes and attribute value strings.
		- could all of the declarative rendering stuff be implemented as a totally optional suite of components or attributes that have stuff like v:click, v:if, v:for? then the user could handle all rendering themselves and only use the reactive VM object part

- use suite of event handlers for v:click="" esque functionality

- Learn basic shadow dom

a very basic Virtual DOM:
- simple list of inbuilt els from list of strings
- classlist-esque generalisation of space-separated attribute values
- attr (dataset and getAttribute/setAttribute)
- innerhtml (ie TextNodes)
- outerhtml
- children

for deep live-objects, make each property **return a live-object** that also has the next net of properties.
each accessor (. or []) is string of chained function calls, like a lambda or whatever 

liveObject.prop1.subProp

[ ]