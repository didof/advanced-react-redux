import React from 'react';
import { connect } from 'react-redux';

function CommentList(props) {
	function buildCommentsList() {
		const { comments } = props;
		let li =
			comments.length >= 1
				? comments.map((el, i) => {
						return <li key={i}>{el}</li>;
				  })
				: null;
		return <ul>{li}</ul>;
	}
	return <div>{buildCommentsList()}</div>;
}

function mapStateToProps(state) {
	return {
		comments: state.comments,
	};
}

export default connect(mapStateToProps)(CommentList);
