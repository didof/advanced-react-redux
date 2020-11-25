import Root from 'Root';
import * as enzyme from 'enzyme';
// import * as utils from 'tests/utils';

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

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min - 1) + min);
}

function generateRandomComments(quantity) {
	if (!quantity) quantity = getRandomIntInclusive(1, 5);
	let output = [];
	for (let i = 0; i < quantity; i++) {
		output.push(`comment ${i + 1}`);
	}
	return output;
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
		let randomComments = generateRandomComments(randomQuantity);
		wrapper = setupWrapper(createInitialState(randomComments));
		let li = wrapper.find('li');
		expect(li.length).toBe(randomQuantity);
	});
});
