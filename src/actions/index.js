import { SAVE_COMMENT } from './types';

export function buildAction(type, payload) {
	return {
		type,
		payload,
	};
}

export function saveComment(comment) {
	return buildAction(SAVE_COMMENT, comment);
}
