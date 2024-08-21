import React from 'react';
import { Button } from 'react-bootstrap';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`sidebar bg-light ${isOpen ? 'open' : 'closed'}`}
      style={{
        width: isOpen ? '250px' : '0',
        transition: 'width 0.3s',
        overflowX: isOpen ? 'visible' : 'hidden',
        position: 'fixed',
        height: '100%',
        top: '0',
        left: '0',
        paddingTop: '60px',
        whiteSpace: isOpen ? 'normal' : 'nowrap',
        zIndex: '1000',
      }}
    >
      <Button
        variant="primary"
        onClick={toggleSidebar}
        style={{ marginBottom: '20px', marginLeft: '10px' }}
      >
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </Button>
      <ul className="list-unstyled" style={{ display: isOpen ? 'block' : 'none', paddingLeft: '10px' }}>
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#library" className="nav-link">Music Library</a></li>
        <li><a href="#playlist" className="nav-link">Playlist</a></li>
        <li><a href="#add-music" className="nav-link">Add Music</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
