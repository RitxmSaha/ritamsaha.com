import React, { useState } from 'react';
import './Sidebar.css';
import { FaArrowLeft } from 'react-icons/fa';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <button className="expand-button" onClick={handleExpandClick}>
      <FaArrowLeft className={`arrow-icon ${isExpanded ? 'rotate' : ''}`} />

      </button>
      {/* Other content can go here */}
    </div>
  );
}

export default Sidebar;
