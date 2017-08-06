import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Polyglot from 'node-polyglot';

import Home from './components/home';
import Terminal from './components/terminal';

class App extends Component {
  constructor(props) {
    super(props);

    const translate = new Polyglot({
      phrases: require('./translations/en.json'),
    });

    this.buildHome = this.buildHome.bind(this);
    this.state = {
      translate: translate,
    };
  }

  buildHome() {
    return (
      <Home
        translate={this.state.translate}
      />
    );
  }

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
          <Route exact path="/" render={this.buildHome} />
          <Route exact path="/terminal" component={Terminal} />
        </Switch>
      </div>
    );
  }
}

export default App;
