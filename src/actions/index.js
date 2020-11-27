import * as types from './types';
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
	return buildAction(types.SAVE_COMMENT, comment);
}

export function removeComment(index) {
	console.log('removeComment');
	return function (dispatch, getState) {
		const { auth } = getState();
		if (auth) return dispatch(buildAction(types.REMOVE_COMMENT, index));
		else return dispatch(buildAction(types.REMOVE_COMMENT_NOT_ALLOWED));
	};
}

export function fetchComments() {
	const url = jsonPlaceholder.comments();
	const response = axios.get(url);

	return buildAction(types.FETCH_COMMENTS, response);
}

export function signIn() {
	return buildAction(types.SING_IN);
}

export function signOut() {
	return buildAction(types.SIGN_OUT);
}
