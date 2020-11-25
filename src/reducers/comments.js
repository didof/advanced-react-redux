import { SAVE_COMMENT } from 'actions/types';

const initialState = [];

export default function commentsReducer(state = initialState, action) {
	switch (action.type) {
		case SAVE_COMMENT:
			console.log(action.payload);
			return [...state, action.payload];
		default:
			return state;
	}
}
