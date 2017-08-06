import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className='text title' >Bernard Laveaux</div>
        <div className='text bio' >Bio</div>
        <div className='social'>
          <img className="text" src={"/github-alt.svg"}/>
        </div>
      </div>
    );
  }
}

export default Home;
