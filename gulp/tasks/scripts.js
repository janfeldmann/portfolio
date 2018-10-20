/**
 * Description: scripts
 *
 * sum up all js files to main.js
 * */

const cached = require('gulp-cached');
const serverTask = require('./server');
const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');
const jsdocConfig = require('../jsdoc');
const plumber = require('gulp-plumber');
const util = require('gulp-util');
const production = Boolean(util.env.production);
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
let Config = require('../config');
let webpackConfig = production ? require('../../webpack/webpack.prod.js') : require('../../webpack/webpack.dev.js');

// set webpack config public output path to route path
webpackConfig.output.path = Config.paths.scripts.dest;
webpackConfig.output.publicPath = Config.paths.liveUrl + 'js/';

module.exports = function scripts () {
	return gulp
		.src(Config.paths.scripts.src)
		.pipe(jsdoc(jsdocConfig, () => {
			console.log('JSDOCS generated');
		}))
		.pipe(plumber())
		.pipe(webpackStream(webpackConfig, webpack))
		.on('error', function handleError() {
			this.emit('end'); // Recover from errors
		})
		.pipe(cached('js_compile'))
		.pipe(gulp.dest(Config.paths.scripts.dest))
		.pipe(serverTask.instance.stream(
			{match: '**/*.js'}
		));
};
