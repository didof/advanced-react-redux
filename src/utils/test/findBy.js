const attribute = {
	test: function findByAttributeTest(component, attribute) {
		return component.find(`[data-test="${attribute}"]`);
	},
};

const findBy = {
	attribute,
};

export default findBy;
