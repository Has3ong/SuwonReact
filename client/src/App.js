import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultDashboard from './pages/Dashboard'
import Footer from './components/Footer'
import Topbar from './components/Topbar'

import './assets/scss/DefaultTheme.scss';

class App extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<Topbar/>
					<BrowserRouter>
						<Switch>
							<Route path="/" exact={true} component={DefaultDashboard} />
							<Route path="/dashboard" exact={true} component={DefaultDashboard} />
						</Switch>
					</BrowserRouter>
					<Footer/>
				</div>
			</div>
		);
	}
}

export default App;
