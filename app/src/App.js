import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from './components/Home';

import './styles/main.sass';

import { Course } from './components/Course';

const clientContext = require.context(`./assets/tasker/client`, false, /\.md$/)
const serverContext = require.context(`./assets/tasker/server`, false, /\.md$/)
const securityContext = require.context(`./assets/tasker/security`, false, /\.md$/)
const integrationContext = require.context(`./assets/tasker/integration`, false, /\.md$/)

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <nav className="nav mainMenu">
                    <div className="container">
                        <ul className="mainMenu_list">
                            <li>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/client">Client</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/server">Server</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/security">Security</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/integration">Integration</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/client">
                        <Course type="client" context={clientContext}/>   
                    </Route>
                    <Route exact path="/server">
                        <Course type="server" context={serverContext}/>   
                    </Route>
                    <Route exact path="/security">
                        <Course type="security" context={securityContext}/>  
                    </Route>
                    <Route exact path="/integration">
                        <Course type="integration" context={integrationContext}/>  
                    </Route>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
