import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import RouterLink from 'entities/RouterLink';
import { Link } from 'react-router-dom';

describe('instantiation', () => {
	test('should give error if instantiated without label and without url', () => {
		expect(() => new RouterLink()).toThrowError();
	});

	test('if label is not supplied, should save it as a substring of url', () => {
		let testUrl = 'url';
		let instance = new RouterLink(undefined, testUrl);
		expect(instance.label).toEqual(testUrl.substring(1));
	});
	test('if url is not supplied, should save it as concatenation of */* and label', () => {
		let testLabel = 'label';
		let instance = new RouterLink(testLabel, undefined);
		expect(instance.url).toEqual('/' + testLabel);
	});
});

describe('getters', () => {
	let wrapper;
	const instantiationArguments = ['label', 'url'];
	beforeEach(() => {
		let component = new RouterLink(...instantiationArguments).component;
		wrapper = shallow(<MemoryRouter>{component}</MemoryRouter>);
	});

	test('getter *component* should return a <Link/> component type', () => {
		expect(wrapper.find(Link).type()).toEqual(Link);
	});

	test('getter *component* text should equal the first instantiation argument', () => {
		expect(wrapper.find(Link).text()).toEqual(instantiationArguments[0]);
	});

	test('getter *component* url should equal the second instantiation argument', () => {
		expect(wrapper.find(Link).props()['to']).toEqual(instantiationArguments[1]);
	});
});
