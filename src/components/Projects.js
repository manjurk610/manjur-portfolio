import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <h3>MyChart Patient Portal</h3>
          <p><strong>Texas Health Resources – React, Angular, RxJS</strong></p>
          <p>Enhanced a clinical web portal interface for appointments, records, and secure messaging. Built reusable components and ensured accessibility.</p>
        </div>
        <div className="project-card">
          <h3>Crypto Wallet Dashboard</h3>
          <p><strong>Antier Solutions – React, WebSockets, Tailwind</strong></p>
          <p>Built real-time dashboards and wallet interfaces using WebSockets and TailwindCSS for blockchain apps.</p>
        </div>
        <div className="project-card">
          <h3>Digital Content Platform</h3>
          <p><strong>MPS Infotech – React, Redux, SCORM</strong></p>
          <p>Rebuilt a publishing system into a modular, interactive eLearning platform with React and Redux.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
