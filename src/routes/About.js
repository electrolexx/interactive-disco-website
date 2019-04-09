import React, { Component } from 'react';
import { TweenMax } from 'gsap/TweenMax';
import Nav from '../components/Nav';

import './About.css';

export default class About extends Component {
  componentDidMount() {
    TweenMax.from(this.aboutContainer, 1.5, {
      delay: 0.3,
      autoAlpha: 0,
    });
  }

  render() {
    return (
      <div className="About" ref={div => (this.aboutContainer = div)}>
        <Nav />
        <div className="about-container">
          <p>
            As an experienced director with over 10 years of managing and leading digital projects,
            I have supervised and mentored creative and technical teams while also being hands-on as
            needed on cross-platform executions for mobile, web, and social campaigns.
          </p>
          <p>
            In my current role, my primary responsibility is to support my team and ensure long-term
            goals are achieved with limited resources. My day-to-day consists of leading software
            architecture and optimization strategies, looking for bottlenecks in our work flow,
            coordinating with our creative and account teams, and prioritizing what gets done.
          </p>
          <p>
            I’m an expert problem solver who is willing to wrangle complex problems and push the
            envelope in a fast-paced deadline driven environment.
          </p>
        </div>
      </div>
    );
  }
}
