import React from "react";
import { Link } from "react-router-dom";
import Photo from "../img/photoSketch.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Photo} alt="" className="photo-sketch" />
    </div>
  );
}

export default Sidebar;
