/**
 * @function onChangeHandler
 * @param {HTMLElement} element The element whose change listener is called
 * @param {string} value The string supplied, then stored in .target.value
 * @returns {void}
 */
export function onChangeHandler(element, value = 'test') {
	element.simulate('change', {
		target: {
			value,
		},
	});
}
