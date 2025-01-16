import React from "react";
import ServiceCard from "./ServiceCard";
import { useSelector } from "react-redux";

const Competences = () => {
  const { services } = useSelector((state) => state.services);
  return (
    <>
      <main>
        <span className="subtitle">Nos Services</span>
        <h1 className="services-title">
          Une Gamme Complète de
          <span className="selection"> Services Juridiques</span>
        </h1>
        <div className="services-container">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Competences;
