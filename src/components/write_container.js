import React, { Component } from 'react';
import mysql from 'mysql';

class WriteContainer extends Component {
    data = {
        checkNickname: "",
        checkTitle: "",
        checkDescription: ""
    }
    state = {
        name: '',
        title: '',
        description: '',

    }

    SubmitClick = (e) => {
        
        var mysql = require('net');
        var mysql = require('mysql');
        var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
        var dbconn = mysql.createConnection({
            host: "http://suwonboot.run.goorm.io",
            user: "root",
            password: "123",
            database: "goorm"
        });
        console.log("DB CONNECT");
        console.log(dbconn);
        dbconn.connect(function(err){
            if(err){
              console.log('Database connection error');
            }else{
              console.log('Database connection successful');
            }
          });

          e.preventDefault();

        dbconn.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");

            var query = dbconn.query('insert into board (name, title, description, date) values ("' + this.state.name + '","' + this.state.title + '","' + this.state.description + '","' + st_date + '")', function (err, rows) {
                if (err) { throw err; }
                console.log("Data inserted!");
            })
        })

        console.log("Data inserted!");
        e.preventDefault();

        console.log('Submit', this.state.name, this.state.title, this.state.description);
        if (this.state.name.length > 15) {
            alert('닉네임은 15글자 이하로 할 수 있습니다.');
            e.preventDefault();
        }
        window.location.assign('/post');
    }

    CancelClick() {
        console.log('Cancel');
    }
    InputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.SubmitClick}>
                    <div className="form-group">
                        <label><strong>Nickname</strong></label>
                        <input type="text" value={this.state.name} onChange={this.InputChange} name="name" className="form-control" id="Nickname" placeholder="Input your Nickname" required />
                        <small class="form-text text-muted">{this.data.checkNickname}</small>
                    </div>
                    <div className="form-group">
                        <label><strong>Title</strong></label>
                        <input type="text" value={this.state.title} onChange={this.InputChange} name="title" className="form-control" id="title" placeholder="Input your Title" required />
                        <small class="form-text text-muted">{this.data.checkTitle}</small>
                    </div>
                    <div class="form-group">
                        <label><strong>Description:</strong></label>
                        <textarea value={this.state.description} onChange={this.InputChange} name="description" class="form-control" rows="15" id="description" required></textarea>
                        {this.state.checkDescription}<small class="form-text text-muted">{this.data.checkDescription}</small>
                    </div>

                    <button type="button" className="btn btn-success" onClick={(e) => this.SubmitClick(e)}>Submit</button>
                    <a href="/post"><button type="button" className="btn btn-danger">Cancel</button></a>
                </form>
            </div>
        );
    }
}

export default WriteContainer;
