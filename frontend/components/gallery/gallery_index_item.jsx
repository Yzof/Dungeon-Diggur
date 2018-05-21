import React from 'react';
import { Link } from 'react-router-dom';

const GalleryIndexItem = ({ gallery, animationClass }) => {
  // This will be the element targeted with the animation
  // Randomly select from an array with the different classes?

  // We have moved the classes to the parent component
  console.log(animationClass);
  return(
  <li className="main-gallery-item">
    <Link to={`/galleries/${gallery.id}`}>
      <img src={gallery.assets[0].path}/>
    </Link>
  </li>
);

};

export default GalleryIndexItem;
