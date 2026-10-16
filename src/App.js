import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./london/navbar";
import Home from "./london/home";
import Sights from "./london/sightseeing";
import Packages from "./london/packages";
import Gallery from "./london/gallery";
import Ticket from "./london/ticket";
import About from "./london/about";
import Contact from "./london/contact";
import Footer from "./london/footer";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar appears on every page */}
      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Sights */}
        <Route path="/sights" element={<Sights />} />

        {/* Packages */}
        <Route path="/packages" element={<Packages />} />

        {/* Gallery */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Book Tickets */}
        <Route path="/ticket" element={<Ticket />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

          

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;