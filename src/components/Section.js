import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './Section.css';

export default function Section(props) {
  const projectData = props.projectData;
  return (
    <div className="section-container">
      <div className="section-title">{props.title.toUpperCase()}</div>
      <div className="projects-container">
        <div className="projects-row">
          {projectData.map(item => (
            <Link to={`/work/${item.link}`} key={item.project}>
              <Item
                key={item.project}
                imageThumb={item.filename}
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
