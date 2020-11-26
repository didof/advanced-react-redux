import { getRandomIntInclusive } from './math';

/**
 *	@function generateItems
 * @param {number} quantity The number of items to put in the array
 * @param {string} prefix The prefix that appears before the number of element (index). If not supplied is "item"
 * @returns {Array} Array that contains the {quantity} of items with label
 */
export function generateItems(quantity, prefix = 'item') {
	if (!quantity) quantity = getRandomIntInclusive(1, 10);
	let output = [];
	for (let i = 0; i < quantity; i++) {
		output.push(prefix + ' ' + (i + 1));
	}
	return output;
}
