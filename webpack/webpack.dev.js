const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const Config = require('../config/config');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map', // source maps provide the initial JS file before compiled by webpack - e.g. for debugging - see: https://webpack.js.org/configuration/devtool/
	devServer: {
		contentBase: Config.paths.publicDir,
		port: 3000,
		open: true,
		proxy: {
			"/api": "http://localhost:8080"
		}
	},
});
