/**
 * Description: serve
 *
 * */

const browserSync = require('browser-sync').create();
const Config = require('../config');

const serverSettings = {
	server: {
		baseDir: Config.paths.publicDir,
		routes: Config.paths.routes,
	},
	notify: false,
	startPath: 'index.html',
	open: 'external',
};

module.exports = {
	instance: browserSync,
	settings: serverSettings,
	serve: function serve(done) {
		browserSync.init(serverSettings);
		done();
	},
	reload: function reload(done) {
		browserSync.reload();
		done();
	},
};
