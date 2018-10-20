/**
 * Date: 2015-09-22
 * @licence MIT License (MIT)
 * @see https://github.com/electerious/basicScroll
 */

const basicScroll = require('basicScroll');

const _ = {
	defaults: {
		componentSelector: '.stage',
		overlay: '.stage__overlay'
	}
};

const o = _.defaults;

/**
 * initialize the component
 * @export function
 */
export function init() {
	document.querySelectorAll(o.overlay).forEach((elem) => {

		const modifier = elem.getAttribute('data-modifier');

		basicScroll.create({
			elem: elem,
			from: 0,
			to: document.body.scrollHeight,
			direct: true,
			props: {
				'--translateY': {
					from: '0',
					to: `${ 50 * modifier }px`
				}
			}
		}).start()

	})
}
