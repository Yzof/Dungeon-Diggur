import React from 'react';

const SidebarSelector = ({ user }) => (
  <div className="sidebar-selector-container">
    <ul className='sidebar-selector'>
      <li id="sidebar-comments">Comments</li>
      <li id='sidebar-galleries'>Galleries</li>
      <li id='sidebar-replies'>Replies</li>
    </ul>
  </div>
);

export default SidebarSelector;
