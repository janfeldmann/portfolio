const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const Config = require('../config/config');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: false,
			cache: true,
			uglifyOptions: {
				compress: {
					drop_console: true
				}
			}
		}),
		new FaviconsWebpackPlugin({
			// Your source logo
			logo: Config.paths.privateDir + 'assets/img/logo.svg',
			prefix: 'app-icons-[hash]/',
		})
	],
});
