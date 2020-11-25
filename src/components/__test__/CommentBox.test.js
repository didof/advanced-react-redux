import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';

import CommentBox from 'components/CommentBox';

import * as utils from 'tests/utils';

function mountRootedComponent() {
	return mount(
		<Root>
			<CommentBox />
		</Root>
	);
}

describe('renders without errors', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mountRootedComponent();
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
		wrapper = mountRootedComponent();
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
