/**
 * hbs-helpers.js
 */

const Handlebars = require('handlebars');

module.exports = function (options) {
	const name = Handlebars.escapeExpression(options.hash.imgName);
	const className = Handlebars.escapeExpression(options.hash.imgClass);
	const alt = Handlebars.escapeExpression(options.hash.altTag);
	const extension = Handlebars.escapeExpression(options.hash.extension) || 'jpg';

	return new Handlebars.SafeString(`<picture class="${className}">
		<source media="(min-width: 1200px)" srcset="./assets/img/${name}_1920.webp" type="image/webp">
		<source media="(min-width: 1200px)" srcset="./assets/img/${name}_1920.${extension}">
		<source media="(min-width: 768px)" srcset="./assets/img/${name}_1200.webp" type="image/webp">
		<source media="(min-width: 768px)" srcset="./assets/img/${name}_1200.${extension}">
		<source media="(min-width: 480px)" srcset="./assets/img/${name}_768.webp" type="image/webp">
		<source media="(min-width: 480px)" srcset="./assets/img/${name}_768.${extension}">
		<source srcset="./assets/img/${name}_480.webp" type="image/webp">
		<source srcset="./assets/img/${name}_480.${extension}">
		<img src="./assets/img/${name}_1920.${extension}" alt="${alt}">
	</picture>`);
};
