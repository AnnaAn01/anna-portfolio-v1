// import React from "react";
// import "./AboutMe.css";
// import {
//   SiJavascript,
//   SiCss3,
//   SiHtml5,
//   SiReact,
//   SiSass,
//   SiStyledcomponents,
//   SiGithub,
//   SiVisualstudiocode,
// } from "react-icons/si";
// import { DiCss3, DiSass } from "react-icons/di";
// import { RiReactjsLine } from "react-icons/ri";
// // import BackgroundImage from "../../components/image/bg-image-2.jpg";
// import BackgroundImage from "../../components/image/bg-mountain4.jpg";

// function AboutMe() {
//   return (
//     <div className="about-me">
//       <img className="bg-image" src={BackgroundImage} alt="bg" />
//       <div className="about-wrapper">
//         <div className="about-card">
//           <h3 className="about-title">Hi, I'm Anna, a front-end developer.</h3>
//         </div>
//         <div className="about-card">
//           <p className="skills-title">
//             {/*<span className="brackets-span">{"<  "}&#160; </span>*/}
//             &#60; Here's my current tech stack / &#62;
//             {/*<span className="brackets-span">&#160;{" />"}</span>*/}
//           </p>
//         </div>
//         <div className="skills-container">
//           {/*<h1 className="skills-title">Skills</h1>*/}
//           <div className="skills-wrapper">
//             <div className="skills-card">
//               <h2 className="skills-name">Languages</h2>
//               <p className="skills-list">
//                 <span className="tech-icons">
//                   <SiHtml5 />
//                 </span>
//                 HTML
//               </p>
//               <p className="skills-list">
//                 <span className="tech-icons">
//                   <SiCss3 />
//                 </span>
//                 CSS
//               </p>
//               <p className="skills-list">
//                 <span className="tech-icons">
//                   <SiJavascript />
//                 </span>
//                 Javascript
//               </p>
//             </div>

//             <div className="skills-card">
//               <h2 className="skills-name">Technologies</h2>
//               <p className="skills-list">
//                 <span className="tech-icons">
//                   <SiReact />
//                 </span>
//                 ReactJS
//               </p>
//               <p className="skills-list">
//                 <span className="tech-icons">
//                   <DiSass />
//                 </span>
//                 Sass
//               </p>
//               <p className="skills-list">
//                 <span className="tech-icons">
//                   <SiStyledcomponents />
//                 </span>
//                 Styled Components
//               </p>
//             </div>

//             <div className="skills-card">
//               <h2 className="skills-name">Tools</h2>
//               <p className="skills-list">
//                 <span className="tech-icons">
//                   <SiGithub />
//                 </span>
//                 GitHub
//               </p>
//               <p className="skills-list">
//                 <span className="tech-icons">
//                   <SiVisualstudiocode />
//                 </span>
//                 VSCode
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="aboutMeBtns">
//         <a href="/portfolio" className="projectsBtn">
//           My Projects
//         </a>
//         <a href="/contactme" className="contactMeBtn">
//           Contact me
//         </a>
//       </div>
//     </div>
//   );
// }

// export default AboutMe;

import React, { useEffect } from "react";
import "./AboutMe.css";
import Typewriter from "typewriter-effect";
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
// import BackgroundImage from "../../components/image/bg-image-2.jpg";
// import BackgroundImage from "../../components/image/bg-mountain1.jpg";
// import BackgroundImage from "../../components/image/glass-2.jpg";
import BackgroundImage from "../../components/image/glass-2.jpg";

function AboutMe() {
  // const [state] = useEffect({
  //   title: "Welcome",
  //   // title2: "I'm Anna Arzumanyan",
  //   // title3: "I am a front-end developer.",
  // });

  return (
    <div className="about-me">
      {/*<img className="bg-image" src={BackgroundImage} alt="bg" />*/}
      <img className="bg-image" src={BackgroundImage} alt="bg" />
      <div className="about-wrapper">
        <div className="about-card">
          {/*<h3 className="about-title">Hi, I'm Anna, a front-end developer.</h3>*/}
          <h3>
            <div className="about-title">Welcome</div>
            {/* <div className="title2">{state.title2}</div>
            <div className="title3">{state.title3}</div>*/}

            <div className="about-title">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  strings: [
                    "I'm Anna Arzumanyan.",
                    "I'm a front-end developer.",
                    "< Here's my current tech stack / >",
                  ],
                }}
              ></Typewriter>
            </div>
          </h3>
        </div>
        <div className="about-card">
          {/*<p className="skills-title">
            &#60; Here's my current tech stack / &#62;
          </p>*/}
        </div>
        <div className="skills-container">
          <div className="skills-wrapper">
            <div className="skills-card">
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
              <p className="skills-list">
                <span className="tech-icons">
                  <SiReact />
                </span>
                ReactJS
              </p>
            </div>

            <div className="skills-card">
              <p className="skills-list">
                <span className="tech-icons">
                  <SiGithub />
                </span>
                GitHub
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
          </div>
        </div>
      </div>
      <div className="aboutMeBtns">
        <a href="/portfolio" className="projectsBtn">
          My Projects
        </a>
        <a href="/contactme" className="contactMeBtn">
          Contact me
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
