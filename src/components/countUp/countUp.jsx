import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "./CountUp.css";

const Stats = () => {
  const myRef = useRef();
  const [SectionIsVisible, setSectionIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setSectionIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(myRef.current);
  }, []);

  const statsData = [
    { value: 10, label: "Années d'Expériences" },
    { value: 350, label: "Cas Résolus" },
    { value: 18, label: "Domaines de spécialisation" },
    { value: 98, label: "Taux de réussite" },
    { value: 100, label: "Avis Clients" },
    { value: 100, label: "Réactivité" },
    { value: 4, label: "Langues Parlées" },
  ];

  return (
    <section className={`stats`} ref={myRef}>
      <div className={`stats-container ${SectionIsVisible ? "show" : ""}`}>
        {SectionIsVisible &&
          statsData.map((stat, index) => (
            <div className="stat-item" key={index}>
              <h2>
                <CountUp
                  end={stat.value}
                  duration={5}
                  suffix={index === 3 || index === 5 ? "%" : ""}
                />
              </h2>
              <p>{stat.label}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Stats;
