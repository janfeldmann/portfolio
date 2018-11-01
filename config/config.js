console.log("Loading config...");

// get the base theme paths
const path = require('path');
const system = require('./systems/default');

// set the private dir
const cwd = process.cwd();
const privateDir = path.join(cwd, 'src/client/');
let publicDir = system.paths.publicDir;
let publicRoute = system.paths.publicRoute;
let liveUrl = system.paths.liveUrl;
let Config = {
	paths: {
		privateDir: privateDir,
		publicDir: publicDir,
		liveUrl: liveUrl,
		scripts: {
			src: [
				privateDir + 'js/function/**/*.js',
				privateDir + 'js/handle/**/*.js',
				privateDir + 'js/util/**/*.js',
				privateDir + 'js/global.js',
				privateDir + 'components/**/*.js',
				cwd + '/README.md'
			],
			dest: publicDir + 'js/',
			watch: [
				privateDir + 'js/**/*.js',
				privateDir + 'components/**/*.js'
			]
		},
		templates: {
			components: privateDir + 'components/**/*.hbs',
			src: privateDir + 'templates/',
			partials: privateDir + 'templates/partials/**/*.hbs',
			views: privateDir + 'templates/views/**/*.hbs',
			clean: privateDir + 'templates/*.html'
		},
		styles: {
			src: privateDir + 'sass/main.scss',
			dest: publicDir + 'css/',
			partials: privateDir + 'sass/partials/*.scss',
			components: privateDir + 'components/**/*.scss',
			themeFiles: privateDir + 'themes/**/*.scss'
		},
		images: {
			src: privateDir + 'img/**',
			dest: publicDir + 'img/'
		},
		fonts: {
			src: privateDir + 'fonts/**/*',
			dest: publicDir + 'fonts/'
		},
		routes: {
			[publicRoute]: publicDir,
			[liveUrl]: publicDir,
		},
		publicRoute: publicRoute
	}
};

module.exports = Config;