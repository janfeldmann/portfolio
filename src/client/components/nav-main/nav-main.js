/**
 * Date: 2015-09-22
 * @licence MIT License (MIT)
 *
 */

const _ = {
	defaults: {
		componentSelector: '.nav-main',
		toggleButton: '.nav-main__toggle',
	},
};

const o = _.defaults;
const component = document.querySelector(o.componentSelector);

function observeEvents() {
	document.querySelector(o.toggleButton).addEventListener('click', () => {
		component.classList.toggle('is-active');
	});

	if (window.scrollY > 10) {
		if (!component.classList.contains('is-scrolled')) {
			component.classList.add('is-scrolled');
		}
	}

	window.addEventListener(
		'scroll',
		() => {
			if (window.scrollY > 10) {
				if (!component.classList.contains('is-scrolled')) {
					component.classList.add('is-scrolled');
				}
			} else if (component.classList.contains('is-scrolled')) {
				component.classList.remove('is-scrolled');
			}
		},
		true,
	);
}

/**
 * initialize the component
 * @export function
 */
export function init() {
	observeEvents();
}
