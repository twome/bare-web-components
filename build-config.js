// 3rd-party dependencies
require('dotenv').config() // We only need side-effects on: process.env
import Enum from './peers/enum.js'

let isInteger = (string, min, max) => {
	let int = Number(string)
	let aboveMin
	let belowMax
	
	if (typeof min === 'number'){
		aboveMin = int >= min
	} else if (min === undefined){
		aboveMin = true
	}

	if (typeof max === 'number'){
		belowMax = int <= max
	} else if (max === undefined){
		belowMax = true
	}

	let withinBounds = aboveMin && belowMax
	return (typeof int === 'number' && withinBounds)
}

let isBoolean = string => (string === 'true') || (string === 'false') || Error('Not boolean text')

export const envs = new Enum(['development', 'staging', 'production'])

export const parseConfigs = (defaults = {}) => {
	let finalConfig = {}

	/*
		App defaults
	*/
	let defaultConfig = defaults

	/*
		Environment variables
	*/
	let envVars = {}

	// Process text environment variables into more useful types & validate them
	if (process.env.NODE_VERBOSE){
		let verbosityAsInt = Number(process.env.NODE_VERBOSE)
		if ( isInteger(verbosityAsInt, 0, 9) ){
			envVars.NODE_VERBOSE = verbosityAsInt
		} else {
			throw Error('config.js: we need a number 0 to 9 (inclusive) for verbosity level (NODE_VERBOSE); you selected: ' + process.env.NODE_VERBOSE)
		}	
	}
	if (process.env.CSS_SOURCEMAPS){
		if (process.env.CSS_SOURCEMAPS === 'true'){
			envVars.CSS_SOURCEMAPS = true
		} else if (process.env.CSS_SOURCEMAPS === 'false'){
			envVars.CSS_SOURCEMAPS = false
		} else {
			throw Error(`config.js: we need exactly 'true' or 'false' for CSS sourcemaps (CSS_SOURCEMAPS); you selected: ' + ${process.env.CSS_SOURCEMAPS}`)
		}	
	}
	if (process.env.NODE_ENV){
		if (process.env.NODE_ENV === 'development'){
			envVars.NODE_ENV = envs.development
		} else if (process.env.NODE_ENV === 'production'){
			envVars.NODE_ENV = envs.production
		} else {
			throw Error('config.js: NODE_ENV must be "production" or "development"')
		}
	}
	if (process.env.LOCAL_SERVER_PORT){
		let portAsInt = Number(process.env.LOCAL_SERVER_PORT)
		if ( isInteger(portAsInt, 0, 99999) ){
			envVars.localServerPort = portAsInt
		} else {
			throw Error('config.js: LOCAL_SERVER_PORT must be a valid port number')
		}
	}
	if (process.env.TEST_EVERY_CHANGE){
		envVars.TEST_EVERY_CHANGE = isBoolean(process.env.TEST_EVERY_CHANGE)
	}

	/*
		Command-line arguments
	*/
	let clArgs = {}


	// Normal unix order of settings precendence
	Object.assign(finalConfig, defaultConfig)
	Object.assign(finalConfig, envVars)
	Object.assign(finalConfig, clArgs)

	return finalConfig
}