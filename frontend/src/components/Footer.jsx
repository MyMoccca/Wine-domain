import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-DE.png";
import logoAB from "../assets/logoAB.png";

function Footer() {
  return (
    <footer>
      <div className="images-footer">
        <Link to="/">
          <img src={logo} alt="logo Domaine Esclarmonde" width="150px" />
        </Link>
      </div>
      <img src={logoAB} alt="logo Agriculture Biologique Vin" width="80px" />
      <div className="footer-links">
        <Link to="/contact" className="footer-contact">
          Nous contacter
        </Link>
        <Link to="/mentionslegales" className="footer-contact">
          Mentions Legales
        </Link>
        <Link to="/login" className="footer-contact">
          Connexion
        </Link>
      </div>
      <div className="copyrights">
        <h5 className="footer-contact">© Copyrights 2023</h5>
        <h5 className="footer-contact">
          Created by{" "}
          <Link
            to="https://www.behance.net/martamiszke"
            target="_blank"
            className="footer-contact"
          >
            Marta MISZKE
          </Link>
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
