const util = require('gulp-util');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const Config = require('../gulp/config');

const production = Boolean(util.env.production);
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
	entry: {
		main: [
			Config.paths.privateDir + 'js/global.js',
		],
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name][hash].bundle.js',
	},
	externals: [
		{
			window: 'window', // needed for scripts that require the window object - tell webpack that the window object will be present inside the users environment - https://webpack.js.org/configuration/externals/
		},
	],
	module: {
		// noParse: /(js\/libs\/vendor).+?(.js)$/, // tells webpack to not parse these files - regex for vendor files
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)|((js\/libs\/vendor).+?(.js)$)/,
				use: {
					// options are defined inside .babelrc
					loader: 'babel-loader?cacheDirectory',
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							minimize: production,
							sourceMap: false,
						},
					},
					{
						loader: 'css-loader',
						options: {
							minimize: production,
							sourceMap: false,
						},
					},
					{
						loader: 'sass-loader', // TODO: split betwenn dev and production - generate separate CSS files when importing SASS? --> https://github.com/webpack-contrib/sass-loader#in-production
					},
				],
			},
			{
				test: /\.scss/,
				use: [
					{
						loader: 'style-loader',
						options: {
							minimize: production,
							sourceMap: false,
						},
					},
					{
						loader: 'css-loader',
						options: {
							minimize: production,
							sourceMap: false,
						},
					},
					{
						loader: 'sass-loader', // TODO: split betwenn dev and production - generate separate CSS files when importing SASS? --> https://github.com/webpack-contrib/sass-loader#in-production
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
			},
		],
	},
	plugins: [
		// https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack
		// https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
		new WorkboxPlugin.GenerateSW({
			swDest: Config.paths.publicDir + 'sw.js',
			// Exclude images from the precache
			exclude: [/\.(?:png|jpg|jpeg|svg)$/, /main.js/],

			// Define runtime caching rules.
			runtimeCaching: [{
				urlPattern: '/',
				// Apply a cache-first strategy.
				handler: 'networkFirst',
				options: {
					// Use a custom cache name.
					cacheName: 'html',
				},
			},
			{
				urlPattern: /main.js/,
				// Apply a cache-first strategy.
				handler: 'networkFirst',
				options: {
					// Use a custom cache name.
					cacheName: 'javascript',
				},
			},
			{
				// Match any request ends with .png, .jpg, .jpeg or .svg.
				urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

				// Apply a cache-first strategy.
				handler: 'cacheFirst',

				options: {
					// Use a custom cache name.
					cacheName: 'images',

					// Only cache 10 images.
					expiration: {
						maxEntries: 10,
					},
				},
			}],
		}),
	],
});
