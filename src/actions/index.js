import { SAVE_COMMENT, REMOVE_COMMENT, FETCH_COMMENTS } from './types';
import axios from 'axios';
import { jsonPlaceholder } from 'utils/urls';

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

export function removeComment(index) {
	return buildAction(REMOVE_COMMENT, index);
}

export function fetchComments() {
	const url = jsonPlaceholder.comments();
	const response = axios.get(url);

	return buildAction(FETCH_COMMENTS, response);
}
