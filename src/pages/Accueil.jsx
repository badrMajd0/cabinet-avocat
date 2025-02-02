import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Counter from "../components/countUp/countUp";

import HomeGallery from "../components/HomeGallery/HomeGallery";
import Competences from "../components/Section/competences";

const Accueil = () => {
  return (
    <>
      <HomeGallery />
      <About />
      <Competences />
      <Counter />
      <Contact />
    </>
  );
};

export default Accueil;
