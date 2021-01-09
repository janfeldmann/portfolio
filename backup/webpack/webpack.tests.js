const Config = require('../config/config');
const hostname = 'localhost';
const port = 3002;

module.exports = {
	mode: 'development',
	entry: Config.paths.privateDir +'tests/index.js',
	output: {
		filename: 'test.build.js',
		path: Config.paths.privateDir + 'tests/',
		publicPath: 'http://' + hostname + ':' + port + '/src/tests'
	},
	module: {
		rules: [
			{
				test: /index\.js$/,
				use: 'mocha-loader',
				exclude: /node_modules/,
			}
		]
	},
	devServer: {
		host: hostname,
		port: port
	}
};