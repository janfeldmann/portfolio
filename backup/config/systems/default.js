const path = require('path');
// set the public dir
const publicDir = path.join(process.cwd(), './', 'dist/');
// set public route inside project for local development
const publicRoute = '/dist/';
// set live url of server environment
const liveUrl = './';

exports.paths = {
	publicDir: publicDir,
	liveUrl: liveUrl,
	publicRoute: publicRoute,
};
