import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App_footer from './footer';
import App_header from './header';
import App_sidebar from './sidebar';

import Write from "./routes/Write";
import Post from "./routes/Post";
import Home from "./routes/Home";
import Plus from "./routes/Plus";
import Joongo from "./routes/Joongo";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <App_header></App_header>
                    </header>
                    <article>
                    
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/post" component={Post} />
                            <Route exact path="/plus" component={Plus} />
                            <Route exact path="/jonngo" component={Joongo} />
                            <Route exact path="/plus" component={Plus} />
                            <Route exact path="/write" component={Write} />
                        </Switch>
                    
                    </article>
                    <footer className="page-footer font-small blue pt-4">
                        <App_footer></App_footer>
                    </footer>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('contents'));
