/**
 * Description: critical
 *
 * analyzes critical css from URLs
 * @see https://github.com/pocketjoso/penthouse
 * */

const gulp = require('gulp');
const fs = require('fs');
const penthouse = require('penthouse');
let Config = require('../config');

module.exports = function criticalCSS() {
	return penthouse({
		url: 'https://www.c-and-a.com/de/de/shop',
		css: Config.paths.publicDir + 'css/main.css',
		blockJSRequests: false,
		renderWaitTime: 500,
		screenshots: {
			basePath: Config.paths.publicDir + 'tests/critical/', // absolute or relative; excluding file extension
			type: 'jpeg', // jpeg or png, png default
			quality: 20 // only applies for jpeg type
		}
	})
	.then(criticalCss => {
		// use the critical css
		fs.writeFileSync(Config.paths.publicDir + 'css/test.css', criticalCss);
	});
};
