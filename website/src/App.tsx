import React from 'react';
import './App.css';
import MainContent from './maincontent';
import Sidebar from './sidebar'; // Import the Sidebar component
import Navbar from './navbar';



function App() {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <MainContent />
    </div>
  );
}

export default App;
