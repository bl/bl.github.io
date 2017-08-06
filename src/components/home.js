import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.t = this.t.bind(this);
    this.state = {
      title: this.t('home.title'),
      bio: this.t('home.bio'),
    };
  }

  t(symbol) {
    return this.props.translate.t(symbol);
  }

  render() {
    return (
      <div className="Home">
        <div className='text title' >Bernard Laveaux</div>
        <div className='text bio' >{this.state.bio}</div>
        <div className='social'>
          <img className="text" alt="Github" src={"/github-alt.svg"}/>
        </div>
      </div>
    );
  }
}

export default Home;
