export function onChange(component, value) {
	return component.simulate('change', {
		target: {
			value,
		},
	});
}

export function onSubmitDefaultPrevented(component) {
	return component.simulate('submit', {
		preventDefault: () => {},
	});
}
