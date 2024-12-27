import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeaderTop from "./components/Header/HeaderTop";
import HomeGallery from "./components/HomeGallery/HomeGallery";
import About from "./components/about/about";
import Competences from "./components/Section/competences";
import Experience from "./components/experience/experience";
import Stats from "./components/countUp/countUp";
import Clients from "./components/clients/clients";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <HeaderTop />
      <Navbar />
      <Element name="home">
        <HomeGallery />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="service">
        <Competences />
      </Element>
      <Experience />
      <Stats />
      <Clients />
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
