import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/hero.css";
import logo from "../image/karim1.png";
 

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const bgRef = useRef(null);
  const photoRef = useRef(null); // 👈 جديد

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    gsap.set(heroRef.current, { perspective: 1200 });

    gsap.to(bgRef.current, {
      y: 100,
      rotationX: 5,
      rotationY: 5,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(titleRef.current, {
      z: 150,
      rotationY: 15,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(subtitleRef.current, {
      z: 100,
      rotationY: -10,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(buttonsRef.current, {
      z: 70,
      rotationY: 5,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // 🖼️ animation الصورة
    gsap.to(photoRef.current, {
      z: 120,
      rotationY: -12,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg" ref={bgRef}></div>

      <div className="hero-content">
        {/* TEXT */}
        <div className="hero-text">
          <span className="terminal-line">&gt; welcome()</span>

          <h1 className="hero-title" ref={titleRef}>
            Med Karim <span>Elbourai</span>
          </h1>

          <p className="hero-subtitle" ref={subtitleRef}>
            $ Développeur Full-Stack passionné par la création  
            <br />
            d’applications modernes et performantes.
          </p>

          <div className="hero-buttons" ref={buttonsRef}>
            <Link to="/projects" className="btn primary">
              &gt; view_projects()
            </Link>
            <Link to="/contact" className="btn outline">
              contact.init()
            </Link>
          </div>
        </div>

        {/* PHOTO */}
        <div className="hero-photo" ref={photoRef}>
          <img src={logo} alt="Karim Boraai" />
        </div>
      </div>
    </section>
  );
}
