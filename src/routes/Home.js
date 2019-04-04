import React, { Component } from 'react';
import { TweenMax } from 'gsap/TweenMax';
import Header from '../components/Header';
import Section from '../components/Section';

class Home extends Component {
  componentDidMount() {
    TweenMax.from(this.appContainer, 2, { delay: 0.3, autoAlpha: 0 });
  }

  render() {
    const featuredSection = [
      {
        filename: 'web-white-princess.jpg',
        client: 'starz',
        project: 'the white princess',
        link: 'the-white-princess',
      },
      {
        filename: 'web-davincis-demons.jpg',
        client: 'starz',
        project: "da vinci's demons",
        link: 'da-vincis-demons',
      },
      {
        filename: 'web-arsonal.jpg',
        client: 'arsonal',
        project: 'agency site',
        link: 'arsonal',
      },
    ];
    return (
      <div className="Home" ref={div => (this.appContainer = div)}>
        <Header />
        <Section title={'featured'} projectData={featuredSection} />
      </div>
    );
  }
}

export default Home;
