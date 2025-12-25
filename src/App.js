import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MatrixBackground from "./components/MatrixBackground";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CommentScroll from "./components/CommentScroll";

export default function App() {
  return (
    <div className="app-container">
      <MatrixBackground />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* هنا التعليقات تظهر مباشرة */}
        <CommentScroll speed={120} direction="left" pauseOnHover={true} />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
