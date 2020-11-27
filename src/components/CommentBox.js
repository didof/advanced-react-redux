import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';
import DOMref from 'utils/test/DOMreferences';

function CommentBox(props) {
	const [comment, setComment] = useState('');

	useEffect(() => {
		if (!props.auth) {
			props.history.replace('/');
		}
	}, [props.history, props.auth]);

	function onChangeHandler(event) {
		setComment((prev) => event.target.value);
	}

	function onSubmitHandler(event) {
		event.preventDefault();

		props.saveComment(comment);

		setComment((prev) => '');
	}

	return (
		<div data-test={DOMref.commentBox.wrapper}>
			<form
				id='form-comment'
				onSubmit={onSubmitHandler}
				data-test={DOMref.commentBox.form}
			>
				<h4 data-test={DOMref.commentBox.header}>Add a Comment</h4>
				<textarea
					value={comment}
					onChange={onChangeHandler}
					data-test={DOMref.commentBox.textarea}
				/>
				<div>
					<button
						type='submit'
						form='form-comment'
						data-test={DOMref.commentBox.button.submit}
					>
						Submit Comment
					</button>
				</div>
			</form>
			<button
				onClick={props.fetchComments}
				data-test={DOMref.commentBox.button.fetchComments}
			>
				Fetch Comments
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
	};
}

export default connect(mapStateToProps, { saveComment, fetchComments })(
	CommentBox
);
