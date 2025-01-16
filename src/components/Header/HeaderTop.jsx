import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <p className="first-info">
        <span>
          <a href="">
            <FontAwesomeIcon icon={faPhone} className="icon" /> 06 00 02 02 02{" "}
          </a>
        </span>
        <span>
          <a href="">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            contact@Alouane.ma
          </a>
        </span>
        <span>
          <a href="">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> casablanca - Maroc
          </a>
        </span>
      </p>
      <p className="second-info">
        <a href="">
          <FontAwesomeIcon icon={faFacebookF} className="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        </a>
      </p>
    </div>
  );
};
export default HeaderTop;
