import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>

      <div className="job">
        <h3>Frontend Developer – Texas Health Resources</h3>
        <span className="duration">Feb 2025 – Present</span>
        <ul>
          <li>Built React-based modules for patient and clinical workflows</li>
          <li>Used RxJS and Angular for real-time dashboards</li>
          <li>Collaborated with backend teams to integrate FHIR APIs</li>
        </ul>
      </div>

      <div className="job">
        <h3>Frontend Developer – Antier Solutions</h3>
        <span className="duration">Jul 2020 – Dec 2022</span>
        <ul>
          <li>Built wallet dashboards and price charts</li>
          <li>Used D3.js, WebSockets, and Redux Toolkit</li>
          <li>Improved app responsiveness and state management</li>
        </ul>
      </div>

      <div className="job">
        <h3>React/UI Developer – MPS Infotech</h3>
        <span className="duration">Dec 2018 – Jun 2020</span>
        <ul>
          <li>Modernized a SCORM publishing app using React</li>
          <li>Developed reusable eLearning modules</li>
          <li>Connected frontend to backend via secure REST APIs</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
