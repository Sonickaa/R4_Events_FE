import HoverColor from "./components/HoverColor";
import Footer from "./components/Footer";
import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Awareness from "./components/Awareness";
import Events from "./components/Events";

function App() {
  /*  let slides = [
    "/Scansione 1.jpg",
    "/Scansione 2.jpg",
    "/Scansione 3.jpg",
    "/Scansione 5.jpg",
    "/Scansione 6.jpg",
    "/Scansione 7.jpg",
  ]; */
  return (
    <>
      <Navbar />

      {/*  <div className="w-[60%] m-auto pt-11">
        <CarouselWithContent slides={slides} />
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/events" element={<Events />} />
        <Route path="/awareness" element={<Awareness />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
