import React, { useState, useEffect } from 'react';
import headshot from './headshot.jpg';
import './maincontent.css';
import AboutMe from './aboutme'; 

const MainContent: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const fullTexts = ["I'm a problem solver.", "I'm a risk taker.", "I'm a maker."];
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = fullTexts[textIndex];

    if (!isDeleting && currentText === currentFullText) {
      // Switch to deleting after a pause
      setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && currentText === "") {
      // Switch to the next text and start typing it
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % fullTexts.length);
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText((prevText) => prevText.substring(0, prevText.length - 1));
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }
    }, isDeleting ? 100 : 150); // Speed up if deleting

    // Cleanup function to clear our timeout
    return () => clearTimeout(timer);

  }, [currentText, isDeleting, textIndex]);

  return (
    <div className="main-section">
      <div className="content-container">
        <main className="main-content">
            <div className="text-content">
                <h1><span className="Name">Hi, I'm Ritam! </span></h1>
                <h2><span className="typing-effect">{currentText}</span></h2>
            </div>
            <img src={headshot} alt="Ritam's Headshot" className="headshot" />
        </main>
        <AboutMe />
      </div>
    </div>
    

  );
}

export default MainContent;
