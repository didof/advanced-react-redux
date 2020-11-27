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

	afterAll(() => {
		confirmSpy.mockRestore();
	});

	test('should change admin auth state to true if correct password', () => {
		wrapper = mountWithAuthAndPath(false);
		let element = findBy.attribute.test(
			wrapper,
			DOMref.header.button.adminSignIn
		);
		expect(element.length).toEqual(1);

		element.simulate('click');
		wrapper.update();

		let props = wrapper.find(App);
		console.log(props);
	});
	// test('should change admin auth state to true if not correct password', () => {});
});
