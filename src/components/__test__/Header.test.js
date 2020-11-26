import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import findBy from 'utils/test/findBy';
import DOMref from 'utils/test/DOMreferences';

import Root from 'Root';
import Header from 'components/Header';

function mountWithAuthAndPath(auth, path) {
	return mount(
		<Root initialState={createInitialState(auth)}>
			<MemoryRouter initialEntries={[path]}>
				<Header />
			</MemoryRouter>
		</Root>
	);
}

function createInitialState(authState) {
	return {
		auth: authState,
	};
}

describe('renders', () => {
	describe('should render 1 [wrapper_header] element', () => {
		let wrapper;
		afterEach(() => {
			wrapper.unmount();
		});

		function check(quantity = 1) {
			let element = findBy.attribute.test(wrapper, DOMref.header.wrapper);
			expect(element.length).toEqual(quantity);
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

	describe('should render the correct admin authentication button', () => {
		let wrapper;
		afterEach(() => {
			wrapper.unmount();
		});

		test('if auth state is *true* should render [adminSignOut_header] element', () => {
			wrapper = mountWithAuthAndPath(true, '/');
			let element = findBy.attribute.test(
				wrapper,
				DOMref.header.button.adminSignOut
			);
			expect(element.length).toEqual(1);
		});
		test('if auth state is *false* should render [adminSignIn_header] element', () => {
			wrapper = mountWithAuthAndPath(false, '/');
			let element = findBy.attribute.test(
				wrapper,
				DOMref.header.button.adminSignIn
			);
			expect(element.length).toEqual(1);
		});
	});

	describe('supponing that [wrapper_header] element is rendered', () => {
		let wrapper;
		beforeEach(() => {
			wrapper = mountWithAuthAndPath(false, '/');
		});

		test('should render 1 [list_header] element', () => {
			let element = findBy.attribute.test(wrapper, DOMref.header.list);
			expect(element.length).toEqual(1);
		});

		test('should render 3 children [list_header] elements, where the latter element is [adminAuthentication_header]', () => {
			let element = findBy.attribute.test(wrapper, DOMref.header.list);
			expect(element.children().length).toEqual(3);
			let latter = element.last();
			expect(latter.length).toEqual(1);
		});
	});
});
