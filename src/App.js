import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import Terminal from './components/terminal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/terminal'>Terminal</Link></li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/terminal" component={Terminal} />
        </Switch>
      </div>
    );
  }
}

export default App;
