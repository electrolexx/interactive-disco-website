import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import siteData from '../../public/data/projects.json';

import './Section.css';

class Section extends Component {
  render() {
    return (
      <div className="section-container" ref={div => (this.appContainer = div)}>
        <div className="section-title">{this.props.title.toUpperCase()}</div>
        <div className="projects-container">
          <div className="projects-row">
            {siteData['featured'].map(item => (
              <Link to={`/work/${item.link}`} key={item.project}>
                <Item
                  key={item.project}
                  imageThumb={item.imageFilename}
                  client={item.client}
                  project={item.project}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
