// react
import React from 'react';

// redux
import { connect } from 'react-redux';
import { signIn, signOut } from 'actions';

import RouterLink from 'entities/RouterLink';

// testing
import DOMref from 'utils/test/DOMreferences';

function Header(props) {
	function buildAdminButton() {
		if (props.auth)
			return (
				<button
					onClick={props.signOut}
					data-test={DOMref.header.button.adminSignOut}
				>
					Sign Out
				</button>
			);
		else
			return (
				<button onClick={props.signIn} data-test={DOMref.header.button.adminSignIn}>
					Sign In
				</button>
			);
	}

	function buildLinksList() {
		const links = [
			{
				label: 'Home',
				url: '/',
			},
			{
				label: 'post',
			},
		];
		return links
			.map((el) => new RouterLink(el.label, el.url))
			.map((el, i) => {
				return <li key={`header-${i}`}>{el.component}</li>;
			});
	}

	return (
		<header data-test={DOMref.header.wrapper}>
			<ul data-test={DOMref.header.list}>
				{buildLinksList()}
				<li data-test={DOMref.header.listItem.adminAuthentication}>
					{buildAdminButton()}
				</li>
			</ul>
		</header>
	);
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
	};
}

export default connect(mapStateToProps, { signIn, signOut })(Header);
