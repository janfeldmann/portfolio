
/**
 * Gulpfile
 *
 * Tasks:
 * npm start = start workflow
 * npm start build = ready for production
 * */
const gulp = require('gulp');

/**
 * load tasks
 */
const scriptsTask = require('./gulp/tasks/scripts');
const styleTask = require('./gulp/tasks/styles');
const templateTask = require('./gulp/tasks/templates');
const watchTask = require('./gulp/tasks/watch');
const cleanTask = require('./gulp/tasks/clean');
const zipTask = require('./gulp/tasks/zip');
const exportTask = require('./gulp/tasks/export');
const serverTask = require('./gulp/tasks/server');
const copyTask = require('./gulp/tasks/copy');
const criticalCSSTask = require('./gulp/tasks/critical');
const replaceTask = require('./gulp/tasks/replace');
const imageMinTask = require('./gulp/tasks/imagemin');

/////////////////////////////////////////////////
// Tasks
/////////////////////////////////////////////////

/**
 * Description: default
 *
 * start workflow
 * */

gulp.task(
	'default',
	gulp.series(
		cleanTask.publicFiles,
		gulp.parallel(
			scriptsTask,
			styleTask,
			templateTask,
			copyTask.img,
			copyTask.fonts,
		),
		serverTask.serve,
		watchTask,
	),
);


/**
 * Description: build
 *
 * compile files ready for deployment
 * */

gulp.task(
	'build',
	gulp.series(
		cleanTask.publicFiles,
		gulp.parallel(
			scriptsTask,
			styleTask,
			templateTask,
			copyTask.img,
			copyTask.fonts,
		),
		imageMinTask.minifyImages,
		replaceTask.publicDirTemplates,
		function (done) {
			// force build task to terminate
			done();
			process.exit(0);
		},
	),
);

/**
 * creates zip
 * work with timeouts to assure that all files are properly created and zipped
 */
gulp.task(
	'zip',
	gulp.series(
		zipTask.copy,
		function (done) {
			// TODO: Use .on('end', done) inside Pipes inside zip task
			setTimeout(done, 1000);
		},
		zipTask.adjust,
		function (done) {
			setTimeout(done, 1000);
		},
		zipTask.create,
		function (done) {
			setTimeout(done, 1000);
		},
		cleanTask.zipFiles,
		function (done) {
			// force zip task to terminate, set a timeout to be sure that clean task finished
			setTimeout(function () {
				done();
				process.exit(0);
			}, 1000);
		}
	)
);


/**
 * prepare for export
 */
gulp.task(
	'export',
	gulp.series(
		exportTask.copy,
		exportTask.adjust,
		function (done) {
			// force build task to terminate
			done();
			process.exit(0);
		}
	)
);

/**
 * analyzes critical css
 */
gulp.task(
	'critical',
	gulp.series(
		criticalCSSTask
	)
);
