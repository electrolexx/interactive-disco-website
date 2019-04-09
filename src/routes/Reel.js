import React, { Component } from 'react';
import { TweenMax } from 'gsap/TweenMax';
import Nav from '../components/Nav';

import reelVideo from '../../public/videos/reel.mp4';

export default class Reel extends Component {
  componentDidMount() {
    TweenMax.from(this.reelContainer, 1.5, {
      delay: 0.3,
      autoAlpha: 0,
    });
  }

  render() {
    const fadeInVideo = () => {
      TweenMax.to(this.videoItem, 1, {
        delay: 0.5,
        autoAlpha: 1,
      });
    };

    return (
      <div ref={div => (this.reelContainer = div)}>
        <Nav />
        <video
          id="reelVid"
          controls
          preload="auto"
          autoPlay
          onLoadedData={fadeInVideo}
          controlsList="nodownload"
          ref={div => (this.videoItem = div)}
        >
          <source src={reelVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}
