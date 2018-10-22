/**
 * Capitan
 *
 * Copyright brandung GmbH & Co.KG
 * https://www.brandung.de/
 *
 * Date: 19.08.2015
 * MIT License (MIT)
 *
 * Gets and returns the current breakpoint based on the window width
 *
 * @return {string} - One of the breakpoints: xs, sm, md, lg, xl
 */

import {GLOBALS} from '../global';

export default function getBreakpoint() {
	let windowWidth = window.innerWidth,
		breakpoints = Object.keys(GLOBALS.breakpoints),
		breakpoint = '';

	for (let i = breakpoints.length - 1; i >= 0; i -= 1) {
		breakpoint = GLOBALS.breakpoints[breakpoints[i]];

		if (windowWidth >= breakpoint) {
			return breakpoints[i];
		} else if (i === 0 && windowWidth < breakpoint) {
			return breakpoints[i];
		}
	}
}
