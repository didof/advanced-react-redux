const app = {
	wrapper: 'wrapper_app',
};

const header = {
	wrapper: 'wrapper_header',
	list: 'list_header',
	listItem: {
		adminAuthentication: 'adminAuthentication_header',
	},
	button: {
		adminSignIn: 'adminSignIn_header',
		adminSignOut: 'adminSignOut_header',
	},
};

const commentBox = {
	wrapper: 'wrapper_comment-box',
	header: 'header_comment-box',
	form: 'form_comment-box',
	textarea: 'textarea_comment-box',
	button: {
		fetchComments: 'fetch_comment-box',
		submit: 'submit_comment-box',
	},
};

const commentList = {
	wrapper: 'wrapper_comment-list',
	header: 'header_comment-list',
	list: 'list_comment-list',
	listItem: 'list-item_comment-list',
};

const DOMref = {
	app,
	header,
	commentBox,
	commentList,
};

export default DOMref;
