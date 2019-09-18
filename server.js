const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123',
	database: 'goorm',
});

connection.connect(err => {
	if (err) {
		return err;
	}
});

const SELECT_ALL_MAIN_QUERY = `SELECT * FROM topic WHERE type='공지사항' ORDER BY id DESC`;
const SELECT_ALL_POST_QUERY = `SELECT * FROM topic WHERE type='자유게시판' ORDER BY id DESC`;
const SELECT_ALL_JOONGO_QUERY = `SELECT * FROM topic WHERE type='중고거래' ORDER BY id DESC`;
const SELECT_ALL_HELP_QUERY = `SELECT * FROM topic WHERE type='건의사항' ORDER BY id DESC`;

app.get('/api/main', (req, res) => {
	connection.query(SELECT_ALL_MAIN_QUERY, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results,
			});
		}
	});
});
app.get('/api/post', (req, res) => {
	connection.query(SELECT_ALL_POST_QUERY, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results,
			});
		}
	});
});

app.get('/api/post/list', (req, res) => {
	const { id } = req.query;
	const SELECT_DETAIL_POST_TOPIC_QUERY = `select * from topic where id=${id}`;
	connection.query(SELECT_DETAIL_POST_TOPIC_QUERY, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results,
			});
		}
	});
});

app.get('/api/joongo', (req, res) => {
	connection.query(SELECT_ALL_JOONGO_QUERY, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results,
			});
		}
	});
});

app.get('/api/help', (req, res) => {
	connection.query(SELECT_ALL_HELP_QUERY, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results,
			});
		}
	});
});

app.get(`/api/post/page`, (req, res) => {
	const { id } = req.query;
	const SELECT_DETAIL_TOPIC_QUERY = `select * from topic where id=${id}`;
	connection.query(SELECT_DETAIL_TOPIC_QUERY, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results,
			});
		}
	});
});

app.get('/api/write/add', (req, res) => {
	const { name, type, title, comment } = req.query;
	const INSERT_PRODUCTS_QUERY = `INSERT INTO topic (name, type, title, comment) VALUES ('${name}', '${type}', '${title}', '${comment}')`;
	connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			res.send('successfully added product');
		}
	});
});

app.listen(4000, () => {
	console.log(`Products server port 4000`, app);
});
