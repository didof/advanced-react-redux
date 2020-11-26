import { combineReducers } from 'redux';
import comments from './comments';
import auth from './auth';

const rootReducer = combineReducers({
	comments,
	auth,
});

export default rootReducer;
