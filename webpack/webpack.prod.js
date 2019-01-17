const fs = require('fs');
const deepmerge = require('deepmerge');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const Config = require('../config/config');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: false,
			cache: true,
			uglifyOptions: {
				compress: {
					drop_console: true,
				},
			},
		}),
		new CleanWebpackPlugin([Config.paths.publicDir], {
			root: process.cwd(),
		}),
		new FaviconsWebpackPlugin({
			logo: `${Config.paths.privateDir}assets/img/logo.svg`,
			prefix: '/',
		}),
		new ManifestPlugin({
			fileName: 'manifest-webpack.json',
			writeToFileEmit: true,
			seed: {
				start_url: '/',
				theme_color: '#fff',
				name: 'Jan Feldmann / Frontend Developer',
				short_name: 'Jan Feldmann',
			},
		}),
		{
			apply: (compiler) => {
				compiler.hooks.afterEmit.tap('FaviconsWebpackPlugin', () => {
					const faviconManifestFile = fs.readFileSync(`${Config.paths.publicDir}manifest.json`);
					const webpackManifestFile = fs.readFileSync(`${Config.paths.publicDir}manifest-webpack.json`);

					const mergedJSON = deepmerge(
						JSON.parse(faviconManifestFile),
						JSON.parse(webpackManifestFile),
					);

					fs.writeFile(
						`${Config.paths.publicDir}manifest.json`,
						JSON.stringify(mergedJSON),
						(err) => {
							if (err) {
								console.log(err);
							} else {
								console.log('JSON saved');
							}
						},
					);
				});
			},
		},
	],
});
