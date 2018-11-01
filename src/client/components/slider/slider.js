/**
 * Date: 2015-09-22
 * @licence MIT License (MIT)
 * @see https://github.com/electerious/basicScroll
 */

import Glide from '@glidejs/glide';

const _ = {
	defaults: {
		componentSelector: '.slider',
		pluginOptions: {
			type: 'carousel',
			perView: 3,
			classes: {
				direction: {
					ltr: 'slider--ltr',
					rtl: 'slider--rtl'
				},
				slider: 'slider--slider',
				carousel: 'slider--carousel',
				swipeable: 'slider--swipeable',
				dragging: 'slider--dragging',
				cloneSlide: 'slider__slide--clone',
				activeNav: 'slider__bullet--active',
				activeSlide: 'slider__slide--active',
				disabledArrow: 'slider__arrow--disabled'
			}
		}
	}
};

const o = _.defaults;

/**
 * initialize the component
 * @export function
 */
export function init() {
	new Glide(o.componentSelector, o.pluginOptions).mount();
}
