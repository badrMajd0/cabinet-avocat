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
    axios.get("/cabinet-avocat/services.json").then((res) => {
      dispatch(loadServices(res.data));
      window.scrollTo(0, 0);
    });
  }, [dispatch, location]);
  return (
    <>
      <HeaderTop />
      <Navbar />
      <Routes>
        <Route path="/cabinet-avocat" element={<Accueil />} />
        <Route path="/cabinet-avocat/service" element={<Services />} />
        <Route path="/cabinet-avocat/contact" element={<Contact />} />
        <Route path="/cabinet-avocat/:title" element={<DetailService />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
