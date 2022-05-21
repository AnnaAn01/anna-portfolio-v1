import React from "react";
import "./ContactMe.css";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

function ContactMe() {
  return (
    <div className="contact-me">
      <div className="text-section">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-paragraph">
          I am available for hire and open to any ideas of cooperation.
        </p>

        <ul className="contact-items">
          <li className="email-item">
            <div className="div-item-name">Email:</div>
            <a href="mailto: arzumanyan.an@gmail.com" className="items email">
              <MdIcons.MdEmail className="contact-icons" />
              arzumanyan.an@gmail.com
            </a>
          </li>
          <li className="linked-item">
            <div className="div-item-name"> LinkedIn:</div>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com"
              className="items linkedin"
            >
              <FaIcons.FaLinkedin className="contact-icons" />
              Anna Arzumanyan
            </a>
          </li>
          <li className="github-item">
            <div className="div-item-name"> GitHub:</div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AnnaAn01"
              className="items github"
            >
              <FaIcons.FaGithubSquare className="contact-icons" />
              AnnaAn01
            </a>
          </li>
          <li className="twitter-item">
            <div className="div-item-name"> Twitter:</div>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/AnnaSoftwareDev"
              className="items twitter"
            >
              <FaIcons.FaTwitterSquare className="contact-icons" />
              @AnnaSoftwareDev
            </a>
          </li>
          <li className="youtube-item">
            <div className="div-item-name"> YouTube:</div>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtube.com"
              className="items youtube"
            >
              <FaIcons.FaYoutube className="contact-icons" />
              Anna's youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactMe;

// <span className="social-media-span">
//         <a target="_blank" rel="noreferrer" href="https://linkedin.com">
//           <FaIcons.FaLinkedin className="sidebar-sns" />
//         </a>
