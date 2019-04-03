import React from 'react';
import './Item.css';

export default function Item(props) {
  return (
    <div className="item-container">
      <img src={require('../../public/images/portfolio/' + props.imageThumb)} alt="" />
      <span className="item-client">{props.client.toUpperCase()}</span>
      <span className="item-project">{props.project.toUpperCase()}</span>
    </div>
  );
}
