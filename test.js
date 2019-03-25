// Inbuilt
const path = require('path')
const fs = require('fs')

const liveServer = require('live-server')
require('chai/register-assert') // Adds `assert` to the global object so tests can depend on it 
let Mocha = require('mocha')

const { parseConfigs, envs } = require('./build-config.js')

console.info(`Running tests simultaneously in Node (in this command line process), and in the browser (at localhost:8083/test) \n\n`)

let config = parseConfigs({
	NODE_VERBOSE: 1,
	NODE_ENV: envs.development,
	LOCAL_SERVER_PORT: 8083,
	LOCAL_SERVER_HOSTNAME: 'localhost'
})

let projectRoot = path.join(__dirname)
let paths = {
	temp: path.join(projectRoot, '.tmp'),
	dist: path.join(projectRoot, 'dist'),
	src: path.join(projectRoot, 'src'),
	nodeModules: path.join(projectRoot, 'node_modules'),
	tests: path.join(projectRoot, 'test')
}

/*
	Browser tests
*/

let port = config.LOCAL_SERVER_PORT
let hostname = config.LOCAL_SERVER_HOSTNAME
console.info(`Starting local server at ${hostname ? hostname : ''}:${port}`)
liveServer.start({
	root: projectRoot,
	host: hostname,
	mount: [ // Mount a directory to a route, allowing browser clients to see "higher" in FS than the root
		['/n', paths.nodeModules],
		['/src', paths.src]
	], 
	port: port,
	open: false, // '/test',
	logLevel: 2
})	


/*
	Node tests
*/

let freshMochaRun = () => {
	let mocha = new Mocha({
		ui: 'bdd'
	})
	mocha.checkLeaks()

	// Add each .spec.js file to the mocha instance
	let files = fs.readdirSync(paths.tests).filter(filename => filename.match(/spec\.js$/))
	files.forEach(filename => {
		mocha.addFile(
			path.join(paths.tests, filename)
		)
	})

	// Run the tests.
	mocha.run(failures => {
		process.exitCode = failures ? 1 : 0  // exit with non-zero status if there were failures
	})
}
freshMochaRun()

// TODO: automatically re-run freshMochaRun on changes to watched files