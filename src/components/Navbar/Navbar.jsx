import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGavel } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-scroll";

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
          <a href="/">
            <FontAwesomeIcon icon={faGavel} /> CABINET ALOUANE
          </a>
        </div>
        <ul className="navbar-links">
          <li>
            <span>
              <Link to="home">Accueil</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="about">à propos</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="service">Nos Competences</Link>
            </span>
          </li>
          <li>
            <Link to="contact">
              <span>Contactez-Nous</span>
            </Link>
          </li>
        </ul>
        <span className="btn-rendez-vous">
          <Link to="contact">rendez-vous</Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
