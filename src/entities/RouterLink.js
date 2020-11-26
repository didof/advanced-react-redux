import React from 'react';
import { Link } from 'react-router-dom';

export default class RouterLink {
	label;
	url;
	constructor(label, url) {
		if (!label && !url) throw new Error('[RouterLink] needs value || url');

		if (!label) this.label = url.substring(1);
		else this.label = label;

		if (!url) this.url = `/${label}`;
		else this.url = url;
	}

	get component() {
		return <Link to={this.url}>{this.label}</Link>;
	}
}
