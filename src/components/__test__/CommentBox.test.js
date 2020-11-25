import React from 'react';
import { mount, shallow } from 'enzyme';

import CommentBox from 'components/CommentBox';

import { onChangeHandler } from 'tests/utils';

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
	// let textarea;
	beforeEach(() => {
		wrapper = shallow(<CommentBox />);
		console.log(wrapper.innerHTML);
		// textarea = wrapper.find('textarea');
	});

	test('si', () => {});

	// test('should trigger onChange listener when typed in', () => {
	// 	const str = 'test';
	// 	// onChangeHandler(textarea, str);
	// 	textarea.simulate('change', {
	// 		target: {
	// 			value: str,
	// 		},
	// 	});
	// 	wrapper.update();
	// 	expect(textarea.prop('value')).toEqual(str);
	// });
});
