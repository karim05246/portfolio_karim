import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page home">
      <h1 className="title">Bienvenue dans mon univers 👨‍💻</h1>
      <p className="subtitle">
        Je suis <strong>Karim Boraai</strong>, développeur front-end passionné par le design moderne et les interfaces performantes.
      </p>
      <div className="buttons">
        <Link to="/projects" className="btn white">Voir mes projets</Link>
        <Link to="/contact" className="btn glass">Me contacter</Link>
      </div>
    </section>
    
  );
}
