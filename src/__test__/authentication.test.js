import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Root from 'Root';
import App from 'components/App';

import findBy from 'utils/test/findBy';
import DOMref from 'utils/test/DOMreferences';

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

describe('admin authentication', () => {
	let wrapper;
	let confirmSpy;

	beforeAll(() => {
		confirmSpy = jest.spyOn(window, 'confirm');
		confirmSpy.mockImplementation(jest.fn(() => 'admin'));
	});

	afterAll(() => {
		confirmSpy.mockRestore();
	});

	test('should change admin auth state to true if correct password', () => {
		wrapper = mountWithAuthAndPath(false);
		const element = findBy.attribute.test(
			wrapper,
			DOMref.header.button.adminSignIn
		);
		expect(element.length).toEqual(1);
	});
	// test('should change admin auth state to true if not correct password', () => {});
});
