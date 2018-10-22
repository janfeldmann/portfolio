console.log("Loading config");

// get the base theme paths
const path = require('path');
const util = require('gulp-util');
const system = require('./systems/typo3');
const merge = require('deepmerge');

// set the private dir
const cwd = process.cwd();
const privateDir = path.join(cwd, 'src/');
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

// check if the theme argument has been set
if (util.env.theme && util.env.theme.length) {
	// get theme data, e.g. themes/themeName/theme.js
	const targetTheme = require('../src/themes/' + util.env.theme + '/theme');

	// check if theme data is valid
	if (targetTheme) {
		// set paths to theme paths
		Config = merge(Config, targetTheme.config);
		Config.themeName = util.env.theme;
	}
}

module.exports = Config;