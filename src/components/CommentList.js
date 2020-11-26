import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

function CommentList(props) {
	function buildCommentsList() {
		const { comments } = props;
		let li =
			comments.length >= 1
				? comments.map((el, index) => {
						return (
							<li key={index} onClick={props.removeComment.bind(this, index)}>
								{el}
							</li>
						);
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

export default connect(mapStateToProps, actions)(CommentList);
