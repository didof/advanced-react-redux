import { SAVE_COMMENT } from './types';

/**
 * It has the function of creating an object with two properties, type and payload.
 * @function buildAction
 * @param {string} type Action Type from actions/types
 * @param {any} payload Anything passed as payload
 * @returns {object} Action
 */
export function buildAction(type, payload = null) {
	return {
		type,
		payload,
	};
}

/**
 *	Create the saveComment action
 * @function saveComment
 * @param {string} comment Comment passed as payload
 * @returns {object} saveComment action
 */
export function saveComment(comment) {
	return buildAction(SAVE_COMMENT, comment);
}
