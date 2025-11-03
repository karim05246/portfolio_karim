import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../image/logo.jpg"
export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar glass">
      <Link to="/" className="logo">
  <img src={logo} alt="Logo" className="logo-img" />
  <span className="logo-text">Karim Boraai</span>
</Link>


      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>À propos</Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projets</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
      </div>
    </nav>
  );
}
