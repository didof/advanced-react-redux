import React from 'react';
import Root from 'Root';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

import * as utils from 'tests/utils';

describe('renders without errors', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(
			<Root>
				<CommentBox />
			</Root>
		);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	test('should render 1 textarea', () => {
		let texarea = wrapper.find('textarea');
		expect(texarea.length).toEqual(1);
	});

	test('should render 1 button', () => {
		let button = wrapper.find('button');
		expect(button.length).toEqual(1);
	});
});

describe('textarea behaviour', () => {
	let wrapper;
	const testStr = 'test';
	beforeEach(() => {
		wrapper = mount(
			<Root>
				<CommentBox />
			</Root>
		);
		utils.onChangeHandler(wrapper.find('textarea'), testStr);
		wrapper.update();
	});

	test('should trigger onChange listener when typed in', () => {
		expect(wrapper.find('textarea').prop('value')).toEqual(testStr);
	});

	test('should get empty after the form is submitted', () => {
		utils.onSubmitDefaultPrevented(wrapper.find('form'));
		wrapper.update();
		expect(wrapper.find('textarea').prop('value')).toEqual('');
	});
});
