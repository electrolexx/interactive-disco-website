import React, { Component } from 'react';
import { TweenMax } from 'gsap/TweenMax';
import Nav from '../components/Nav';
import siteData from '../../public/data/projects.json';

import './Project.css';

class Project extends Component {
  componentDidMount() {
    TweenMax.from(this.projectContainer, 1, { delay: 0.2, autoAlpha: 0 });
  }

  render() {
    const projectPathname = this.props.match.params.projectName;
    const projectName = projectPathname.replace(/-/g, ' ');
    const fadeInVideo = () => {
      TweenMax.to(this.videoItem, 1, { delay: 0.3, autoAlpha: 1 });
    };

    const projectData = Object.entries(siteData).map(item => {
      const result = item[1].find(item2 => {
        return item2.link === projectPathname;
      });
      return result;
    });

    return (
      <div ref={div => (this.projectContainer = div)}>
        <Nav />
        <div className="project-title">{`${projectData[0].client} - ${projectName}`}</div>
        <video
          id="videoPlayer"
          controls
          autoPlay
          preload="auto"
          onLoadedData={fadeInVideo}
          controlsList="nodownload"
          ref={div => (this.videoItem = div)}
        >
          <source
            src={`/${require(`../../public/videos/${projectData[0].videoFilename}`)}`}
            type="video/mp4"
          />
        </video>
        <div className="info-container">
          <div className="project-tech-title">TECHNOLOGY</div>
          <div className="project-tech">{projectData[0].tech}</div>
        </div>
      </div>
    );
  }
}

export default Project;
