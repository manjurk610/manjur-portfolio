import React, { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
  "React Developer",
  "Frontend Developer",
  "Next.js Enthusiast",
  "UI Engineer"
];

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[loopNum % roles.length];
    const updatedText = isDeleting
      ? current.substring(0, charIndex - 1)
      : current.substring(0, charIndex + 1);

    setText(updatedText);

    const delay = isDeleting ? 50 : 100;

    if (!isDeleting && updatedText === current) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    const timer = setTimeout(() => {
      setCharIndex(charIndex + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, charIndex, loopNum]);

  return (
    <header className="hero" id="home">
      <h1>Hi, I'm Manjur 👋</h1>
      <p className="typewriter">{text}</p>
      <div className="hero-buttons">
        <a href="mailto:kanekalmanjur40@gmail.com" className="btn">📧 Email</a>
        <a href="https://github.com/your-github" className="btn" target="_blank" rel="noopener noreferrer">🌐 GitHub</a>
      </div>
    </header>
  );
}

export default Hero;
