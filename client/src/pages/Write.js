import React, { Component } from 'react';

class Write extends Component {
	state = {
		postform: {
			name: '',
			type: 0,
			title: '',
			comment: '',
		},
	};

	addTopic = _ => {
		if (this.state.postform.title.length == 0 || this.state.postform.comment.length == 0) {
			alert('빈칸을 다 채워주세요.');
			return;
		}

		if (this.state.postform.type == '0') {
			alert('카테고리 선택해주세요.');
			return;
		}

		if (this.state.postform.name.length == 0) {
			this.state.postform.name = '익명';
		}
		const { topic } = this.state;
		fetch(
			`http://13.125.220.65:50928/api/write/add?name=${this.state.postform.name}&type=${this.state.postform
				.type}&title=${this.state.postform.title}&comment=${this.state.postform.comment}`
		).catch(err => console.error(err));
		alert('게시물이 성공적으로 업로드 되었습니다.');
		window.history.back();
	};
	render() {
		return (
			<div>
				<select
					name="cars"
					className="custom-select-sm"
					onChange={e => this.setState({ postform: { ...this.state.postform, type: e.target.value } })}
				>
					<option selected>Small Custom Select Menu</option>
					<option value="자유게시판">자유게시판</option>
					<option value="중고거래">중고거래</option>
					<option value="건의사항">건의사항</option>
				</select>
				<div className="form-group">
					<label for="usr">
						<strong>NickName</strong>
					</label>
					<input
						className="form-control"
						placeholder="익명"
						value={this.state.postform.name}
						onChange={e => this.setState({ postform: { ...this.state.postform, name: e.target.value } })}
					/>
				</div>
				<div className="form-group">
					<label for="pwd">
						<strong>Title</strong>
					</label>
					<input
						className="form-control"
						placeholder="제목"
						value={this.state.postform.title}
						onChange={e => this.setState({ postform: { ...this.state.postform, title: e.target.value } })}
					/>
				</div>
				<div className="form-group">
					<label for="comment">
						<strong>Comment</strong>
					</label>
					<textarea
						className="form-control"
						rows="15"
						placeholder="ㅎㅎ"
						value={this.state.postform.comment}
						onChange={e => this.setState({ postform: { ...this.state.postform, comment: e.target.value } })}
					/>
				</div>
				<button type="button" className="btn btn-success" onClick={this.addTopic}>
					Success
				</button>
				<a href="/post">
					<button type="button" className="btn btn-danger">
						Danger
					</button>
				</a>
			</div>
		);
	}
}

export default Write;
