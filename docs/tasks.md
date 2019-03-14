# Learn the Web Components spec APIs and create a simple "reactive" UI framework that handles rendering from a viewmodel, through a virtual DOM, and into the real DOM, and then watches the viewmodel in order to re-render. User input in the rendered components directly modifies the viewmodel.

Great practice and probably useful "software design" example for portfolio

What we'll need:

- [x] Learn Proxies to watch vm object for changes (trigger a render), 
	- MutationObservers?? probably only need to use to watch out for *OTHER* javascript adding/changing elements	

- Write render function(s) for each component class
	- Learn <template> and <slot name="foo"> / [slot="foo"]
	- Learn HTML imports "include for the web"
	- use Lodash template syntax? no, that won't parse as valid html. will need to use custom attributes (not data-) and es6 template literals `${}` or handlebars-esque `{{}}`

- use suite of event handlers for v:click="" esque functionality

- Learn basic shadow dom

a very basic Virtual DOM:
- simple list of inbuilt els from list of strings
- classlist-esque generalisation of space-separated attribute values
- attr (dataset and getAttribute/setAttribute)
- innerhtml
- outerhtml

for deep live-objects, make each property **return a live-object** that also has the next net of properties.
each accessor (. or []) is string of chained function calls, like a lambda or whatever 

liveObject.prop1.subProp

[ ] 