import React from "react";
import LogoLoop from "../components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";


export default function About() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  return (
    <section className="page about-page">
      <h2 className="title">À propos de moi</h2>
      <p className="subtitle">
        Passionné par la technologie et le web, j’aime concevoir des interfaces élégantes et dynamiques.
        Mon objectif est de créer des expériences utilisateurs uniques et performantes.
      </p>

      <ul className="skills">
        <li>React / JavaScript</li>
        <li>Node.js / Express</li>
        <li>Tailwind CSS / UI Design</li>
        <li>Git / GitHub</li>
      </ul>

      <div className="tech-loop-container">
        <h3 className="tech-title">Technologies que j’utilise</h3>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={60}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0b0b0b"
          ariaLabel="Technologies favorites"
        />
      </div>
    </section>
  );
}
