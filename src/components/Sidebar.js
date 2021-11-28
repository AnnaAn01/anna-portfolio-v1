import React, { useState } from "react";
import { Link } from "react-router-dom";
import Photo from "../img/photoSketch.jpg";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData.js";
import * as MdIcons from "react-icons/md";

import "./Sidebar.css";

function Sidebar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="sidebar">
      <nav className="side-menu">
        <div className="name-and-photo">
          <Link to="/" className="photo-sketch">
            <img src={Photo} alt="Profile" className="photo-sketch" />
          </Link>
          <div className="menu-icon" onClick={handleClick}></div>
          <ul className="side-menu-items">
            <div className="name-link">
              <Link to="/" className="name-link">
                <span className="my-name">ANNA SOFTWAREDEV</span>
                <span className="front-end">FRONT-END DEVELOPER</span>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;

// return (
//   <div className="sidebar">
//     <nav className="side-menu">
//       <Link to="/" className="photo-sketch">
//         <img src={Photo} alt="Profile" className="photo-sketch" />
//       </Link>
//       <div className="menu-icon" onClick={handleClick}>
//         <i className={click ? "fas fa-times" : "fas fa-bars"} />
//       </div>
//       <ul className="side-menu-items">
//         <div className="name-link">
//           <Link to="/" className="name-link">
//             <span className="my-name">ANNA DEVELOPER</span>
//             <span className="front-end">FRONT-END DEVELOPER</span>
//           </Link>
//         </div>
//         <div className="menu-item-links">
//           {SidebarData.map((item, index) => {
//             return (
//               <li key={index} className={item.cName}>
//                 <Link to={item.path}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//           <div className="get-in-touch">GET IN TOUCH</div>
//           <div className="sidebar-social-media-icons">
//             <span>
//               <a target="_blank" rel="noreferrer" href="https://gmail.com">
//                 <MdIcons.MdEmail className="sidebar-sns" />
//               </a>
//             </span>
//           </div>
//           <span>
//             <a target="_blank" rel="noreferrer" href="https://linkedin.com">
//               <FaIcons.FaLinkedin className="sidebar-sns" />
//             </a>
//           </span>
//           <span>
//             <a
//               target="_blank"
//               rel="noreferrer"
//               href="https://github.com/AnnaAn01"
//             >
//               <FaIcons.FaGithubSquare className="sidebar-sns" />
//             </a>
//           </span>
//           <span>
//             <a
//               target="_blank"
//               rel="noreferrer"
//               href="https://twitter.com/AnnaSoftwareDev"
//             >
//               <FaIcons.FaTwitterSquare className="sidebar-sns" />
//             </a>
//           </span>
//           <span>
//             <a target="_blank" rel="noreferrer" href="https://youtube.com">
//               <FaIcons.FaYoutube className="sidebar-sns" />
//             </a>
//           </span>
//         </div>
//       </ul>
//     </nav>
//   </div>
// );
// }
