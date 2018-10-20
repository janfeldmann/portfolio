const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: "css-loader", // translates CSS into CommonJS
							options: {
								minimize: true,
								sourceMap: false
							}
						}, {
							loader: "sass-loader", // compiles Sass to CSS
							options: {
								sourceMap: false
							}
						}
					],
					fallback: "style-loader"
				})
			}
		]
	},
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
		new ExtractTextPlugin({
			filename: "[name].[hash].css",
			allChunks: true
		})
	],
});
