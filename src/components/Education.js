import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>

      <div className="edu-entry">
        <h3>University of North Texas</h3>
        <span className="degree">M.S. in Computer Science</span>
        <p>
          Coursework: Data Visualization, Big Data, DBMS, Software Development for AI, Computer Networks, Algorithms, Usability Testing
        </p>
      </div>

      <div className="edu-entry">
        <h3>Lovely Professional University</h3>
        <span className="degree">B.Tech in ECE</span>
        <p>
          Coursework: C, C++, Java, Operating Systems, DBMS, Data Structures & Algorithms
        </p>
      </div>
    </section>
  );
}

export default Education;
