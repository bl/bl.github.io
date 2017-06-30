import React, { Component } from 'react';
import './viewport.css'

class ViewPort extends Component {
  render() {
    return (
      <div className="ViewPort">
        <div className="Display">
          {this.props.display}
        </div>
      </div>
    );
  }
}

export default ViewPort;
