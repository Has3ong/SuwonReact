import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Write from './pages/Write';
import Post from './pages/Post';
import PostView from './pages/PostView';
import Joongo from './pages/Joongo';
import Help from './pages/Help';

import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<BrowserRouter>
						<Switch>
							<Route path="/" exact={true} component={Main} />
							<Route path="/write" exact={true} component={Write} />
							<Route path="/post" exact={true} component={Post} />
							<Route path="/joongo" exact={true} component={Joongo} />
							<Route path="/help" exact={true} component={Help} />
							<Route path="/post/:postid" component={PostView} />
							<Route path="/notpund" component={NotFound} />
						</Switch>
					</BrowserRouter>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
