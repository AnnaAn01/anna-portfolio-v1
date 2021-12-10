import React from "react";
import { SidebarData } from "./SidebarData.js";
import { Link } from "react-router-dom";

function MobileMenuItems(props) {
  return (
    <div
      className={
        props.click ? "mobile-menu-items-link" : "unshow-mobile-menu-items"
      }
    >
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
  );
}

export default MobileMenuItems;
