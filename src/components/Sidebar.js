import React from "react";
import { Link } from "react-router-dom";
import Photo from "../img/photoSketch.jpg";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData.js";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <img src={Photo} alt="" className="photo-sketch" />
        <ul className="side-menu-items">
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
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
