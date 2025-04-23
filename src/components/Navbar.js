import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Manjur Kanekal</h1>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="/Manjur_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;
