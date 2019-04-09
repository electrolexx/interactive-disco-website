import React, { Component } from 'react';
import { TweenMax } from 'gsap/TweenMax';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Section from '../components/Section';

class Home extends Component {
  componentDidMount() {
    TweenMax.from(this.appContainer, 1.5, { delay: 0.3, autoAlpha: 0 });
  }

  render() {
    return (
      <div className="Home" ref={div => (this.appContainer = div)}>
        <Nav />
        <Header />
        <Section title={'featured'} />
        <Section title={'web'} />
        <Section title={'games'} />
        <Section title={'rich media'} />
      </div>
    );
  }
}

export default Home;
