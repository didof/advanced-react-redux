import { SAVE_COMMENT } from './types';

function _buildAction(type, payload) {
	return {
		type,
		payload,
	};
}

export function saveComment(comment) {
	return _buildAction(SAVE_COMMENT, comment);
}
