/**
 * Description: clean
 *
 * */
const del = require('del');
let Config = require('../config');

module.exports = {
	publicFiles: function (done) {
		console.log("Clean Public Files");

		del(
			[
				Config.paths.scripts.dest,
				Config.paths.styles.dest + 'main.css',
				Config.paths.templates.clean
			],
			{
				// has to be forced if outside of current cwd
				force: true
			}
		);
		done();
	},
	zipFiles: function (done) {
		console.log("Clean Zip Files");

		del(
			Config.paths.publicDir + 'zip/',
			{ force: true }
		);
		done();
	}
};
