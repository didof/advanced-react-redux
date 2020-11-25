import React, { Component } from 'react';

export default class CommentBox extends Component {
	state = {
		comment: '',
	};

	onChangeHandler(event) {
		this.setState({ comment: event.target.value });
	}

	onSubmitHandler(event) {
		// event.preventDefault();
		// console.log(comment);
		// setComment((prev) => '');
	}

	onMouseEnterHandler(event) {
		// document.querySelector('textarea').focus();
	}

	render() {
		return (
			<form
				id='form-comment'
				// onSubmit={onSubmitHandler}
				// onMouseEnter={onMouseEnterHandler}
			>
				<h4>Add a Comment</h4>
				<textarea
					value={this.state.comment}
					onChange={this.onChangeHandler.bind(this)}
				/>
				<div>
					<button type='submit' form='form-comment'>
						Submit Comment
					</button>
				</div>
			</form>
		);
	}
}

// export default function CommentBox() {
// 	const [comment, setComment] = useState('');

// function onChangeHandler(event) {
// 	setComment((prev) => event.target.value);
// }

// function onSubmitHandler(event) {
// 	event.preventDefault();
// 	console.log(comment);
// 	setComment((prev) => '');
// }

// function onMouseEnterHandler(event) {
// 	document.querySelector('textarea').focus();
// }

// 	return (
// <form
// 	id='form-comment'
// 	onSubmit={onSubmitHandler}
// 	onMouseEnter={onMouseEnterHandler}
// >
// 	<h4>Add a Comment</h4>
// 	<textarea value={comment} onChange={onChangeHandler} />
// 	<div>
// 		<button type='submit' form='form-comment'>
// 			Submit Comment
// 		</button>
// 	</div>
// </form>
// 	);
// }
