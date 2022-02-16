import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me">
      <h3 className="about-title">About Me</h3>
      <p className="about-text">
        Hi, i'm Anna, an aspiring front-end web developer.
      </p>
      <p className="about-text">I speak Armenian, English, Korean, Russian.</p>
      {/*Skills section */}
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-wrapper">
          <div className="skills-card">
            <h2 className="skills-name">Languages</h2>
            <p className="skills-list">HTML</p>
            <p className="skills-list">CSS</p>
            <p className="skills-list">Javascript</p>
          </div>

          <div className="skills-card">
            <h2 className="skills-name">Technologies</h2>
            <p className="skills-list">React</p>
            <p className="skills-list">Sass</p>
            <p className="skills-list">Styled Components</p>
          </div>

          <div className="skills-card">
            <h2 className="skills-name">Tools</h2>
            <p className="skills-list">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
