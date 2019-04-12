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
let sectionIndex = null;
let videoID = null;
let prevProjectPath = null;
let nextProjectPath = null;
let arrowLeftClassName = 'arrow-left';
let arrowRightClassName = 'arrow-right';

class Project extends Component {
  componentDidMount() {
    this.loadVideo();
    TweenMax.from(this.projectContainer, 1, {
      delay: 0.2,
      autoAlpha: 0,
    });
  }

  componentDidUpdate() {
    this.loadVideo();
    TweenMax.from(this.projectContainer, 1, {
      delay: 0.2,
      autoAlpha: 0,
    });
  }

  loadVideo = () => {
    document.getElementById(videoID).src = `/${require(`../../public/videos/${
      projectData[sectionIndex].videoFilename
    }`)}`;
    document.getElementById(videoID).load();
  };

  initArrows = () => {
    if (projectIndex === 0 && sectionIndex === 0) {
      arrowLeftClassName += ' arrow-left-inactive';
      arrowRightClassName = ' arrow-right';
      prevProjectPath = '';
      nextProjectPath = `/work/${Object.entries(siteData)[sectionIndex][1][projectIndex + 1].link}`;
    }

    // GO TO PREVIOUS SECTION
    else if (projectIndex === 0 && sectionIndex <= Object.entries(siteData).length - 1) {
      arrowLeftClassName = ' arrow-left';
      prevProjectPath = `/work/${
        Object.entries(siteData)[sectionIndex - 1][1][
          Object.entries(siteData)[sectionIndex - 1][1].length - 1
        ].link
      }`;
      nextProjectPath = `/work/${Object.entries(siteData)[sectionIndex][1][projectIndex + 1].link}`;
    }

    // GO TO NEXT SECTION
    else if (
      projectIndex === Object.entries(siteData)[sectionIndex][1].length - 1 &&
      sectionIndex < Object.entries(siteData).length - 1
    ) {
      arrowLeftClassName = ' arrow-left';
      prevProjectPath = `/work/${Object.entries(siteData)[sectionIndex][1][projectIndex - 1].link}`;
      nextProjectPath = `/work/${Object.entries(siteData)[sectionIndex + 1][1][0].link}`;
    }

    // LAST PROJECT IN LAST SECTION
    else if (
      projectIndex === Object.entries(siteData)[sectionIndex][1].length - 1 &&
      sectionIndex === Object.entries(siteData).length - 1
    ) {
      arrowLeftClassName = ' arrow-left';
      arrowRightClassName += ' arrow-right-inactive';
      prevProjectPath = `/work/${Object.entries(siteData)[sectionIndex][1][projectIndex - 1].link}`;
      nextProjectPath = '';
    } else {
      arrowLeftClassName = ' arrow-left';
      arrowRightClassName = ' arrow-right';
      nextProjectPath = `/work/${Object.entries(siteData)[sectionIndex][1][projectIndex + 1].link}`;
      prevProjectPath = `/work/${Object.entries(siteData)[sectionIndex][1][projectIndex - 1].link}`;
    }
  };

  render() {
    projectPathname = this.props.match.params.projectName;
    projectName = projectPathname.replace(/-/g, ' ');

    projectData = Object.entries(siteData).map((item, secIndex) => {
      const result = item[1].find((item2, index) => {
        if (item2.link === projectPathname) {
          projectIndex = index;
          sectionIndex = secIndex;
        }

        return item2.link === projectPathname;
      });
      return result;
    });

    projectTitle = `${projectData[sectionIndex].client} - ${projectName}`;
    videoID = `videoPlayer-${projectPathname}`;

    this.initArrows();

    const fadeInVideo = () => {
      TweenMax.to(this.videoItem, 1, {
        delay: 0.5,
        autoAlpha: 1,
      });
    };

    return (
      <div ref={div => (this.projectContainer = div)}>
        <Nav />
        <div className="project-title">{projectTitle}</div>
        <video
          id={videoID}
          controls
          muted
          autoPlay
          preload="auto"
          onLoadedData={fadeInVideo}
          controlsList="nodownload"
          ref={div => (this.videoItem = div)}
        >
          <source src="" type="video/mp4" />
        </video>
        <div className="info-container">
          <div className="project-tech-title">FRONT-END TECHNOLOGY</div>
          <div className="project-tech">{projectData[sectionIndex].frontEndTech}</div>
          <div className="project-tech-title">BACK-END TECHNOLOGY</div>
          <div className="project-tech">{projectData[sectionIndex].backEndTech}</div>
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
