import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Custom styles for the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon" />
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/galleries" className="link">Posts</Link>
        </li>
        <li>
          <Link to="/logout" className="link">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
