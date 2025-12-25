import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../image/karim.jpeg";
import "./navbar.css";
import gsap from "gsap";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(".navbar", {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <nav className="navbar glass">
        {/* Logo */}
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            className="logo-img"
            onClick={() => setShowImage(true)}
            style={{ cursor: "pointer" }}
          />
          <span
            className="logo-text"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
             Med Karim Elbourai
          </span>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className={mobileMenuOpen ? "bar rotate1" : "bar"}></span>
          <span className={mobileMenuOpen ? "bar fade" : "bar"}></span>
          <span className={mobileMenuOpen ? "bar rotate2" : "bar"}></span>
        </div>

        {/* Nav links */}
        <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Accueil
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            À propos
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projets
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Overlay half transparent for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* FULL IMAGE OVERLAY */}
      {showImage && (
        <div
          className="logo-overlay"
          onClick={() => setShowImage(false)}
        >
          <img
            src={logo}
            alt="Full Logo"
          />
          <span className="close">✕</span>
        </div>
      )}
    </>
  );
}
