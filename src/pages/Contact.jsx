import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si"; // <-- import Gmail

export default function Contact() {
  const [success, setSuccess] = useState(false);

  // States pour les champs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Ici tu peux ajouter la logique pour envoyer le message (API ou EmailJS)

    // Popup succès
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);

    // Vider les champs
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="page">
      <h2 className="title">Contact</h2>
      <p className="subtitle">
        Tu veux collaborer ou me poser une question ? Envoie-moi un message 👇
      </p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Nom"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="btn white" type="button" onClick={handleSend}>
          Envoyer
        </button>
      </form>

      {success && (
        <div className="success-popup">
          ✅ Message envoyé avec succès !
        </div>
      )}

      <div
        className="social-links"
        style={{ marginTop: "20px", display: "flex", gap: "15px", fontSize: "1.5rem" }}
      >
        {/* Gmail */}
        <a href="mailto:medkarimelbourai@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail />
        </a>

        <a
          href="https://www.instagram.com/karim.bor3iii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61577105047376"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/karim05246"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-karim-elborai-52b49429a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
