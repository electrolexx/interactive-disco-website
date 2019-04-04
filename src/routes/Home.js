import React, { Component } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';

class Home extends Component {
  render() {
    const featuredSection = {
      project1: {
        filename: 'web-white-princess.jpg',
        client: 'starz',
        project: 'the white princess',
      },
      project2: {
        filename: 'web-davincis-demons.jpg',
        client: 'starz',
        project: "da vinci's demons",
      },
      project3: {
        filename: 'web-arsonal.jpg',
        client: 'arsonal',
        project: 'agency site',
      },
    };
    return (
      <div className="Home">
        <Header />
        <Section title={'featured'} projectData={featuredSection} />
      </div>
    );
  }
}

export default Home;
