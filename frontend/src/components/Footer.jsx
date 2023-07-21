import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-DE.png";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="logo" width="150px" />
      </Link>

      <Link to="/contact" className="footer-contact">
        Nous trouver
      </Link>
      <Link to="/login" className="footer-contact">
        Connexion
      </Link>
    </footer>
  );
}

export default Footer;
