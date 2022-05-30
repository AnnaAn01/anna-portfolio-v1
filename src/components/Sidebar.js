import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Photo from "../img/photoSketch.jpg";
import Photo1 from "../img/photoSketch-1.jpg";
import { SnsIcons } from "./SnsIcons";
import "./Sidebar.css";
import MobileMenuItems from "./MobileMenuItems";
import "../components/mainStyles.css";

function Sidebar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!click);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;

  useEffect(() => {
    const handleWindowSize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  return (
    <div className="sidebar">
      <div className="side-menu-sub" onClick={handleClick}>
        {/*Social media icons from here*/}
        <div className="sns-icons">
          {width <= breakpoint ? <SnsIcons /> : null}
        </div>
        {/*Social media icons until here*/}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        {/*Mobile version menu items from here*/}
        <div
          className={click ? "extended-menu-mobile" : "unshow-extended-menu"}
        >
          {width <= breakpoint ? <MobileMenuItems click /> : null}
        </div>
        {/*Mobile version menu items until here*/}
      </div>
      <nav className="side-menu" onClick={closeMobileMenu}>
        <div className="name-and-photo">
          <Link to="/" className="photo-sketch">
            <img src={Photo} alt="Profile" className="photo-sketch" />
          </Link>

          <ul className="side-menu-items">
            <div className="name-link">
              <Link to="/" className="name-link">
                <span className="my-name">ANNA ARZUMANYAN</span>
                <span className="front-end">FRONT-END DEVELOPER</span>
              </Link>
            </div>
            {/*Desktop version menu items from here*/}
            <div className="menu-items-link">
              {width > breakpoint ? <MobileMenuItems click /> : null}
            </div>
            {/*Desktop version menu items until here*/}
            <div className="get-in-touch">GET IN TOUCH</div>
            {/*Social media icons from here*/}
            <div className="sns-icons">
              {width > breakpoint ? <SnsIcons /> : null}
            </div>
            {/*Social media icons until here*/}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
