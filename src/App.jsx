import React from "react";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Reservation from "./pages/Reservation"
import PageNotFound from "./pages/PageNotFound"
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/reservation" element={<Reservation />} />
    <Route path="/*" element={<PageNotFound />} />
  </Routes>
  <Footer />
  </div>
);
}