/**
 * Date: 2015-09-22
 * @licence MIT License (MIT)
 * @see https://github.com/electerious/basicScroll
 */

const basicScroll = require('basicscroll');

const _ = {
	defaults: {
		componentSelector: '[data-parallax-speed]',
	},
};

const o = _.defaults;

/**
 * initialize the component
 * @export function
 */
export default () => {
	document.querySelectorAll(o.componentSelector).forEach((elem) => {
		const modifier = Number(elem.getAttribute('data-parallax-speed'));

		basicScroll
			.create({
				elem,
				from: 0,
				to: document.body.scrollHeight,
				direct: true,
				props: {
					'--translateY': {
						from: '0',
						to: `${50 * modifier}px`,
					},
				},
			})
			.start();
	});
};
