/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LiaWineBottleSolid } from "react-icons/lia";
import { SlPicture } from "react-icons/sl";
import { TfiHome, TfiAlignJustify } from "react-icons/tfi";

import { BsFileEarmarkRichtext } from "react-icons/bs";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/admin",
      name: "Homepage",
      icon: <TfiHome />,
    },
    {
      path: "/admin/articles",
      name: "Articles",
      icon: <BsFileEarmarkRichtext />,
    },

    {
      path: "/admin/vins",
      name: "Liste des vins",
      icon: <LiaWineBottleSolid />,
    },
    {
      path: "/admin/photos",
      name: "Gallery",
      icon: <SlPicture />,
    },
  ];
  return (
    <div className="sdb-container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="user-icon"
          />
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <TfiAlignJustify onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item) => (
          <NavLink to={item.path} className="link" activeclassName="active">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
