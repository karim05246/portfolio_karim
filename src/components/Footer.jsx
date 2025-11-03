import React from "react";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer glass">
      © {new Date().getFullYear()} Karim Boraai — Tous droits réservés.
      <div className="social-links" style={{ marginTop: "20px", display: "flex", gap: "15px", fontSize: "1.5rem" }}>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>

  );
}
