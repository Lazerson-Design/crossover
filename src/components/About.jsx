import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <h1 className="about-title">About Our Agency</h1>
        <p className="about-description">
          We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps. Clever use of technology and lean processes enable us to work faster and smarter.
        </p>
        <div className="signature">
          <p className="signature-text">“Design is the silent ambassador of your brand.”</p>
        </div>
      </div>

      <div className="stats-wrapper">
        <div className="stats">
          <div className="stat">
            <div className="stat-icon">☆</div>
            <div className="stat-number">548</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat">
            <div className="stat-icon">⏱︎</div>
            <div className="stat-number">1465</div>
            <div className="stat-label">Working Hours</div>
          </div>
          <div className="stat">
            <div className="stat-icon">ꕤ</div>
            <div className="stat-number">612</div>
            <div className="stat-label">Positive Feedbacks</div>
          </div>
          <div className="stat">
            <div className="stat-icon">♡</div>
            <div className="stat-number">735</div>
            <div className="stat-label">Happy Clients</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
