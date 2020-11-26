import * as actionTypes from 'actions/types';

const initialState = [];

export default function commentsReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SAVE_COMMENT:
			return [...state, action.payload];
		case actionTypes.REMOVE_COMMENT:
			const copyState = [...state];
			copyState.splice(action.payload, 1);
			return copyState;
		case actionTypes.FETCH_COMMENTS:
			const { data } = action.payload;
			const comments = data.slice(0, 10).map((el) => el.name);
			return [...state, ...comments];
		default:
			return state;
	}
}
