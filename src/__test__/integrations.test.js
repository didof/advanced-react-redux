import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

import findBy from 'utils/test/findBy';
import DOMref from 'utils/test/DOMreferences';
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

describe('CommentBox', () => {
	test('should fetch a list of comments from API and display them', (done) => {
		// Attemp to render the entire app
		const wrapper = mount(
			<Root>
				<MemoryRouter initialEntries={['/post']}>
					<App />
				</MemoryRouter>
			</Root>
		);

		// Find the fetchComments button and click it
		const button = findBy.attribute.test(
			wrapper,
			DOMref.commentBox.button.fetchComments
		);
		expect(button.length).toEqual(1);
		button.simulate('click');

		// Expect to retrieve 10 elements
		moxios.wait(() => {
			let request = moxios.requests.mostRecent();
			request.respondWith(mockedResponse).then(() => {
				wrapper.update();
				let element = findBy.attribute.test(wrapper, DOMref.commentList.list);
				expect(element.children().length).toEqual(10);
				wrapper.unmount();
				done(); // note the calling of done as last thing
			});
		});
	});
});

// TODO: try to understand hwo to maxim the timeout timing