import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-img">
          <img src="images/about.png" alt="" />
        </div>
        <div className="about-content">
          <span className="suptitle">à propos</span>
          <h2>
            Votre Cabinet d'Avocats Polyvalent au service des Particuliers et
            <span className="selection"> des Entreprises.</span>
          </h2>
          <p>
            Notre cabinet d’avocats , situé à Casablanca et dirigé par
            maitre X, avocat au barreau de Casablanca, est un
            conseiller juridique de confiance pour les entreprises et les
            particuliers. Spécialisé dans le conseil et le contentieux, il
            propose des services juridiques adaptés aux besoins spécifiques de
            ses clients. Le cabinet accompagne des organisations variées, des
            startups aux grandes entreprises publiques et privées, ainsi que des
            institutions financières, offrant une expertise personnalisée et
            approfondie.
          </p>
          <div className="about-progress">
            <div className="single-progress">
              <div className="progress-img">
                <img src="images/progress-1.png" alt="" />
              </div>
              <div className="progress-content">
                <h3>Professionnalisme </h3>
                <p>
                  Nous nous engageons à offrir un service professionnel de la
                  plus haute qualité à nos clients.
                </p>
              </div>
            </div>
            <div className="single-progress">
              <div className="progress-img">
                <img src="images/progress-2.png" alt="" />
              </div>

              <div className="progress-content">
                <h3>Intégrité </h3>
                <p>
                  Nous agissons avec intégrité, éthique et transparence dans
                  toutes nos interactions.
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper-singnature">
            <img src="images/aboutus.png" alt="" />
            <div className="signature-content">
              <h3> Mohammed</h3>
              <img src="images/signature.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
