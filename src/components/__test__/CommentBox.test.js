import React from 'react';
import { mount, shallow } from 'enzyme';

import CommentBox from 'components/CommentBox';

import { onChangeHandler, onSubmitDefaultPrevented } from 'tests/utils';

describe('renders without errors', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<CommentBox />);
	});

	test('should render 1 textarea', () => {
		let texarea = wrapper.find('textarea');
		expect(texarea.length).toEqual(1);
	});

	test('should render 1 button', () => {
		let button = wrapper.find('button');
		expect(button.length).toEqual(1);
	});

	afterEach(() => {
		wrapper.unmount();
	});
});

describe('textarea behaviour', () => {
	let wrapper;
	const testStr = 'test';
	beforeEach(() => {
		wrapper = shallow(<CommentBox />);
		onChangeHandler(wrapper.find('textarea'), testStr);
		wrapper.update();
	});

	test('should trigger onChange listener when typed in', () => {
		expect(wrapper.find('textarea').prop('value')).toEqual(testStr);
	});

	test('should get empty after the form is submitted', () => {
		onSubmitDefaultPrevented(wrapper.find('form'));
		wrapper.update();
		expect(wrapper.find('textarea').prop('value')).toEqual('');
	});
});
