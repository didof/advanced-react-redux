// react
import React from 'react';

// redux
import { connect } from 'react-redux';

// react router
import { Route } from 'react-router-dom';

// components
import Header from 'components/Header';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// testing
import DOMref from 'utils/test/DOMreferences';

function App() {
	return (
		<div data-test={DOMref.app.wrapper}>
			<Header />
			<Route exact path='/' component={CommentList} />
			<Route path='/post' component={CommentBox} />
		</div>
	);
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
	};
}

export default connect(mapStateToProps)(App);
