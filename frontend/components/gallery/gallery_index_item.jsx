import React from 'react';
import { Link } from 'react-router-dom';

const GalleryIndexItem = ({ gallery, animationClass }) => {
  return(
  <li className={`main-gallery-item ${animationClass}`} >
    <Link to={`/galleries/${gallery.id}`}>
      <img src={gallery.assets[0].path}/>
    </Link>
  </li>
);

};

export default GalleryIndexItem;
