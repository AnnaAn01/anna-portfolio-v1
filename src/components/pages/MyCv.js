import React from "react";
import "./MyCv.css";

function MyCv() {
  return (
    <div className="cv-container">
      <div className="cv-wrapper">
        <div className="cv-name-container">
          <div className="cv-name-and-frontend">
            <h1 className="cv-my-name">Anna Softwaredev</h1>
            <h2 className="cv-frontend">Front-end developer</h2>
          </div>
          <div className="cv-contacts">
            <ul className="cv-contacts-ul">
              <li className="cv-contacts-items">Website</li>
              <li className="cv-contacts-items">Email</li>
              <li className="cv-contacts-items">Linkedin</li>
            </ul>
          </div>
        </div>

        {/*Main CV from here*/}
        <div className="cv-skills-container cv-sub-container">
          <div className="skills-title cv-sub-title">Skills title</div>
          <ul className="skills-list cv-sub-list-ul">
            <li className="skills-items cv-sub-items-li">Skills 1</li>
            <li className="skills-items cv-sub-items-li">Skills 2</li>
            <li className="skills-items cv-sub-items-li">Skills 3</li>
          </ul>
        </div>

        <div className="cv-education-container cv-sub-container">
          <div className="education-title cv-sub-title">Education title</div>
          <ul className="education-list cv-sub-list-ul">
            <li className="education-items cv-sub-items-li">Education 1</li>
            <li className="education-items cv-sub-items-li">Education 2</li>
            <li className="education-items cv-sub-items-li">Education 3</li>
          </ul>
        </div>

        <div className="cv-experience-container cv-sub-container">
          <div className="experience-title cv-sub-title">Experience title</div>
          <ul className="experience-list cv-sub-list-ul">
            <li className="experience-items cv-sub-items-li">Experience 1</li>
            <li className="experience-items cv-sub-items-li">Experience 2</li>
            <li className="experience-items cv-sub-items-li">Experience 3</li>
          </ul>
        </div>

        <div className="cv-other-container cv-sub-container">
          <div className="other-title cv-sub-title">Other title</div>
          <ul className="other-list cv-sub-list-ul">
            <li className="other-items cv-sub-items-li">Other 1</li>
            <li className="other-items cv-sub-items-li">Other 2</li>
            <li className="other-items cv-sub-items-li">Other 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyCv;
