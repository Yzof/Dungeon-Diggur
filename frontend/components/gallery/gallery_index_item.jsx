import React from 'react';
import { Link } from 'react-router-dom';

const GalleryIndexItem = ({ gallery }) => (
  <li>
    <Link to={`api/galleries/${gallery.id}`}>
      `Gallery Number ${gallery.id}`
    </Link>
  </li>
);

export default GalleryIndexItem;
