/**
 * Description: styles
 *
 * compile sass to css
 * add browser optimizations
 * sum up css files to main.css
 * create source maps
 * */

const kss = require('kss');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const serverTask = require('./server');
let Config = require('../config');

module.exports = function styleguide() {
	gulp.src(Config.paths.privateDir + 'docs/styleguide.scss')
		.pipe(sass())
		.pipe(postcss([autoprefixer()]))
		.pipe(concat('styleguide.css'))
		.pipe(gulp.dest(Config.paths.privateDir + 'docs/dist'))
		.pipe(serverTask.instance.stream(
			{match: '**/*.css'}
		));

	return kss({
		source: Config.paths.privateDir,
		destination: Config.paths.privateDir + 'docs/dist', // todo: save to public dist folder?
		markup: true,
		title: 'Capitan',
		css: [
			Config.paths.publicRoute + 'css/main.css',
			'styleguide.css'
		],
		js: [
			//Config.paths.publicRoute + 'js/main.js'
		],
		mask: [
			'*.scss|*.hbs'
		],
		navDepth: 99,
		builder: Config.paths.privateDir + 'docs/builder/',
		homepage: 'docs/homepage.md'
	});
};
