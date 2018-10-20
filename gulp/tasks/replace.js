/**
 * Description: clean
 *
 * */
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const replace = require('gulp-replace');
let Config = require('../config');

module.exports = {
	publicDirTemplates: function () {
		return gulp.src([
			Config.paths.publicDir + '**/*.html',
			Config.paths.publicDir + 'js/**/*.js',
			Config.paths.publicDir + 'css/**/*.css'
			], {base: Config.paths.publicDir})
			.pipe(replace(Config.paths.publicRoute, './'))
			.pipe(gulpif(Config.paths.liveUrl !== '', replace(Config.paths.liveUrl, './')))
			.pipe(gulp.dest(Config.paths.publicDir));
	}
};
