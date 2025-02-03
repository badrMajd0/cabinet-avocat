import React, { useState } from "react";
import "./Section.css";
import { Link } from "react-router-dom";

function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      <Link to={`/cabinet-avocat/${title}`}>
        <img src={image} alt={title} className="service-image" />
      </Link>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
