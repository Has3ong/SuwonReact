import React, { Component } from 'react';

class Post extends Component {
	state = {
		id: '',
		postforms: [],
	};

	componentDidMount() {
		this.getTopic();
	}
	getTopic = _ => {
		fetch('http://13.125.220.65:50928/api/post')
			.then(response => response.json())
			.then(response => this.setState({ postforms: response.data }))
			.catch(err => console.error(err));
	};

	getDetailTopic = e => {
		var id = e.currentTarget.children[0];
		this.state.id = id.getAttribute('value');

		fetch(`http://13.125.220.65:50928/api/post/list?id=${this.state.id}`).catch(err => console.error(err));
		window.location.href = '/post/' + this.state.id;
	};

	renderTopic = ({ id, type, name, title, comment }) =>
		<tbody id="table" onClick={this.getDetailTopic}>
			<th value={id} scope="row">
				{id}
			</th>
			<td>
				{type}
			</td>
			<td>
				{name}
			</td>
			<td>
				{title}
			</td>
		</tbody>;

	render() {
		const { postforms } = this.state;

		return (
			<div>
				<table className="table">
					<thead className="black white-text">
						<tr>
							<th scope="col">#</th>
							<th scope="col">type</th>
							<th scope="col">name</th>
							<th scope="col">title</th>
						</tr>
					</thead>

					{postforms.map(this.renderTopic)}
				</table>
				<a href="/write">
					<button type="button" class="btn btn-primary">
						Primary
					</button>
				</a>
			</div>
		);
	}
}

export default Post;
