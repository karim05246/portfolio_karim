import React from "react";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="page">
      <h2 className="title">Contact</h2>
      <p className="subtitle">
        Tu veux collaborer ou me poser une question ? Envoie-moi un message 👇
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button className="btn white" type="button">Envoyer</button>
      </form>

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
    </section>
  );
}
