import React from 'react';

import './navbar.css';
import LinkedIn from "./assets/linkedin.svg"


const MainContent: React.FC = () => {
    return (
        <nav className="navbar">
            <a className="navbar-name" href="/">ritam saha</a>
            <a className="navbar-logo-wrapper" href="https://www.linkedin.com/in/ritxm-saha/" target="_blank" rel="noopener noreferrer">
                <img className="navbar-logo" src={LinkedIn} alt="logo" />
            </a>
        </nav>
    );
}
  
  export default MainContent;