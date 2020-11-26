import React from 'react';
import { mount } from 'enzyme';
import { getRandomIntInclusive } from 'utils/math';
import { generateItems } from 'utils/generate';
import findBy from 'utils/test/findBy';
import DOMref from 'utils/test/DOMreferences';

import Root from 'Root';
import CommentList from 'components/CommentList';

function setupWrapper(initialState = {}) {
	return mount(
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

	test('should render [wrapper_comment-list] element', () => {
		wrapper = setupWrapper();
		let element = findBy.attribute.test(wrapper, DOMref.commentList.wrapper);
		expect(element.length).toEqual(1);
	});

	test('should render [header_comment-list] element', () => {
		wrapper = setupWrapper();
		let element = findBy.attribute.test(wrapper, DOMref.commentList.header);
		expect(element.length).toEqual(1);
	});

	test('should render [list_comment-list] element if no comments supplied', () => {
		wrapper = setupWrapper();
		let element = findBy.attribute.test(wrapper, DOMref.commentList.list);
		expect(element.length).toEqual(1);
	});

	test('should render [listItem_comment-list] element if 1 comment supplied', () => {
		wrapper = setupWrapper(createInitialState(['comment 1']));
		let element = findBy.attribute.test(wrapper, DOMref.commentList.listItem);
		expect(element.length).toBe(1);
	});

	test('should render the same number of [listItem_comment-list] element and comments supplied', () => {
		let randomQuantity = getRandomIntInclusive(1, 5);
		let randomComments = generateItems(randomQuantity, 'comment');
		wrapper = setupWrapper(createInitialState(randomComments));
		let element = findBy.attribute.test(wrapper, DOMref.commentList.listItem);
		expect(element.length).toBe(randomQuantity);
	});
});

describe('li behaviour', () => {
	let wrapper;
	const comment1 = 'comment 1';
	const comment2 = 'comment 2';

	test('should make visible the text contained in [listItem_comment-list] element', () => {
		wrapper = setupWrapper(createInitialState([comment1, comment2]));
		let text = wrapper.render().text();
		expect(text).toContain(comment1);
		expect(text).toContain(comment2);
	});

	test('should remove the [listItem_comment-list] element when clicked on', () => {
		wrapper = setupWrapper(createInitialState([comment1, comment2]));
		let elements = findBy.attribute.test(wrapper, DOMref.commentList.listItem);
		expect(elements.length).toEqual(2);
		let firstElement = elements.first();
		firstElement.simulate('click');
		wrapper.update();
		let updatedElements = findBy.attribute.test(
			wrapper,
			DOMref.commentList.listItem
		);
		expect(updatedElements.length).toEqual(1);
	});
});
