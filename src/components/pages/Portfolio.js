import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="project-wrapper">
        <h1 className="project-title-h1">My Projects</h1>
        <div className="project-card-wrapper">
          <div className="project-card">
            <h2 className="project-name-h2">Project 1</h2>
            <img className="project-img" src="" alt="" />
            <div className="project-teck-stack">HTML, CSS, JS</div>
            <p className="project-description">some description here 1</p>
            <div className="project-btn-wrapper">
              <button className="project-btn">Live</button>
              <button className="project-btn">Source</button>
            </div>
          </div>
          <div className="project-card">
            <h2 className="project-name-h2">Project 2</h2>
            <div className="project-teck-stack">HTML, CSS, JS</div>
            <p className="project-description">some description here 2</p>
            <div className="project-btn-wrapper">
              <button>Live</button>
              <button>Source</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
