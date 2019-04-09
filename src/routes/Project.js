import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap/TweenMax';
import Nav from '../components/Nav';
import siteData from '../../public/data/projects.json';

import arrowLeft from '../../public/images/nav-left-arrow.png';
import arrowRight from '../../public/images/nav-right-arrow.png';

import './Project.css';

let projectPathname = null;
let projectName = null;
let projectData = null;
let projectTitle = null;
let projectIndex = null;
let videoID = null;
let prevProjectPath = null;
let nextProjectPath = null;
let arrowLeftClassName = 'arrow-left';
let arrowRightClassName = 'arrow-right';

class Project extends Component {
  loadVideo = () => {
    document.getElementById(videoID).src = `/${require(`../../public/videos/${
      projectData[0].videoFilename
    }`)}`;
    document.getElementById(videoID).load();
  };

  componentDidMount() {
    this.loadVideo();
    TweenMax.from(this.projectContainer, 1, {
      delay: 0.2,
      autoAlpha: 0,
      onComplete: () => {
        document.getElementById(videoID).play();
      },
    });
  }

  componentDidUpdate() {
    this.loadVideo();
    TweenMax.from(this.projectContainer, 1, {
      delay: 0.2,
      autoAlpha: 0,
      onComplete: () => {
        document.getElementById(videoID).play();
      },
    });
  }

  render() {
    projectPathname = this.props.match.params.projectName;
    projectName = projectPathname.replace(/-/g, ' ');

    projectData = Object.entries(siteData).map(item => {
      const result = item[1].find((item2, index) => {
        if (item2.link === projectPathname) {
          projectIndex = index;
        }

        return item2.link === projectPathname;
      });
      return result;
    });

    projectTitle = `${projectData[0].client} - ${projectName}`;
    videoID = `videoPlayer-${projectPathname}`;

    const fadeInVideo = () => {
      TweenMax.to(this.videoItem, 1, {
        delay: 0.3,
        autoAlpha: 1,
      });
    };

    if (projectIndex === 0) {
      arrowLeftClassName += ' arrow-left-inactive';
      arrowRightClassName = ' arrow-right';
      prevProjectPath = '';
      nextProjectPath = `/work/${Object.entries(siteData)[0][1][projectIndex + 1].link}`;
    } else if (projectIndex === Object.entries(siteData)[0].length) {
      arrowLeftClassName = ' arrow-left';
      arrowRightClassName += ' arrow-right-inactive';
      prevProjectPath = `/work/${Object.entries(siteData)[0][1][projectIndex - 1].link}`;
      nextProjectPath = '';
    } else {
      arrowLeftClassName = ' arrow-left';
      arrowRightClassName = ' arrow-right';
      nextProjectPath = `/work/${Object.entries(siteData)[0][1][projectIndex + 1].link}`;
      prevProjectPath = `/work/${Object.entries(siteData)[0][1][projectIndex - 1].link}`;
    }

    return (
      <div ref={div => (this.projectContainer = div)}>
        <Nav />
        <div className="project-title">{projectTitle}</div>
        <video
          id={videoID}
          controls
          muted
          preload="auto"
          onLoadedData={fadeInVideo}
          controlsList="nodownload"
          ref={div => (this.videoItem = div)}
        >
          <source src="" type="video/mp4" />
        </video>
        <div className="info-container">
          <div className="project-tech-title">TECHNOLOGY</div>
          <div className="project-tech">{projectData[0].tech}</div>
        </div>
        <Link to={prevProjectPath}>
          <div className={arrowLeftClassName}>
            <img src={`/${arrowLeft}`} alt="" />
          </div>
        </Link>
        <Link to={nextProjectPath}>
          <div className={arrowRightClassName}>
            <img src={`/${arrowRight}`} alt="" />
          </div>
        </Link>
      </div>
    );
  }
}

export default Project;
