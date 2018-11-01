/**
 * Capitan
 *
 * Copyright brandung GmbH & Co.KG
 * https://www.brandung.de/
 *
 * Date: 19.08.2015
 * MIT License (MIT)
 *
 * Main resize handler
 * Sets the currentBreakpoint and currentOrientation variables and sets related classes on the html element;
 * Triggers an event (on document), when the breakpoint has changed
 */
import getBreakpoint from '../function/get-breakpoint';
import getOrientation from '../function/get-orientation';
import { GLOBALS } from '../global';

export default function resizeHandler() {
	const _ = {};

	_.handler = function handler() {
		GLOBALS.currentBreakpoint = getBreakpoint();
		GLOBALS.currentOrientation = getOrientation();

		let breakpoint = `on-breakpoint-${GLOBALS.currentBreakpoint}`;
		let orientation = `on-orientation-${GLOBALS.currentOrientation}`;

		if (!GLOBALS.html.classList.contains(breakpoint)) {
			GLOBALS.html.className = GLOBALS.html.className.replace(
				/\s?on-breakpoint-(xs|sm|md|lg|xl)/g,
				'',
			);

			GLOBALS.doc.dispatchEvent('on-set-class', [breakpoint]);
			GLOBALS.doc.dispatchEvent('on-changed-breakpoint', [
				GLOBALS.currentBreakpoint,
			]);
		}

		if (!GLOBALS.html.classList.contains(orientation)) {
			GLOBALS.html.className = GLOBALS.html.className.replace(
				/\s?on-orientation-(landscape|portrait)/g,
				'',
			);

			GLOBALS.doc.dispatchEvent('on-set-class', [orientation]);
		}
	};

	_.handler();
};
