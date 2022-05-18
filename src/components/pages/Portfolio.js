import React from "react";
import "./Portfolio.css";
import projectImgDefault from "../image/project-image-default.jpg";
import projectGifDefault from "../image/project-gif-test.gif";
import projectvideoDefault from "../video/project-video-default.mp4";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="project-wrapper">
        <h1 className="project-title-h1">My Projects</h1>
        <div className="project-card-wrapper">
          <div className="project-card">
            <h2 className="project-name-h2">Project 1</h2>
            <img className="project-img" src={projectImgDefault} alt="" />
            <div className="project-tech-stack-wrapper">
              <p className="project-teck-stack">HTML</p>
              <p className="project-teck-stack">CSS</p>
              <p className="project-teck-stack">JavaScript</p>
            </div>
            <p className="project-description">
              some description here 1, some description here 1, some description
              here 1
            </p>
            <div className="project-btn-wrapper">
              <button className="project-btn">Live</button>
              <button className="project-btn">Source</button>
            </div>
          </div>
          <div className="project-card">
            <h2 className="project-name-h2">Project 2</h2>
            <img className="project-img" src={projectGifDefault} alt="" />

            {/*<video autoplay loop className="project-video" width="250">
              <source
                src={projectvideoDefault}
                type="video/mp4"
                autoplay
                loop
              />
            </video> */}
            <div className="project-tech-stack-wrapper">
              <p className="project-teck-stack">HTML</p>
              <p className="project-teck-stack">CSS</p>
              <p className="project-teck-stack">React JS</p>
            </div>
            <p className="project-description">
              some description here 2, some description here 2, some description
              here 2
            </p>
            <div className="project-btn-wrapper">
              <button className="project-btn">Live</button>
              <button className="project-btn">Source</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
