import React from 'react';

/**
 * @function onChangeHandler
 * @param {HTMLElement} element whose change listener is called
 * @param {string} value supplied, thus stored in .target.value. Default to 'test'
 * @returns {void}
 */
export function onChangeHandler(element, value = 'test') {
	element.simulate('change', {
		target: {
			value,
		},
	});
}

/**
 * Since apparently Enzyme's .simulate does not add a preventDefault prop,
 * I overwrote it with an empty function so the test can continue.
 * It should be noted, how preventDefault works only in the browser, not in the test.
 *	@function onSubmitDefaultPrevented
 * @param {HTMLElement} element whose submit listener is called
 * @returns {void}
 */
export function onSubmitDefaultPrevented(element) {
	element.simulate('submit', { preventDefault: () => {} });
}
