import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

function CommentBox(props) {
	const [comment, setComment] = useState('');

	function onChangeHandler(event) {
		setComment((prev) => event.target.value);
	}

	function onSubmitHandler(event) {
		event.preventDefault();

		props.saveComment(comment);

		setComment((prev) => '');
	}

	return (
		<form id='form-comment' onSubmit={onSubmitHandler}>
			<h4>Add a Comment</h4>
			<textarea value={comment} onChange={onChangeHandler} />
			<div>
				<button type='submit' form='form-comment'>
					Submit Comment
				</button>
			</div>
		</form>
	);
}

export default connect(null, actions)(CommentBox);
