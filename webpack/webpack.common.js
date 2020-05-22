const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Config = require('../config/config');
// TODO: Remove when all is migrated to styled components
const entry = [`${Config.paths.privateDir}index.js`, `${Config.paths.styles.src}`];

if (process.env.NODE_ENV === 'development') {
	entry.unshift('webpack/hot/dev-server');
}

module.exports = {
	context: path.join(__dirname, '../'),
	entry,
	output: {
		path: Config.paths.publicDir,
		filename: '[name].js',
		chunkFilename: '[name][hash].bundle.js'
	},
	module: {
		// noParse: /(js\/libs\/vendor).+?(.js)$/, // tells webpack to not parse these files - regex for vendor files
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)$/,
				use: {
					// options are defined inside .babelrc
					loader: 'babel-loader?cacheDirectory'
				}
			},
			{
				test: /\.(png|svg|jpg|gif|webp|webm|woff|woff2|eot|ttf)$/,
				use: ['file-loader']
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							minimize: process.env.NODE_ENV === 'production',
							sourceMap: false
						}
					},
					{
						loader: 'css-loader',
						options: {
							minimize: process.env.NODE_ENV === 'production',
							sourceMap: false
						}
					},
					{
						loader: 'resolve-url-loader'
					},
					{
						loader: 'sass-loader' // TODO: split betwenn dev and production - generate separate CSS files when importing SASS? --> https://github.com/webpack-contrib/sass-loader#in-production
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					// Note:- No wildcard is specified hence will copy all files and folders
					from: `${Config.paths.privateDir}assets/`,
					to: `${Config.paths.publicDir}assets/`
					// ignore: ['img/source/**/*']
				}
			]
		}),
		new HtmlWebpackPlugin({
			template: `${Config.paths.privateDir}index.html`,
			alwaysWriteToDisk: true,
			inlineSource: '.(css)$',
			filename: './index.html'
		}),
		// https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack
		// https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
		new WorkboxPlugin.GenerateSW({
			swDest: `${Config.paths.publicDir}sw.js`,
			// Exclude images from the precache
			exclude: [/\.(?:png|jpg|jpeg|svg)$/, /index.js/],

			// Define runtime caching rules.
			runtimeCaching: [
				{
					urlPattern: '/',
					// Apply a cache-first strategy.
					handler: 'networkFirst',
					options: {
						// Use a custom cache name.
						cacheName: 'html'
					}
				},
				{
					urlPattern: /index.js/,
					// Apply a cache-first strategy.
					handler: 'networkFirst',
					options: {
						// Use a custom cache name.
						cacheName: 'javascript'
					}
				},
				{
					// Match any request ends with .png, .jpg, .jpeg or .svg.
					urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,

					// Apply a cache-first strategy.
					handler: 'cacheFirst',

					options: {
						// Use a custom cache name.
						cacheName: 'images',

						// Only cache 10 images.
						expiration: {
							maxEntries: 10
						}
					}
				}
			]
		})
	]
};
