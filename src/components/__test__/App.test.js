import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import DOMref from 'utils/test/DOMreferences';
import findBy from 'utils/test/findBy';

import Root from 'Root';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

function mountWithAuthAndPath(auth = false, path = '/') {
	return mount(
		<Root initialState={createInitialState(auth)}>
			<MemoryRouter initialEntries={[path]}>
				<App />
			</MemoryRouter>
		</Root>
	);
}

function createInitialState(commentsArr) {
	return {
		auth: commentsArr,
	};
}

describe('renders', () => {
	let wrapper;

	afterEach(() => {
		wrapper.unmount();
	});

	describe('should render 1 [wrapper_app] element', () => {
		function check() {
			let element = findBy.attribute.test(wrapper, DOMref.app.wrapper);
			expect(element.length).toEqual(1);
		}

		test("if auth is *false* && path is *'/'*", () => {
			wrapper = mountWithAuthAndPath(false, '/');
			check();
		});
		test("if auth is *false* && path is *'/post'*", () => {
			wrapper = mountWithAuthAndPath(false, '/post');
			check();
		});
		test("if auth is *true*  && path is *'/'*", () => {
			wrapper = mountWithAuthAndPath(true, '/');
			check();
		});
		test("if auth is *true*  && path is *'/post'*", () => {
			wrapper = mountWithAuthAndPath(true, '/post');
			check();
		});
	});

	describe('should render 1 CommentBox component', () => {
		function check(quantity) {
			let component = wrapper.find(CommentBox);
			expect(component.length).toBe(quantity);
		}

		test("if auth is *false* && path is *'/'*", () => {
			wrapper = mountWithAuthAndPath(false, '/');
			check(0);
		});
		test("if auth is *false* && path is *'/post'*", () => {
			wrapper = mountWithAuthAndPath(false, '/post');
			check(0);
		});
		test("if auth is *true*  && path is *'/'*", () => {
			wrapper = mountWithAuthAndPath(true, '/');
			check(0);
		});
		test("if auth is *true*  && path is *'/post'*", () => {
			wrapper = mountWithAuthAndPath(true, '/post');
			check(1);
		});
	});

	describe('should render 1 CommentList component', () => {
		function check(quantity) {
			let component = wrapper.find(CommentList);
			expect(component.length).toBe(quantity);
		}

		test("if auth is *false* && path is *'/'*", () => {
			wrapper = mountWithAuthAndPath(false, '/');
			check(1);
		});
		test("if auth is *false* && path is *'/post'*", () => {
			wrapper = mountWithAuthAndPath(false, '/post');
			check(0);
		});
		test("if auth is *true*  && path is *'/'*", () => {
			wrapper = mountWithAuthAndPath(true, '/');
			check(1);
		});
		test("if auth is *true*  && path is *'/post'*", () => {
			wrapper = mountWithAuthAndPath(true, '/post');
			check(0);
		});
	});
});
