import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Redux Toolkit</li>
            <li>Angular</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
        <div>
          <h3>Tools & Testing</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>Cypress</li>
            <li>Figma</li>
            <li>SCORM</li>
            <li>WCAG Accessibility</li>
          </ul>
        </div>
        <div>
          <h3>Backend & APIs</h3>
          <ul>
            <li>Node.js</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
            <li>WebSockets</li>
            <li>JWT Auth</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
