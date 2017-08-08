import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.t = this.t.bind(this);
    console.log(this.t('home.bio.content'));
    this.state = {
      title: this.t('home.title'),
      bio: {
        title: this.t('home.bio.title'),
        // TODO: Componentize the following hrefs
        content: this.t('home.bio.content', {
          carleton: "<href>Carleton University</href>",
          wealthsimple: "<a href='https://www.wealthsimple.com'>Wealthsimple</a>",
          shopify: "<href>Shopify</href>",
          ibm: "<href>IBM</href>"
        }),
      }
    };
  }

  t(symbol, opts = {}) {
    return this.props.translate.t(symbol, opts);
  }

  render() {
    return (
      <div className="Home">
        <div className='text title' >Bernard Laveaux</div>
        <div className='text bio' >{this.state.bio.title}</div>
        <div className='text content' >{this.state.bio.content}</div>
        <div className='social'>
          <img className="text" alt="Github" src={"/github-alt.svg"}/>
        </div>
      </div>
    );
  }
}

export default Home;
