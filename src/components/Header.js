// react
import React from 'react';

// redux
import { connect } from 'react-redux';
import { signIn, signOut } from 'actions';

import RouterLink from 'entities/RouterLink';

// testing
import DOMref from 'utils/test/DOMreferences';

function Header(props) {
	const adminAuthenticationConfiguration = [
		{
			label: 'Sing Out',
			onClick: props.signOut,
			'data-test': DOMref.header.button.adminSignOut,
		},
		{
			label: 'Sing In',
			onClick: props.signIn,
			'data-test': DOMref.header.button.adminSignIn,
		},
	];

	const navigationLinksConfiguration = [
		{
			label: 'Home',
			url: '/',
		},
		{
			label: 'post',
		},
	];

	function buildAdminAuthenticationButton(config) {
		return (
			<button onClick={config.onClick} data-test={config['data-test']}>
				{config.label}
			</button>
		);
	}

	function buildAdminButton() {
		let selectedIndex = props.auth ? 0 : 1;
		return buildAdminAuthenticationButton(
			adminAuthenticationConfiguration[selectedIndex]
		);
	}

	function buildLinksList() {
		return navigationLinksConfiguration
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
