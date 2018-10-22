/**
 * Description: watch
 *
 * defines a watcher with paths and files to observe
 * */

const gulp = require('gulp');
const scriptsTask = require('./scripts');
const styleTask = require('./styles');
const templateTask = require('./templates');
const serverTask = require('./server');
const copyTask = require('./copy');
const Config = require('../config');

module.exports = watch = () => {
	// template watcher
	gulp.watch(Config.paths.templates.components, gulp.series(templateTask, serverTask.reload));
	gulp.watch(Config.paths.templates.partials, gulp.series(templateTask, serverTask.reload));
	gulp.watch(Config.paths.templates.views, gulp.series(templateTask, serverTask.reload));

	// image watcher
	gulp.watch(Config.paths.images.src, gulp.series(copyTask.img, serverTask.reload));

	// style watcher
	gulp.watch(Config.paths.styles.src, styleTask);
	gulp.watch(Config.paths.styles.partials, styleTask);
	gulp.watch(Config.paths.styles.themeFiles, styleTask);
	gulp.watch(Config.paths.styles.components, styleTask);

	// script watcher
	gulp.watch(Config.paths.scripts.watch, scriptsTask);

	// watch if assets are added
	gulp.watch(Config.paths.privateDir + 'assets/**/*', function(event) {
		console.log(event);
	});
};
