import React, { Component } from 'react';
import './terminal.css';

import Prompt from './prompt';
import ViewPort from './viewport';

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: 'This is a test'
    };
  }

  render() {
    return (
      <div className="Terminal">
        <ViewPort
          display = {this.state.history}
        />

        <Prompt />
      </div>
    );
  }
}

export default Terminal;
