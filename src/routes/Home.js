import React, { Component } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Section title={'featured'} />
      </div>
    );
  }
}

export default Home;
