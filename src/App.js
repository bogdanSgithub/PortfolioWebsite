import { useEffect } from "react";

import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    document.title = "Bogdan Feher";
  }, []);
  return (
    <div className="App bg-background text-firstText font-sans">
      <Navbar />
      <main className="w-10/12 md:w-9/12 lg:w-3/5 mx-auto">
        <section id="Hero">
          <Hero />
        </section>
        <hr className="my-4 border-t border-primary" />
        <section id="About">
          <About />
        </section>
        <hr className="my-4 border-t border-primary" />
        <section id="Projects">
          <Projects />
        </section>
        <hr className="my-4 border-t border-primary" />
        <section id="Career">
          <Career />
        </section>
        <hr className="my-4 border-t border-primary" />
        <section id="Contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// npm run build
// npm run deploy
