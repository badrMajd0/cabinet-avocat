import { useEffect, useState } from "react";
import "./clients.css";

const Clients = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((pre) => (pre + 1) % clients.length);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNext = () => {
    setPosition((pre) => (pre + 1) % clients.length);
    setDirection("left");
  };

  const handlePrevious = () => {
    setPosition((pre) => (pre - 1 + clients.length) % clients.length);
    setDirection("right");
  };

  const clients = [
    {
      img: "/images/author.png",
      discription: `
    J'ai déjà eu affaire à l'avocate Mohammed dans une affaire liée à la famille. Franchement, c'est une avocate sérieuse, car elle a suivi le dossier avec sérieux et sans compromis, et c'est ce qui me plaît beaucoup. C'est une merveilleuse avocate dans tous les sens du terme.  Merci pour tout ce que vous nous avez apporté et nous apporterez, je vous souhaite du succès dans votre travail, toujours au top...`,
      name: "Sofia Mayer",
    },
    {
      img: "/images/author.png",
      discription: `
      Maitre Mohammed est une avocate brillante, professionnelle et intègre que je respecte beaucoup.
      Toujours à l’écoute, très efficiente , clairvoyante et très humaine. Elle est toujours de très bon conseil et très rigoureuse dans le traitement des dossiers. Je la recommande sans hésiter`,
      name: "Olivia Grosh",
    },
    {
      img: "/images/author.png",
      discription: `
      Chere Maître Mohammed
      Je voulais vous remercier chaleureusement pour votre travail et votre engagement dans mon affaire. Votre professionnalisme et votre expertise ont été précieux pour moi et j'apprécie vraiment votre dévouement.`,
      name: "Marco Williams",
    },
  ];
  return (
    <section id="testimonials" className="ptb">
      <div className="wrapper-testimonials">
        <span className="suptitle">Des Clients Satisfaits</span>
        <h2>Des Cas Réussis</h2>
        <div className="testimonials-carousel">
          <div className="client-stage">
            {clients.map(
              (client, index) =>
                index === position && (
                  <div className="client-item" key={index}>
                    <div className={`single-testimonials ${direction}`}>
                      <img src={client.img} alt="" />
                      <p>{client.discription}</p>
                      <div className="wrapper-author">
                        <h3>{client.name}</h3>
                        <p>Client</p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>

          <div className="client-nav">
            <button type="button" className="client-prev" onClick={handlePrevious}>
              ‹
            </button>
            <button type="button" className="client-next" onClick={handleNext}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
