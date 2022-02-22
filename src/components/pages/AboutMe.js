import React from "react";
import "./AboutMe.css";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiGithub,
  SiVisualstudiocode,
} from "react-icons/si";
import { DiCss3, DiSass } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import BackgroundImage from "../../components/image/bg-image-2.jpg";
// import BackgroundImage from "../../components/image/bg-image-1.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <img className="bg-image" src={BackgroundImage} alt="bg" />
      <div className="about-wrapper">
        <div className="about-card">
          <h3 className="about-title">
            Hi, I'm Anna,
            <br /> an aspiring front-end developer.
          </h3>
        </div>
        <div className="about-card">
          <p className="about-title skills-title">
            <span className="brackets-span">{"< "}</span>
            Here's my current tech stack
            <span className="brackets-span">{" />"}</span>
          </p>
        </div>
      </div>
      <div className="skills-container">
        {/*<h1 className="skills-title">Skills</h1>*/}
        <div className="skills-wrapper">
          <div className="skills-card">
            <h2 className="skills-name">Languages</h2>
            <p className="skills-list">
              <span className="tech-icons">
                <SiHtml5 />
              </span>
              HTML
            </p>
            <p className="skills-list">
              <span className="tech-icons">
                <SiCss3 />
              </span>
              CSS
            </p>
            <p className="skills-list">
              <span className="tech-icons">
                <SiJavascript />
              </span>
              Javascript
            </p>
          </div>

          <div className="skills-card">
            <h2 className="skills-name">Technologies</h2>
            <p className="skills-list">
              <span className="tech-icons">
                <SiReact />
              </span>
              ReactJS
            </p>
            <p className="skills-list">
              <span className="tech-icons">
                <DiSass />
              </span>
              Sass
            </p>
            <p className="skills-list">
              <span className="tech-icons">
                <SiStyledcomponents />
              </span>
              Styled Components
            </p>
          </div>

          <div className="skills-card">
            <h2 className="skills-name">Tools</h2>
            <p className="skills-list">
              <span className="tech-icons">
                <SiGithub />
              </span>
              GitHub
            </p>
            <p className="skills-list">
              <span className="tech-icons">
                <SiVisualstudiocode />
              </span>
              VSCode
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
