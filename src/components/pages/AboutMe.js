import React from "react";
import "./AboutMe.css";
// import BackgroundVideo from "../video/backgroundVideo.mp4";
// import BackgroundVideo2 from "../video/video2.mp4";
// import BackgroundVideo3 from "../video/video3.mp4";

function AboutMe() {
  return (
    <div className="about-me">
      {/*<video className="video-background" autoPlay muted loop>
        <source src={BackgroundVideo} type="video/mp4" />
  </video>*/}

      <h3 className="about-title">
        Hi, I'm Anna,
        <br /> an aspiring front-end developer.
      </h3>

      <p className="skills-title">
        <span className="brackets-span">{"< "}</span>
        Here's my current tech stack
        <span className="brackets-span">{" />"}</span>
      </p>
      <span className="aboutme__horizontal-line"></span>
      {/* <p className="about-text">I speak Armenian, English, Korean, Russian.</p>*/}
      {/*Skills section */}
      <div className="skills-container">
        {/*<h1 className="skills-title">Skills</h1>*/}
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
            <p className="skills-list">VSCode</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
