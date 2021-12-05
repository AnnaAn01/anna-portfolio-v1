import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Photo from "../img/photoSketch.jpg";
import { SidebarData } from "./SidebarData.js";
import { SnsIcons } from "./SnsIcons";
import "./Sidebar.css";

function Sidebar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;

  useEffect(() => {
    const handleWindowSize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  return (
    <div className="sidebar">
      <div className="side-menu-sub">
        {/*Social media icons from here*/}
        <div className="sns-icons">
          {width <= breakpoint ? <SnsIcons /> : null}
        </div>
        {/*Social media icons until here*/}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
      <nav className="side-menu">
        <div className="name-and-photo">
          <Link to="/" className="photo-sketch">
            <img src={Photo} alt="Profile" className="photo-sketch" />
          </Link>

          <ul className="side-menu-items">
            <div className="name-link">
              <Link to="/" className="name-link">
                <span className="my-name">ANNA SOFTWAREDEV</span>
                <span className="front-end">FRONT-END DEVELOPER</span>
              </Link>
            </div>
            <div className="menu-items-link">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span className="title-span">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </div>
            <div className="get-in-touch">GET IN TOUCH</div>
            {/*Social media icons from here*/}
            <div>{width > breakpoint ? <SnsIcons /> : null}</div>
            {/*Social media icons until here*/}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
