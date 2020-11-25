import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('action: saveComment', () => {
	const testStr = 'test';
	const action = saveComment(SAVE_COMMENT, testStr);
	console.log(action);
	// test('should have the correct type', () => {
	// 	expect(action.type).toEqual(SAVE_COMMENT);
	// });
	// test('should have the correct payload', () => {
	// 	expect(action.payload).toEqual(testStr);
	// });
	test('si', () => {});
});
