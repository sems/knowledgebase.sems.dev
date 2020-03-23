import React, {Component} from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import {Home} from './components/Home';
import {ClientContent} from './components/ClientContent';
import {ServerContent} from './components/ServerContent';
import {SecurityContent} from './components/SecurityContent';

import './styles/main.sass';

class App extends Component {
  render() {
    return (
      <div className="">
        <Router>
          <div>
            <nav className="nav justify-content-center mainMenu">
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
              </ul>
            </nav>

            <hr></hr>

            <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route exact path="/client">
                <ClientContent/>
              </Route>
              <Route exact path="/server">
                <ServerContent/>
              </Route>
              <Route exact path="/security">
                <SecurityContent/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
