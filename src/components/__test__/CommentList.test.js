import Root from 'Root';
import * as enzyme from 'enzyme';
import { getRandomIntInclusive } from 'utils/math';
import { generateItems } from 'utils/generate';

import CommentList from 'components/CommentList';

function setupWrapper(initialState = {}) {
	return enzyme.mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
}

function createInitialState(commentsArr) {
	return {
		comments: commentsArr,
	};
}

describe('renders without errors', () => {
	let wrapper;

	test('should render 1 ul if no comments supplied', () => {
		wrapper = setupWrapper();
		let ul = wrapper.find('ul');
		expect(ul.length).toEqual(1);
	});

	test('should render 1 li if 1 comment supplied', () => {
		wrapper = setupWrapper(createInitialState(['comment 1']));
		let li = wrapper.find('li');
		expect(li.length).toBe(1);
	});

	test('should render the same number of li and comments supplied', () => {
		let randomQuantity = getRandomIntInclusive(1, 5);
		let randomComments = generateItems(randomQuantity, 'comment');
		wrapper = setupWrapper(createInitialState(randomComments));
		let li = wrapper.find('li');
		expect(li.length).toBe(randomQuantity);
	});
});

describe('li behaviour', () => {
	let wrapper;
	const comment1 = 'comment 1';
	const comment2 = 'comment 2';

	test('should make visible the text contained in li', () => {
		wrapper = setupWrapper(createInitialState([comment1, comment2]));
		let text = wrapper.render().text();
		expect(text).toContain(comment1);
		expect(text).toContain(comment2);
	});
});
