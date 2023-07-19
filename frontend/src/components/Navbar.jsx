/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">Esclarmonde</div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"} />
              <span className={navOpen ? "lineBottom spin" : "lineBottom"} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="nav-overlay"
        style={{
          top: navOpen ? "0" : "-100%",
          transitionDelay: navOpen ? "0s" : "0s",
        }}
      >
        <ul className="nav-links">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "70px",
                transitionDelay: navOpen ? "0.6s" : "0s",
              }}
            >
              Accueil
            </Link>
            <div className="nav-item-wrapper" />
          </li>
          <li className="nav-item">
            <Link
              to="/domaine"
              className="nav-link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "70px",
                transitionDelay: navOpen ? "0.6s" : "0s",
              }}
            >
              Notre domaine
            </Link>
            <div className="nav-item-wrapper" />
          </li>
          <li className="nav-item">
            <Link
              to="/terroir"
              className="nav-link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "70px",
                transitionDelay: navOpen ? "0.7s" : "0s",
              }}
            >
              Le terroir
            </Link>
            <div className="nav-item-wrapper" />
          </li>
          <li className="nav-item">
            <Link
              to="/vins"
              className="nav-link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "70px",
                transitionDelay: navOpen ? "0.5s" : "0s",
              }}
            >
              Nos vins
            </Link>
            <div className="nav-item-wrapper" />
          </li>
          <li className="nav-item">
            <Link
              to="/articles"
              className="nav-link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "70px",
                transitionDelay: navOpen ? "0.7s" : "0s",
              }}
            >
              Blog
            </Link>
            <div className="nav-item-wrapper" />
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "70px",
                transitionDelay: navOpen ? "0.8s" : "0s",
              }}
            >
              Nous trouver
            </Link>
            <div className="nav-item-wrapper" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
