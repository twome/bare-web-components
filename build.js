/* eslint-env node */
console.info(`Running ${__filename}`)

// Inbuilt
const path = require('path')
const fs = require('fs')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)

// 3rd-party
const del = require('del')
const parcel = require('parcel-bundler')
const Vinyl = require('vinyl')
const asyncDone = require('async-done')
import template from './node_modules/lodash-es/template.js'
const liveServer = require('live-server')
const dependencyTree = require('dependency-tree')

// ## Gulp & plugins
const gulp = require('gulp')
const gDebug = require('gulp-debug')
const gESLint = require('gulp-eslint')
const gTemplate = require('gulp-template')
const gSourcemaps = require('gulp-sourcemaps')
const gImagemin = require('gulp-imagemin')
const gHtmlmin = require('gulp-htmlmin')
const gInsert = require('gulp-insert')

const vinylSourceStream = require('vinyl-source-stream')
const vinylBuffer = require('vinyl-buffer')

// ## Postcss & plugins
import postcss from './node_modules/gulp-postcss/index.js'
import postcssNormalize from './node_modules/postcss-normalize/index.es.js'
import precss from './node_modules/precss/index.mjs'
const postcssImport = require('postcss-import')
const cssnano = require('cssnano')
const postcssScss = require('postcss-scss')
const autoprefixer = require('autoprefixer')

console.info('Module imports finished.')

// In-house
const { parseConfigs, envs } = require('./build-config.js')
import throttle from './peers/throttle.js'

// Parse environment variable & command-line config settings into a config object (passing in app defaults)
let config = parseConfigs({
	NODE_VERBOSE: 1,
	NODE_ENV: envs.production,
	LOCAL_SERVER_PORT: 8081,
	LOCAL_SERVER_HOSTNAME: 'localhost',
	CSS_SOURCEMAPS: true
})

console.info(`Running in ${config.NODE_ENV.humanName} mode.`)

// Convenience assignmenmts & build-file utilities
let inDev = config.NODE_ENV === envs.development
let p = path.join
let ignoredPaths = pathArr => pathArr.map(val => '!' + val)
let makeGulpStreamSync = fileObj => vinylSourceStream(fileObj.name).write(fileObj.contents).end().pipe(vinylBuffer())
let makeGulpStream = (fileName)=>{
	// This is an empty stream; use the .write(contents) and then .end() methods to use it.
	return vinylSourceStream(fileName).pipe(vinylBuffer())
}

// Build-process config
let paths = {
	// Non-source / machine output:
	cache: p(__dirname, '.cache'),
	temp: p(__dirname, '.tmp'), // Where we send the pre-processed site before bundling with Parcel. Dev server should be able to run here.
	dist: p(__dirname, 'dist'), // Distribution - the final site to publically upload.

	// Source files:
	raw: p(__dirname, 'raw'), // Static assets that don't need processing before serving
	html: {
		src: p(__dirname, 'src/views'),
		temp: p(__dirname, '.tmp'),
		dest: p(__dirname, 'dist')
	},
	css: {
		src: p(__dirname, 'src/styles'),
		temp: p(__dirname, '.tmp/styles')
	},
	js: {
		src: p(__dirname, 'src/scripts'),
		temp: p(__dirname, '.tmp/scripts')
	},
	images: {
		src: p(__dirname, 'src/images'),
		temp: p(__dirname, '.tmp/images')
	},
	sounds: {
		src: p(__dirname, 'src/sounds'),
		temp: p(__dirname, '.tmp/sounds')
	},
	fonts: {
		src: p(__dirname, 'src/fonts'),
		temp: p(__dirname, '.tmp/fonts')
	}
}

// This build process relies on these files
let buildConfigDependencies = [
	p(__dirname, `build.js`),
	p(__dirname, 'build-config.js'),
	p(__dirname, '.env'),
	p(__dirname, 'package.json')
]

/*
	Tasks
*/

let cssTask = ()=>{
	// here 'pc' is short for 'PostCSS'
	let pcPlugins = [
		postcssImport(), // pre-processed @import commands (like Sass)
		precss(), // SCSS-like functionality such as terse "$variable" syntax & rule nesting 
		postcssNormalize({ // adds CSS Normalize, without needing to keep a local copy in source code
			forceImport: true // Forces an @import-normalize statement at the start of the CSS, rather than needing to write it in the source file.
		}),
		autoprefixer() // Automatically adds/removes vendor prefixes for rules. Gets its configuration from `browserslist` property in package.json
	]
	if (!inDev) pcPlugins.push(cssnano()) // Minifies CSS

	let pcOptions = {
		parser: postcssScss // Needed for inline comments; most of the other Sass-like functionality is provided through `precss` and `postcssImport`
	}

	let stream = gulp.src([
		p(paths.css.src, '**/*.css'),
		'!' + (paths.css.src, '**/_*.css') // Exclude partials
	])
	if (config.CSS_SOURCEMAPS) stream = stream.pipe(gSourcemaps.init())
	stream = stream.pipe(postcss(pcPlugins, pcOptions))
		.on('error', err => { 
			console.error(err); 
			// throw err 
		})
	if (config.CSS_SOURCEMAPS) stream = stream.pipe(gSourcemaps.write('.'))
	stream = stream.pipe(gDebug({ title: 'postCSS output', count: false }))
	return stream.pipe(gulp.dest(paths.css.temp))
}



let htmlTemplateTask = ()=>{
	const inPath = p(paths.html.src, 'index.template.html')

	let templatedString
	let dataForTemplate = {
		inDev,
		paths: {
			css: paths.css.temp, // TODO: if this is going into Parcel, then this absolute path is not user-facing
			js: paths.js.temp // TODO: if this is going into Parcel, then this absolute path is not user-facing
		}
	}

	let htmlStream = vinylSourceStream('index.html')
	readFile(inPath).then(rawTemplateText => {
		let compiled = template(rawTemplateText)
		templatedString = compiled(dataForTemplate)

		htmlStream.write(templatedString)
		htmlStream.end()
		htmlStream.on('error', err => console.error(err))
	}, err => {
		console.error(err)
		return err
	})
	return htmlStream
		.pipe(vinylBuffer())
		.pipe(gHtmlmin())
		.pipe(gulp.dest(paths.html.temp))
}

let htmlSimpleTask = ()=>{
	let stream = gulp.src([
		p(paths.html.src, '**/*.html'),
		'!' + p(paths.html.src, '**/*.template.html')
	])
	return stream.pipe(gDebug({ title: 'HTML file to temp', count: false }))
		.pipe(gulp.dest(paths.temp))
}



let lintTask = () => gulp.src([
		p(paths.js.src, '**/*.js'),
		'!' + p(paths.js.src, 'vendor/**/*.js')
	])
	.pipe(gESLint({
		env: {
			es6: true,
			browser: true
		},
		parserOptions: {
			sourceType: 'module',
			ecmaVersion: 2018
		},
		extends: 'eslint:recommended',
		rules: {
			'no-unused-vars': 0,
			'no-console': 0,
			'no-mixed-spaces-and-tabs': 0
		},
		globals: []
	}))
	.pipe(gESLint.format())
	.pipe(gESLint.failAfterError())

let jsTask = () => {
	return gulp.src(p(paths.js.src, '**/*.js'))
		.pipe(gulp.dest(paths.js.temp))	
}

// TODO
// This just imports unpublished node modules to a version controlled directory so it's always available a development dependency
// Basically this is like a git submodule, without the git
let dependencyTask = ()=>{
	let tree = dependencyTree({
		filename: p(paths.html.temp, 'index.html')
	})

	// TODO: do a simple filesystem copy of dependencies into <projectroot>/peers
}

let parcelTask = ()=>{
	const entryFiles = [
		p(paths.html.temp, 'index.html')
	]
	const options = {
		outDir: paths.dist,
		publicUrl: '/',
		hmr: false,
		// global: 'parcelGlobalNamespace',
		// watch: false,
		contentHash: !inDev,
		minify: !inDev,
		production: !inDev, // TODO: what does this do exactly?
		cacheDir: p(paths.cache, 'parcel')
	}
	let bundler = new parcel(entryFiles, options)
	bundler.on('bundled', ()=>{
		console.info('~~~ Bundle finished')
	})
	
	let bundle = bundler.bundle()

	return bundle // Promise
}





let imagesTask = () => {
	let stream = gulp.src(p(paths.images.src, '**/*'))
		
	if (!inDev){ 
		stream = stream.pipe(gImagemin())
			.pipe(gDebug({ title: `imagemin'd`, count: false }))
	}

	return stream.pipe(gulp.dest(paths.images.temp))
}



let soundsTask = () => {
	let stream = gulp.src(p(paths.sounds.src, '**/*'))

	return stream.pipe(gulp.dest(paths.sounds.temp))
}



let serverTask = () => {
	let port = config.LOCAL_SERVER_PORT
	let hostname = config.LOCAL_SERVER_HOSTNAME

	console.info(`Starting local server at ${hostname ? hostname : ''}:${port}`)

	return new Promise(()=>{ // Will never resolve/reject
		liveServer.start({
			root: !inDev ? paths.dist : paths.dist,
			host: hostname,
			port: port,
			open: false,
			logLevel: 2
		})	
	})
}



// CAUTION: This deletes the containing folders, not just the contents.
// Our build process should be able to handle recreating missing folders smoothly.
let cleanTask = () => {
	return del([
		paths.dist,
		paths.cache,
		paths.temp
	])
}

let rawTask = () => {
	let stream = gulp.src(p(paths.raw, '**/*'), { dot: true })

	stream = stream.pipe(gDebug({ title: 'raw file to temp', count: false }))
		.pipe(gulp.dest(paths.temp))
	if (!inDev){
		stream = stream.pipe(gDebug({ title: 'raw file to dist', count: false }))
			.pipe(gulp.dest(paths.dist))
	}
	return stream
}

let fontsTask = () => {
	return gulp.src(p(paths.fonts.src, '**/*'))
		.pipe(gDebug({ title: 'fonts file to temp', count: false }))
		.pipe(gulp.dest(paths.fonts.temp))
}



// Watchers

let cssWatch = () => {
	return gulp.watch(
		p(paths.css.src, '**/*.css'), 
		cssTask
	)
}
let jsWatch = () => {
	return gulp.watch(
		[
			p(paths.js.src, '**/*.js')
		],
		jsTask
	)
}
let imagesWatch = () => {
	return gulp.watch(
		[
			p(paths.images.src) + '**/*'
		],
		imagesTask
	)
}
let rawWatch = () => {
	return gulp.watch(
		[
			p(paths.raw, '**/*')
		],
		rawTask
	)
}
let fontsWatch = () => {
	return gulp.watch(
		[
			p(paths.fonts.src, '**/*')
		],
		fontsTask
	)
}
let htmlWatch = () => {
	return gulp.watch(
		p(paths.html.src, '**/*.html'),
		gulp.parallel(
			// htmlTemplateTask,
			htmlSimpleTask
		)
	)
}
let parcelWatch = () => {
	return gulp.watch(
		[
			p(paths.temp, '**/*')
		],
		parcelTask
	)
}


let forceExit = () => setTimeout( process.exit, 5000 )

// Workflows

let devWorkflow = gulp.series(
	gulp.parallel(
		cssTask,
		jsTask,
		// htmlTemplateTask,
		htmlSimpleTask,
		rawTask,
		fontsTask,
		imagesTask,
		soundsTask,
		parcelTask
	),
	gulp.parallel(
		cssWatch,
		jsWatch,
		htmlWatch,
		rawWatch,
		fontsWatch,
		imagesWatch,
		parcelWatch,
		serverTask
	),
)

let stagingWorkflow = gulp.series(
	cleanTask,
	cssTask,
	lintTask,
	jsTask,
	// htmlTemplateTask,
	htmlSimpleTask,
	imagesTask,
	soundsTask,
	fontsTask,
	rawTask,
	parcelTask
)

let productionWorkflow = gulp.series(
	cleanTask,
	cssTask,
	lintTask,
	jsTask,
	// htmlTemplateTask,
	htmlSimpleTask,
	imagesTask,
	soundsTask,
	fontsTask,
	rawTask,
	parcelTask,
	forceExit
)

// Export atomised tasks in case we want to run them for specialised reasons
module.exports['css'] = cssTask
module.exports['html:template'] = htmlTemplateTask
module.exports['html:simple'] = htmlSimpleTask
module.exports['js'] = jsTask
module.exports['lint'] = lintTask
module.exports['raw'] = rawTask
module.exports['images'] = imagesTask
module.exports['parcel'] = parcelTask
module.exports['clean'] = cleanTask 
module.exports['server'] = serverTask 

// TODO
// module.exports['deploy'] = deployTask 

// Watchers
module.exports['watch:css'] = cssWatch
module.exports['watch:js'] = jsWatch
module.exports['watch:html'] = htmlWatch
module.exports['watch:images'] = imagesWatch
module.exports['watch:raw'] = rawWatch

// One-command workflows
module.exports['dev'] = devWorkflow
module.exports['staging'] = stagingWorkflow
module.exports['prod'] = productionWorkflow

// If we run this file with no arguments, then default to the build workflow for whichever release environment we're in
let envToWorkflowsMap = {
	development: devWorkflow,
	staging: stagingWorkflow,
	production: productionWorkflow
}
module.exports['default'] = envToWorkflowsMap[config.NODE_ENV.humanName]
 
// Automatically end the build process if any of its dependencies change
gulp.watch(buildConfigDependencies, ()=>{
	console.error(`[buildfile] One of the configuration files the buildfile depends on has changed; ending.`)
	process.kill(process.pid, 'SIGINT')
})


if (process.argv.length >= 4){ 
	throw Error('[buildfile] Too many command-line arguments provided to buildfile - we expect just one; the name of the task to execute.') 
}
let taskName = process.argv[2]
if (taskName){
	console.info(`Attempting to execute task "${taskName}"`)
	
	// Because we've exported tasks to the module rather than using
	// gulp.task to register them, we can just call them directly as 
	// JS functions.
	if (['dev', 'staging', 'prod'].includes(taskName)){
		throw Error('Tried to run a workflow/macro. Don\'t run these directly - just run a build and the release environment (NODE_ENV) will determine the workflow.')
	} else {
		// NB: This is going to directly run the task
		// without any Gulp infrastructure (as you would otherwise get with
		// gulp.series() or .parallel() ).
		asyncDone(module.exports[taskName], (err, result) => {
			if (err) throw err
			if (result instanceof Buffer) result = result.toString()
			if (result instanceof Vinyl) result = result.contents.toString()
			console.info(`Task "${taskName}" complete. Returned: \n`, result)
		})	
	}
} else {
	console.info(`No task argument provided; executing default task.`)
	module.exports.default()
}
