import last from '../../node_modules/lodash-es/last.js'
import { DateTime } from '../../peers/luxon.js'

// Isomorphic utilities (do not depend on objects specifically available in Node OR browsers)
// Any global-object dependencies must be included as arguments
export let isValidURL = (str, URI)=>{
	try {
		new URL(str)
		return true
	} catch (err){
		return false
	}
}

// Last in, first out stack. This is basically just an array, but provides a clearer interface when 
// you're supposed to be interacting with *only* the topmost element of an array
export class Stack {
	constructor(){
		this._stack = []
	}

	get current(){
		let top = last(this._stack)
		return (top === undefined) ? null : top
	}

	push(newItem){
		this._stack.push(newItem)
	}

	pop(){
		this._stack.pop()
	}
}

export let strSplice = (str, insertionIndex, deleteLength, ...newItems)=>{
	let arr = str.split('')
	arr.splice(insertionIndex, deleteLength, ...newItems)
	let newStr = arr.join('')
	return newStr
}

export let filenameFromUri = (uri)=>{
	return uri.substring(uri.lastIndexOf('/') + 1)
}

export let utcIsoStringToDateObj = (utcIsoString)=>{
	return DateTime.fromISO(utcIsoString).toJSDate()
}