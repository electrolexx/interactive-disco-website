import React from 'react';
import Item from './Item';
import './Section.css';

export default function Section(props) {
  return (
    <div className="section-container">
      <div className="section-title">{props.title.toUpperCase()}</div>
      <Item imageThumb={'web-white-princess.jpg'} client={'starz'} project={'the white princess'} />
    </div>
  );
}
