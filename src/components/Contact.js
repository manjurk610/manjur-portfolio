import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [showContactCard, setShowContactCard] = useState(false);

  const toggleContact = () => {
    setShowContactCard(!showContactCard);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <button onClick={toggleContact} className="contact-btn">
        {showContactCard ? 'Hide Contact' : 'Show Contact'}
      </button>

      {showContactCard && (
        <div className="contact-card">
          <p>Let's connect! Drop me a line anytime 📬</p>
          <a
            href="mailto:kanekalmanjur40@gmail.com"
            className="email-btn"
          >
            Send an Email
          </a>
        </div>
      )}
    </section>
  );
}

export default Contact;
