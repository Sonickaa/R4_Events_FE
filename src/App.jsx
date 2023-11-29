import HoverColor from "./components/HoverColor";
import Footer from "./components/Footer";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HoverColor />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
