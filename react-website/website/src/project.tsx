// Project.js
import React from 'react';
import './project.css';

type ProjectProps = {
    title: string;
    imageUrl: string;
  };  
  function Project({ title, imageUrl }: ProjectProps) {
    return (
      <div className="project-container">
        <img src={imageUrl} alt={title} className="project-image" />
        <span className="project-title">{title}</span>
      </div>
    );
  }
  
  export default Project;
  