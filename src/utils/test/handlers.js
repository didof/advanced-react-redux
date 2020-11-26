function onChange(component, value) {
	return component.simulate('change', {
		target: {
			value,
		},
	});
}

function onSubmitDefaultPrevented(component) {
	return component.simulate('submit', {
		preventDefault: () => {},
	});
}

const handlers = {
	onChange,
	onSubmitDefaultPrevented,
};

export default handlers;
