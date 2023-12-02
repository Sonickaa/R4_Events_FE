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

function App() {
  return (
    <>
      <Navbar />
      <HoverColor />
      <Home />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/awareness" element={<Awareness />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
