import React from 'react';
import { Link } from 'react-router-dom';

const GalleryIndexItem = ({ gallery }) => {
  return(
  <li className="main-gallery-item">
    <Link to={`/galleries/${gallery.id}`}>
      <img src={gallery.assets[0].path}/>
    </Link>
  </li>
);

};

export default GalleryIndexItem;
