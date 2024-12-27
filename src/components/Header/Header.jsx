import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-main">
        <h1>
          Offre complète de services juridiques pour entreprises et particuliers
        </h1>
        <p>
          Au cabinet d’avocats OMAR, nous valorisons l’individualité de chaque
          client et nous nous dédions à offrir un accompagnement sur mesure, en
          phase avec leurs exigences uniques. Notre palette de services
          juridiques est étendue et embrasse une multitude de spécialités, afin
          de satisfaire l’ensemble des besoins de notre clientèle.
        </p>
        <button className="btn-appointment">Prendre un Rendez-Vous</button>
        <button className="btn-phone">06 ++++++++</button>
      </div>
    </header>
  );
}

export default Header;
