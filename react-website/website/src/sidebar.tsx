import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css';
import Project from './project'; 

import { FaArrowLeft } from 'react-icons/fa';
import headshot from './headshot.jpg';

const projects = [
  {
    title: "Project 1",
    imageUrl: headshot
  },
  {
    title: "Project 2",
    imageUrl: headshot
  },
  {
    title: "Project 3",
    imageUrl: headshot
  },
  {
    title: "Project 4",
    imageUrl: headshot
  }
];


function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const projectContainerRef = useRef<HTMLDivElement | null>(null);
  const isHoveredRef = useRef(false);
  let framesHovered = 0;

  const handleExpandClick = () => {
    const projectsWrapper = document.querySelector('.projects-wrapper') as HTMLElement;
  
    if (!isExpanded) {
      // First, check if projectsWrapper is not null, then fade out the projects
      if (projectsWrapper) {
        projectsWrapper.style.opacity = "0";
      }
  
      // After the fade-out duration, expand the sidebar
      setTimeout(() => {
        setIsExpanded(true);
      }, 500);
    } else {
      // Collapse the sidebar immediately
      setIsExpanded(false);
  
      // After the sidebar is collapsed, fade in the projects
      setTimeout(() => {
        if (projectsWrapper) {
          projectsWrapper.style.opacity = "1";
        }
      }, 1000); 
    }
  };
  

  useEffect(() => {
    let position = 0;
    let speed = 1; // Adjust the speed as you need

    const moveProjects = () => {
      if (isExpanded) {
        // If the sidebar is expanded, just schedule the next frame without updating the position
        animationFrameId = requestAnimationFrame(moveProjects);
        return;
      }
      if (!projectContainerRef.current) {
        return;
      }
      if(isHoveredRef.current) {
        if(framesHovered < 100) {
          framesHovered++;
        }
      } else {
        if(framesHovered > 0) {
          framesHovered--;
        }
      }
      speed = isHoveredRef.current ? (Math.max(1 - 0.01*framesHovered,0)) : Math.min(1 - 0.01*framesHovered, 1);  // If hovered, speed becomes 0
      position -= speed;
      projectContainerRef.current.style.top = `${position}px`;

      // Reset the position to create an infinite loop
      if (position <= (-projectContainerRef.current.clientHeight / 2)-25) {
        position = 0;
      }

      animationFrameId = requestAnimationFrame(moveProjects);
    };

    let animationFrameId: number = requestAnimationFrame(moveProjects);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isExpanded]);

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <button className="expand-button" onClick={handleExpandClick}>
        <FaArrowLeft className={`arrow-icon ${isExpanded ? 'rotate' : ''}`} />
      </button>
      <div className="projects-wrapper">
        <div 
          className="projects-container" 
          ref={projectContainerRef} 
          style={{ position: 'relative', top: 0 }}
          onMouseEnter={() => {
            framesHovered = 0;
            console.log("Mouse entered!"); 
            isHoveredRef.current = true;}}  // 2. Attach event handlers
          onMouseLeave={() => {
            console.log("Mouse left!"); 
            isHoveredRef.current = false;}}
        >
          {projects.map(project => (
            <Project key={project.title + "1"} title={project.title} imageUrl={project.imageUrl} />
          ))}
          {projects.map(project => (
            <Project key={project.title + "2"} title={project.title} imageUrl={project.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
