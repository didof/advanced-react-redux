import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('renders without errors', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	test('should render 1 Comment Box', () => {
		expect(wrapper.find(CommentBox).length).toEqual(1);
	});

	test('should render 1 Comment List', () => {
		expect(wrapper.find(CommentList).length).toEqual(1);
	});
});
