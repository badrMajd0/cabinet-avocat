import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeaderTop from "./components/Header/HeaderTop";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Services from "./pages/services";
import { loadServices } from "./components/redux/servicesSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import DetailService from "./components/Section/detailService";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    axios.get("/services.json").then((res) => {
      dispatch(loadServices(res.data));
      window.scrollTo(0, 0);
    });
  }, [dispatch, location]);
  return (
    <>
      <HeaderTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:title" element={<DetailService />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
