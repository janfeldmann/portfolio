const webpack = require('webpack');
const util = require('gulp-util');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const production = Boolean(util.env.production);
let Config = require('../gulp/config');
// set folderPath depending on production or develop mode and check if live url is set
const folderPath = (production && Config.paths.liveUrl !== '') ? Config.paths.liveUrl : Config.paths.publicRoute;

module.exports = smp.wrap({
	entry: {
		main: [
			Config.paths.privateDir + 'js/global.js'
		]
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].bundle.js'
	},
	externals: [
		{
			"window": "window" // needed for scripts that require the window object - tell webpack that the window object will be present inside the users environment - https://webpack.js.org/configuration/externals/
		}
	],
	module: {
		// noParse: /(js\/libs\/vendor).+?(.js)$/, // tells webpack to not parse these files - regex for vendor files
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)|((js\/libs\/vendor).+?(.js)$)/,
				use: {
					// options are defined inside .babelrc
					loader: 'babel-loader?cacheDirectory'
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							minimize: production,
							sourceMap: false
						}
					},
					{
						loader: 'css-loader',
						options: {
							minimize: production,
							sourceMap: false
						}
					},
					{
						loader: "sass-loader" // TODO: split betwenn dev and production - generate separate CSS files when importing SASS? --> https://github.com/webpack-contrib/sass-loader#in-production
					}
				]
			},
			{
				test: /\.scss/,
				use: [
					{
						loader: 'style-loader',
						options: {
							minimize: production,
							sourceMap: false
						}
					},
					{
						loader: 'css-loader',
						options: {
							minimize: production,
							sourceMap: false
						}
					},
					{
						loader: "sass-loader" // TODO: split betwenn dev and production - generate separate CSS files when importing SASS? --> https://github.com/webpack-contrib/sass-loader#in-production
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		// https://webpack.js.org/plugins/define-plugin/ - define global constants
		new webpack.DefinePlugin({
			CAPITAN: {
				Vars: {
					folderPath: "'" + folderPath + "'",
					currentBreakpoint: '"xs"',
					currentOrientation: '"portrait"',
					breakpoints: Config.breakpoints
				},
				// CSS components script namespace
				Component: {},
				// functions must return something
				Function: {},
				// everything that has to do with event handling
				Handle: {},
				// Should be used for scripts that have nothing to do with components, e.g. placeholder polyfills, plugins, etc.
				Util: {}
			}
		})
	]
});