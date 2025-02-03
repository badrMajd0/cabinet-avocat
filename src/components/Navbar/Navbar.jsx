import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGavel } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <input id="check" type="checkbox" className="check-input" />
        <label htmlFor="check" className="check-btn">
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </label>
        <div className="navbar-logo">
          <a href="/cabinet-avocat/">
            <FontAwesomeIcon icon={faGavel} /> CABINET ALOUANE
          </a>
        </div>
        <ul className="navbar-links">
          <li>
            <span>
              <Link to="/cabinet-avocat/">Accueil</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/cabinet-avocat/service">Nos Competences</Link>
            </span>
          </li>
          <li>
            <Link to="/cabinet-avocat/contact">
              <span>Contactez-Nous</span>
            </Link>
          </li>
        </ul>
        <span className="btn-rendez-vous">
          <Link to="/cabinet-avocat/contact">rendez-vous</Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
