import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

import findBy from 'utils/test/findBy';
import { commentBox } from 'utils/test/DOMreferences';
import { generateItems } from 'utils/generate';

const mockedResponse = {
	status: 200,
	response: generateItems(10, 'comment'),
};

beforeEach(() => {
	moxios.install();
});

afterEach(() => {
	moxios.uninstall();
});

describe('commentBox', () => {
	test('should fetch a list of comments from API and display them', (done) => {
		// Attemp to render the entire app
		const wrapper = mount(
			<Root>
				<App />
			</Root>
		);

		// Find the fetchComments button and click it
		const button = findBy.attribute.test(
			wrapper,
			commentBox.button.fetchComments
		);
		button.simulate('click');

		// Expect to retrieve 10 elements
		moxios.wait(() => {
			let request = moxios.requests.mostRecent();
			request.respondWith(mockedResponse).then(() => {
				wrapper.update();
				expect(wrapper.find('ul').children().length).toEqual(10);
				wrapper.unmount();
				done(); // note the calling of done as last thing
			});
		});
	});
});