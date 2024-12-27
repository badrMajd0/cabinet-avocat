import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Droit Commercial",
    description:
      "Offrant des conseils juridiques stratégiques pour les transactions commerciales.",
    image: "/images/1.jpeg",
  },
  {
    title: "Droit de la Consommation",
    description:
      "Protection des droits des consommateurs et des pratiques commerciales.",
    image: "/images/2.jpeg",
  },
  {
    title: "Droit Bancaire",
    description:
      "Conseils sur les questions réglementaires et les transactions financières.",
    image: "/images/3.jpeg",
  },
  {
    title: "Droit Pénal",
    description: "Défense et conseil dans les affaires pénales.",
    image: "/images/4.jpeg",
  },
  {
    title: "Droit de la Famille",
    description:
      "Gestion des affaires familiales, y compris le divorce et la garde des enfants.",
    image: "/images/5.jpeg",
  },
  {
    title: "Droit des Transports",
    description:
      "Conseils sur les questions juridiques liées au transport et à la logistique.",
    image: "/images/6.jpeg",
  },
  {
    title: "Droit Fiscal",
    description:
      "Expertise en matière de fiscalité pour les entreprises et les particuliers.",
    image: "/images/7.jpeg",
  },
  {
    title: "Droit du Travail",
    description: "Gestion des relations de travail et des litiges.",
    image: "/images/8.jpeg",
  },
  {
    title: "Droit Immobilier",
    description: "Conseils pour les transactions et litiges immobiliers.",
    image: "/images/9.jpeg",
  },
  {
    title: "Droit des Assurances",
    description:
      "Assistance dans les questions de couverture et de réclamations d'assurance.",
    image: "/images/10.jpeg",
  },
  {
    title: "Arbitrage",
    description: "Résolution des litiges par l'arbitrage.",
    image: "/images/11.jpeg",
  },
  {
    title: "Propriété Intellectuelle et Industrielle",
    description:
      "Protection des droits de propriété intellectuelle et industrielle.",
    image: "/images/12.jpeg",
  },
];

const Competences = () => {
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
