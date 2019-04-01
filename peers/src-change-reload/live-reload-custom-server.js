// side-effects: true
// DEVELOPMENT ONLY

// This is used for live-reloading (informing client that the code powering the client is obsolete, so refresh the URL to 
// update the client app).

const chokidar = require('chokidar')
const express = require('express')
// const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const util = require('util')
const readFile = util.promisify(fs.readFile)

let getScriptInjectMiddleware = (publicRoot)=>{
	return function scriptInjectMiddleware(req, res, next){
		let pathSplit = req.path.split('/')
		let file = pathSplit[pathSplit.length - 1]
		if (!file.match(/\./)){ // It's a clean url, not looking for a file but an abstract page
			readFile(path.join(publicRoot, 'index.html'), 'utf-8').then(originalBody => {
				let endOfBodyMatcher = '</body>'
				let replacement = `<script type="module" src="/dev/live-reload-custom.js"></script>\n${endOfBodyMatcher}`
				let injectedBody = originalBody.replace(new RegExp(endOfBodyMatcher), replacement)

				res.status(200)
				res.send(injectedBody)
			}).catch(err => {
				console.debug('errored looking for file:', err)
				res.status(404)
				res.send('Sorry, 404')
			})
		} else {
			next()
		}
	}	
}

let getLiveReloadMiddleware = (getLastModified)=>{
	return function liveReloadMiddleware(req, res, next){ // Use trad functionn form to give a name to generated middleware
		let lastModifiedDate = getLastModified()
		let bodyToRespond = null
		if (lastModifiedDate instanceof Date) bodyToRespond = lastModifiedDate[Symbol.toPrimitive]('number')
		let statusCode = bodyToRespond ? 200 : 204 // OK : No content
		res.status(statusCode)
			.header("Access-Control-Allow-Origin", "*")
			.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
			.send(bodyToRespond)
	}	
}

let liveReloadFileWatcherStart = (callback, publicRoot, watchList = ['**/*'])=>{
	// Watch browser client code for changes, upon which we can send a notification to the client so it can restart
	let fileWatcher = chokidar.watch(
		watchList,
		{
			cwd: publicRoot,
			// Ignore .dotfiles
			ignored: /(^|[\/\\])\../, // eslint-disable-line
			persistent: true,
			followSymlinks: false,
			depth: 5
		}
	)
	
	let onBrowserFileModified = path => {
		console.info('Browser client will refresh due to change in: ' + path)
		callback(new Date())
	}

	// Don't print to console for new added files or we get a surge of them on app launch
	fileWatcher
		.on('add', ()=>{ callback(new Date()) })
		.on('change', onBrowserFileModified)
		.on('unlink', onBrowserFileModified)	
}

// Defining an activeLocalIP will broadcast across local network
export let liveReloadServerStart = ({
	publicRoot,
	appRoot = process.cwd(),
	/*Date*/clientCodeLastModified = new Date(), 
	lastModifiedPollingRoute = '/dev/api/client-code-last-modified',
	hostname = '127.0.0.1',
	port = 2020,
	portToAvoid
}={})=>{
	console.debug('inside start server')
	let lastModified = clientCodeLastModified
	
	liveReloadFileWatcherStart((time) => {
		console.debug('file changed time callback: ', time)
		lastModified = time
	}, publicRoot)

	let getLastModified = () => lastModified

	if (portToAvoid) portToAvoid = Number(portToAvoid) // Ensure it's a number
	if (portToAvoid === port){
		port = portToAvoid + 1
	}
	
	let expressServer = express()

	/*
		Static data routes for 
	*/
	expressServer.use('/', (req, res, next) => {
		console.debug('requested:', req.url)
		next()
	}) 

	expressServer.get(lastModifiedPollingRoute, getLiveReloadMiddleware(getLastModified)) // Development-only route

	expressServer.use('/', getScriptInjectMiddleware(publicRoot))

	expressServer.use('/', express.static(publicRoot)) // Serve brower/public/ files as if they were at domain root

	expressServer.use('/dev/nm/', express.static(path.join(appRoot, 'node_modules')))
	
	expressServer.use('/dev/', express.static(__dirname))
	
	// expressServer.use('/dev/live-reload-custom.js', (req, res, next) => {
	// 	readFile(path.join(__dirname, 'live-reload-custom.js'), 'utf-8').then(body => {
	// 		res.type('text/javascript').send(body)
	// 	})
	// })
	// expressServer.use('/dev/throttle.js', (req, res, next) => {
	// 	readFile(path.join(__dirname, 'throttle.js'), 'utf-8').then(body => {
	// 		res.type('text/javascript').send(body)
	// 	})
	// })

	expressServer.listen(port, hostname, (err)=>{
		if (err) throw err
		// Server ready function
		console.info(`Live reloading server successfully listening at: ${hostname}:${port}`)
	})
	
	expressServer.on('error', err => {
		if (err.code === 'EADDRINUSE'){
			// Retry at the next port
			expressServer.close()
			liveReloadServerStart({
				publicRoot,
				clientCodeLastModified: lastModified, 
				hostname, 
				portToAvoid: portToAvoid + 1, 
				port
			})
		}
	})

	return expressServer
}