import React, { Component } from 'react';

class PostView extends Component {
	state = {
		postforms: [],
	};

	componentDidMount() {
		this.getPost();
	}

	getPost = _ => {
		var value = this.props.match.params.postid;

		fetch('http://13.125.220.65:50928/api/post/list?id=' + value)
			.then(response => response.json())
			.then(response => this.setState({ postforms: response.data }))
			.catch(err => console.error(err));
	};

	renderPost = ({ id, type, name, title, comment }) =>
		<h1>
			{id} {type} {name} {title} {comment}
		</h1>;

	render() {
		const { postforms } = this.state;

		return (
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p>
					<a href="#" className="card-link">
						Card link
					</a>
					<a href="#" className="card-link">
						Another link
					</a>
				</div>
				Postview
				{postforms.map(this.renderPost)}
			</div>
		);
	}
}
export default PostView;
