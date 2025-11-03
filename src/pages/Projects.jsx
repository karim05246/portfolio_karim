import React from "react";
import cafe from "../image/cafe.jpg"

export default function Projects() {
  const projects = [
    {
      title: "Portfolio React",
      desc: "Un site personnel avec fond Matrix et transitions fluides.",
      img: "/images/portfolio.png", // place your image in public/images
      link: "https://yourportfolio.com"
    },
    {
      title: "E-commerce UI",
      desc: "Interface moderne pour une boutique en ligne.",
      img: "/images/ecommerce.png",
      link: "https://github.com/yourusername/ecommerce-ui"
    },
    {
      title: "Chatbot AI",
      desc: "Assistant conversationnel intelligent pour les cafés.",
      img: {cafe},
      link: "https://yourchatbot.com"
    },
    {
      title: "E-commercile",
      desc: "Assistant conversationnel intelligent pour les cafés.",
      img: "/images/cafe.jpg",
      link: "https://yourchatbot.com"
    },
     {
      title: "web sie menu cafe",
      desc: "Page web pour un menu de cafe shop.",
      img: "/images/chatbot.png",
      link: "https://yourchatbot.com"
    },
  ];

  return (
    <section className="page">
      <h2 className="title">Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="card glass project-card">
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src={p.img} alt={p.title} className="project-img" />
              <div className="overlay">
                <span>Voir le projet</span>
              </div>
            </a>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
