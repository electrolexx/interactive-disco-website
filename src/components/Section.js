import React from 'react';
import Item from './Item';
import './Section.css';

export default function Section(props) {
  const projectData = props.projectData;
  return (
    <div className="section-container">
      <div className="section-title">{props.title.toUpperCase()}</div>
      <div className="projects-container">
        <div className="projects-row">
          {/* {Object.keys(projectData).map(key => console.log(key))} */}

          <Item
            imageThumb={'web-white-princess.jpg'}
            client={'starz'}
            project={'the white princess'}
          />
          <Item
            imageThumb={'web-davincis-demons.jpg'}
            client={'starz'}
            project={"da vinci's demons"}
          />
          <Item imageThumb={'web-arsonal.jpg'} client={'arsonal'} project={'agency site'} />
        </div>
      </div>
    </div>
  );
}
