import React from 'react';
import { connect } from 'react-redux';

function requireAuth(ChildComponent, redirectPath = '/') {
	class ComposedComponent extends React.Component {
		componentDidMount() {
			this.redirect();
		}

		componentDidUpdate() {
			this.redirect();
		}

		redirect() {
			if (!this.props.auth) this.props.history.replace(redirectPath);
		}

		render() {
			return <ChildComponent {...this.props} />;
		}
	}

	function mapStateToProps(state) {
		return {
			auth: state.auth,
		};
	}

	return connect(mapStateToProps)(ComposedComponent);
}

export default requireAuth;
