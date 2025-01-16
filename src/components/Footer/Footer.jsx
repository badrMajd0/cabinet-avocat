import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>
          Chacun De Nos Clients Bénéficie D’un Service Personnalisé, Courtois Et
          Professionnel.
        </p>
        <Link to="/contact">
          <button className="appointment-button">
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Réserver Un
            Rendez-Vous
          </button>
        </Link>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h4>LE CABINET D'AVOCATS Alouane</h4>
          <p>
            Le Cabinet d'Avocats Alouane est une référence en matière de conseil
            juridique au Maroc, situé au cœur de Casablanca. Fondé par Maître
            Sayame Alouane, notre cabinet incarne l'excellence et l'engagement
            dans la pratique du droit.
          </p>
          <a href="/avocat-casablanca">Avocat Casablanca</a>
          <a href="/avocat-divorce">Avocat Divorce</a>
        </div>

        <div className="footer-section">
          <h4>CONTACTEZ-NOUS PAR</h4>
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" /> 05 22 24 79 32
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" /> 06 63 56 95 49
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            contact@Alouane.ma
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Mohammed
            V Office Center, Casablanca
          </p>
          <div className="social-icons">
            <a href="">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="icon"
              ></FontAwesomeIcon>
            </a>
            |
            <a href="">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="icon"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>NOS COMPÉTENCES</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Droit de la Famille
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" /> Droit Pénal
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Droit du Travail
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Droit Commercial
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Droit de la Consommation
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Droit Bancaire
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Droit des Transports
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Droit Immobilier
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Droit des Assurances
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Droit Civil
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Droit des Sociétés
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="icon" />
              Propriété Intellectuelle et Industrielle
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2024 Alouane.ma – Cabinet d'Avocats Alouane | Mentions
          Légales | Réalisation & SEO : Majd & MohamedAmine
        </p>
      </div>
    </footer>
  );
};

export default Footer;
