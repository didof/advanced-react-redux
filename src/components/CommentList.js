import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import DOMref from 'utils/test/DOMreferences';

function CommentList(props) {
	function buildCommentsList() {
		const { comments } = props;
		let li =
			comments.length >= 1
				? comments.map((el, index) => {
						return (
							<li
								key={index}
								// should use thunk in order to do removeComment
								// onClick={props.removeComment.bind(this, index)}
								data-test={DOMref.commentList.listItem}
							>
								{el}
							</li>
						);
				  })
				: null;
		return <ul data-test={DOMref.commentList.list}>{li}</ul>;
	}

	return (
		<div data-test={DOMref.commentList.wrapper}>
			<h4 data-test={DOMref.commentList.header}>Comment List</h4>
			{buildCommentsList()}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		comments: state.comments,
	};
}

export default connect(mapStateToProps, actions)(CommentList);
