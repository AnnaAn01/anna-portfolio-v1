import React from "react";
import { Link } from "react-router-dom";
import Photo from "../img/photoSketch.jpg";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData.js";
import * as MdIcons from "react-icons/md";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="side-menu">
        <ul className="side-menu-items">
          <Link to="/" className="photo-sketch">
            <img src={Photo} alt="Profile" className="photo-sketch" />
          </Link>
          <Link to="/" className="name-link photo-sketch">
            <div className="my-name">ANNA DEVELOPER</div>
            <div className="front-end">FRONT-END DEVELOPER</div>
          </Link>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {/*{item.icon}*/}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <div className="get-in-touch">GET IN TOUCH</div>
          <div className="sidebar-social-media-icons">
            <span>
              <a target="_blank" rel="noreferrer" href="https://gmail.com">
                <MdIcons.MdEmail className="sidebar-sns" />
              </a>
            </span>
            <span>
              <a target="_blank" rel="noreferrer" href="https://linkedin.com">
                <FaIcons.FaLinkedin className="sidebar-sns" />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AnnaAn01"
              >
                <FaIcons.FaGithubSquare className="sidebar-sns" />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/AnnaSoftwareDev"
              >
                <FaIcons.FaTwitterSquare className="sidebar-sns" />
              </a>
            </span>
            <span>
              <a target="_blank" rel="noreferrer" href="https://youtube.com">
                <FaIcons.FaYoutube className="sidebar-sns" />
              </a>
            </span>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
