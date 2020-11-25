import commentsReducer from 'reducers/comments';
import { buildAction } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

test('should handle action of type SAVE_COMMENT', () => {
	const testStr = 'test';
	const action = buildAction(SAVE_COMMENT, testStr);
	const newState = commentsReducer([], action);
	expect(newState).toEqual([testStr]);
});
