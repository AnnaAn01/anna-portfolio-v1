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
              <li className="cv-contacts-items">www.anna-dev.com</li>
              <li className="cv-contacts-items">arzumanyan.an@gmail.com</li>
              <li className="cv-contacts-items">
                linkedin.com/in/anna-arzumanyan/
              </li>
            </ul>
          </div>
        </div>

        {/*Main CV from here*/}

        <div className="cv-skills-container cv-sub-container">
          <div className="cv-skills-title cv-sub-title">Skills</div>
          <ul className="cv-skills-list cv-sub-list-ul">
            <li className="cv-skills-items cv-sub-items-li">
              Skills 1, Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dolor obcaecati nam commodi error, ea rem aspernatur esse
              nobis adipisci autem ad itaque temporibus nihil modi nostrum
              perspiciatis asperiores suscipit architecto?
            </li>
            <li className="cv-skills-items cv-sub-items-li">
              Skills 2, Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dolor obcaecati nam commodi error, ea rem aspernatur esse
              nobis adipisci autem ad itaque temporibus nihil modi nostrum
              perspiciatis asperiores suscipit architecto?
            </li>
            <li className="cv-skills-items cv-sub-items-li">
              Skills 3, Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dolor obcaecati nam commodi error, ea rem aspernatur esse
              nobis adipisci autem ad itaque temporibus nihil modi nostrum
              perspiciatis asperiores suscipit architecto?
            </li>
          </ul>
        </div>

        <div className="cv-education-container cv-sub-container">
          <div className="education-title cv-sub-title">Education</div>
          <ul className="education-list cv-sub-list-ul">
            <li className="education-items cv-sub-items-li">
              Education 1 - Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </li>
            <li className="education-items cv-sub-items-li">
              Education 2 - Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </li>
            <li className="education-items cv-sub-items-li">
              Education 3 - Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </li>
          </ul>
        </div>

        <div className="cv-experience-container cv-sub-container">
          <div className="experience-title cv-sub-title">Experience</div>
          <ul className="experience-list cv-sub-list-ul">
            <li className="experience-items cv-sub-items-li">
              Experience 1 - Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Asperiores necessitatibus, ut, doloribus maxime consectetur
              cupiditate, sunt dolore vitae earum enim harum tempore porro!
              Provident vero numquam esse unde fugit magni!
            </li>
            <li className="experience-items cv-sub-items-li">
              Experience 2 - Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Asperiores necessitatibus, ut, doloribus maxime consectetur
              cupiditate, sunt dolore vitae earum enim harum tempore porro!
              Provident vero numquam esse unde fugit magni!
            </li>
            <li className="experience-items cv-sub-items-li">
              Experience 3 - Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Asperiores necessitatibus, ut, doloribus maxime consectetur
              cupiditate, sunt dolore vitae earum enim harum tempore porro!
              Provident vero numquam esse unde fugit magni!
            </li>
          </ul>
        </div>

        <div className="cv-other-container cv-sub-container">
          <div className="other-title cv-sub-title">Other</div>
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
