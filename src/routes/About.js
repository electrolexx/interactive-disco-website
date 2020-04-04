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
      <div className="About" ref={(div) => (this.aboutContainer = div)}>
        <Nav />
        <div className="about-container">
          <p>
            Experienced senior software systems engineer with a demonstrated history of leading
            agile based engineering teams. A hands-on leader mentoring product, software, and
            creative team members on cross-platform executions.
          </p>
          <p>
            In my current role, primary responsibilities include supporting my team and ensuring
            long-term goals are achieved with limited resources. My day-to-day consists of leading
            software architecture and optimization strategies, Removing bottleneck blockers in our
            work flow, and prioritizing what gets done.
          </p>
          <p>
            I’m a problem solver who is willing to wrangle complex problems and push the envelope in
            a fast-paced deadline driven environment.
          </p>
        </div>
      </div>
    );
  }
}
