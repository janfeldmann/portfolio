const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Config = require('../config/config');

module.exports = {
	context: path.join(__dirname, '../'),
	entry: {
		main: [`${Config.paths.privateDir}js/global.js`, `${Config.paths.privateDir}sass/main.scss`],
	},
	output: {
		path: Config.paths.publicDir,
		filename: '[name].js',
		chunkFilename: '[name][hash].bundle.js',
	},
	module: {
		// noParse: /(js\/libs\/vendor).+?(.js)$/, // tells webpack to not parse these files - regex for vendor files
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)$/,
				use: {
					// options are defined inside .babelrc
					loader: 'babel-loader?cacheDirectory',
				},
			},
			{
				test: /\.(png|svg|jpg|gif|webp|webm|woff|woff2|eot|ttf)$/,
				use: ['file-loader'],
			},
			{
				test: /main.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader', // translates CSS into CommonJS
							options: {
								minimize: true,
								sourceMap: false,
							},
						},
						{
							loader: 'sass-loader', // compiles Sass to CSS
							options: {
								sourceMap: false,
							},
						},
					],
					fallback: 'style-loader',
				}),
			},
			{
				test: /(components)\.(css|scss)$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							minimize: process.env.NODE_ENV === 'production',
							sourceMap: false,
						},
					},
					{
						loader: 'css-loader',
						options: {
							minimize: process.env.NODE_ENV === 'production',
							sourceMap: false,
						},
					},
					{
						loader: 'resolve-url-loader',
					},
					{
						loader: 'sass-loader', // TODO: split betwenn dev and production - generate separate CSS files when importing SASS? --> https://github.com/webpack-contrib/sass-loader#in-production
					},
				],
			},
			{
				test: /\.hbs$/,
				use: [
					{
						loader: 'handlebars-loader',
						options: {
							partialDirs: [Config.paths.privateDir, Config.paths.templates.src],
							inlineRequires: '/assets/', // inline all files that have "assets" inside their path
						},
					},
				],
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].[hash].css',
			allChunks: true,
		}),
		new HtmlWebpackPlugin({
			template: `${Config.paths.templates.src}index.hbs`,
			alwaysWriteToDisk: true,
			inlineSource: '.(css)$',
		}),
		new HtmlWebpackHarddiskPlugin(),
		new HtmlWebpackInlineSourcePlugin(),
		// https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack
		// https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
		new WorkboxPlugin.GenerateSW({
			swDest: `${Config.paths.publicDir}sw.js`,
			// Exclude images from the precache
			exclude: [/\.(?:png|jpg|jpeg|svg)$/, /main.js/],

			// Define runtime caching rules.

			runtimeCaching: [
				/* {
				urlPattern: '/',
				// Apply a cache-first strategy.
				handler: 'networkFirst',
				options: {
					// Use a custom cache name.
					cacheName: 'html',
				},
			}, */
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
				},
			],
		}),
	],
};
