import { useState, useEffect } from "react";

import "./HomeGallery.css";
const HomeGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["/cabinet-avocat/images/slide4.jpg", "/cabinet-avocat/images/slide1.jpg"];

  const slideInterval = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`slider-image ${currentSlide === index ? "active" : ""}`}
        />
      ))}
      <div className="home-content">
        <div className="title-content">
          <h1> Bienvenue au Cabinet d'Avocats Alouane</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
