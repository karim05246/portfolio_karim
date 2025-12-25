import Hero from "../components/Hero";
import MatrixBackground from "../components/MatrixBackground";
import About from "../pages/About"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"


export default function Home() {
  return (
    <>
      <MatrixBackground />
      <Hero />
      <About/>
      <Projects/>
      <Contact/>

      
    </>
  );
}
