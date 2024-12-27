import "./experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-content">
          <span className="suptitle">Notre expérience</span>
          <h2>Maître Alouane Mohammed Avocate à Casablanca</h2>
          <p>
            Avec une expertise reconnue et une expérience significative acquise
            dans le domaine juridique,
            <span className="selection"> Maître Alouane Mohammed </span> excelle
            dans le conseil et le contentieux, au bénéfice tant de
            <span className="selection">entreprises que des particuliers.</span>
            Sa réactivité, sa rigueur et sa détermination, alliées à une passion
            et une conviction profondes, lui permettent de défendre avec
            efficacité les intérêts de ses clients. Maître Alouane Mohammed vous
            accueille dans son cabinet,{" "}
            <span className="selection">sur rendez-vous</span>, pour vous
            fournir des conseils avisés, vous assister et protéger vos droits.
          </p>
          <a className="btn appointment" href="">
            Rendez-vous
          </a>
        </div>
        <div className="experience-img">
          <img src="images/aboutus.JPG" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
