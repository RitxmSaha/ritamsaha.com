import React, { useState, useEffect } from 'react';

type Props = {
  text: string;
  annotation: string;
};

let timeout: ReturnType<typeof setTimeout>;


const HoverAnnotation: React.FC<Props> = ({ text, annotation }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false); // This state controls the visibility of the tooltip

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (hovered) {
      setVisible(true);
    } else {
      timeout = setTimeout(() => {
        setVisible(false);
      }, 300); // Delay in ms equal to the transition time
    }
    return () => clearTimeout(timeout);
  }, [hovered]);


  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#856AB8',
        position: 'relative',
        display: 'inline-block',
        borderRadius: '5px',
        transform: 'translateY(-0px)',
        padding: '2px'
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          fontSize: '0.8em',
          transform: `translateX(-50%) translateY(${hovered ? "-20px" : "0px"})`,
          opacity: hovered ? 1 : 0,
          minWidth: '200px',
          visibility: visible ? 'visible' : 'hidden',  // Controlled by the visibility state
          color: 'white',
          backgroundColor: '#555',
          border: '3px solid gray',
          padding: '10px',
          borderRadius: '20px',
          boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',
          zIndex: 10,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          marginBottom: '5px',
        }}
      >
        {annotation}
      </div>
      {text}
    </span>
  );
};

export default HoverAnnotation;
