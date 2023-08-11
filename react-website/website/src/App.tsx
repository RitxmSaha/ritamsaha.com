import React from 'react';
import './App.css';
import MainContent from './maincontent';
import Sidebar from './sidebar'; // Import the Sidebar component

function App() {
  return (
    <div>
      <nav className="navbar">
        <a href="/">ritam saha</a>
      </nav>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
