/**
 * Capitan
 *
 * Copyright brandung GmbH & Co.KG
 * https://www.brandung.de/
 *
 * Date: 19.08.2015
 * MIT License (MIT)
 *
 * Adds a given class to the html element, when the event 'on-set-class' occurs,
 * e.g. when the breakpoint has changed (see handle/resize-handler.js for more information)
 */

export default function setEventClass() {
	'use strict';

	const _ = {};

	_.handler = function(event, className) {
		Capitan.Vars.$html.addClass(className);
	};

	Capitan.Vars.$doc.on('on-set-class', _.handler);
};
