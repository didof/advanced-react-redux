import { SING_IN, SIGN_OUT } from 'actions/types';

const initialState = false;

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case SING_IN:
			return true;
		case SIGN_OUT:
			return false;
		default:
			return state;
	}
}
