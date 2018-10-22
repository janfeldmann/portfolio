/**
 * Description: clean
 *
 * */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const Config = require('../config');

module.exports = {
	minifyImages: function () {
		return gulp.src(Config.paths.publicDir + 'assets/img/**/*')
			.pipe(imagemin())
			.pipe(gulp.dest(Config.paths.publicDir + 'assets/img'));
	},
};
