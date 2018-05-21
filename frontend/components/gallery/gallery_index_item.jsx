import React from 'react';
import { Link } from 'react-router-dom';

const GalleryIndexItem = ({ gallery }) => {
  // This will be the element targeted with the animation
  // How will we get the different classes in?
  // Randomly select from an array with the different classes?

  // We are going to need about 7 different classes, space 3 seconds apart
  const classes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  return(
  <li className="main-gallery-item">
    <Link to={`/galleries/${gallery.id}`}>
      <img src={gallery.assets[0].path}/>
    </Link>
  </li>
);

};

export default GalleryIndexItem;
