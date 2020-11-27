import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import DOMref from 'utils/test/DOMreferences';
import findBy from 'utils/test/findBy';
import handlers from 'utils/test/handlers';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

function mountWithAuthAndPath(auth, path) {
	return mount(
		<Root initialState={createInitialState(auth)}>
			<MemoryRouter initialEntries={[path]}>
				<CommentBox />
			</MemoryRouter>
		</Root>
	);
}

function createInitialState(authState) {
	return {
		auth: authState,
	};
}

describe('renders without errors', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mountWithAuthAndPath(true, '/post');
	});

	afterEach(() => {
		wrapper.unmount();
	});

	test('should render 1 [wrapper_comment-box] element', () => {
		let element = findBy.attribute.test(wrapper, DOMref.commentBox.wrapper);
		expect(element.length).toEqual(1);
	});

	test('should render 1 [form_comment-box] element', () => {
		let element = findBy.attribute.test(wrapper, DOMref.commentBox.form);
		expect(element.length).toEqual(1);
	});

	test('should render 1 [header_comment-box] element', () => {
		let element = findBy.attribute.test(wrapper, DOMref.commentBox.header);
		expect(element.length).toEqual(1);
	});

	test('should render 1 [textarea_comment-box] element', () => {
		let element = findBy.attribute.test(wrapper, DOMref.commentBox.textarea);
		expect(element.length).toEqual(1);
	});

	test('should render [fetch_comment-box] && [submit_comment-box] elements', () => {
		let element1 = findBy.attribute.test(
			wrapper,
			DOMref.commentBox.button.fetchComments
		);
		let element2 = findBy.attribute.test(
			wrapper,
			DOMref.commentBox.button.submit
		);

		expect(element1.length).toEqual(1);
		expect(element2.length).toEqual(1);
	});
});

describe('[textarea_comment-box] behaviour', () => {
	let wrapper;
	const testStr = 'test';
	beforeEach(() => {
		wrapper = wrapper = mountWithAuthAndPath(true, '/post');
		let element = findBy.attribute.test(wrapper, DOMref.commentBox.textarea);
		handlers.onChange(element, testStr);
		wrapper.update();
	});

	test('should trigger onChange listener when typed in', () => {
		let element = findBy.attribute.test(wrapper, DOMref.commentBox.textarea);
		expect(element.prop('value')).toEqual(testStr);
	});

	test('should get empty after the form is submitted', () => {
		handlers.onSubmitDefaultPrevented(wrapper.find('form'));
		wrapper.update();
		let element = findBy.attribute.test(wrapper, DOMref.commentBox.textarea);
		expect(element.prop('value')).toEqual('');
	});
});
