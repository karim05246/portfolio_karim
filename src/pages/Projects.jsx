 
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import cafe from "../image/cafe.jpg";
import ecommerce from "../image/ecommerce.jpg";
import chatbot from "../image/chatbot.avif";
import "./Projects.css"
 

 

export default function Projects() {
  

  const projects = [
    {
      title: "Modern Web Platform",
      desc: "A cutting-edge web platform built with React and modern design principles.",
      img: cafe,
      tags: ["React", "TypeScript", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      title: "Mobile App Design",
      desc: "Intuitive mobile application with seamless user experience and beautiful UI.",
      img: chatbot,
      tags: ["React Native", "UI/UX", "Mobile"],
      github: "#",
      live: "#",
    },
    {
      title: "E-commerce UI",
      desc: "Modern interface for an online store.",
      img: ecommerce,
      tags: ["React", "UI/UX", "E-commerce"],
      github: "#",
      live: "#",
    },
    {
      title: "Chatbot AI",
      desc: "Smart conversational assistant for café users.",
      img: chatbot,
      tags: ["AI", "Chatbot", "React"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="projects page">
      <h2 className="title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card glass">
            <div className="project-img-wrapper">
              <img src={p.img} alt={p.title} className="project-img" />
              <div className="overlay">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="icon">
                  <FaGithub />
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="icon">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
