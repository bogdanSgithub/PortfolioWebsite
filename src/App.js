import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="App bg-background text-firstText font-sans ">
      <Navbar />
      <main className="w-10/12 md:w-9/12 lg:w-3/5 mx-auto">
        <Hero />
        <hr className="my-4 border-t border-primary" />
        <About />
        <hr className="my-4 border-t border-primary" />
        <Projects />
        <hr className="my-4 border-t border-primary" />
        <Experience />
      </main>
    </div>
  );
}

export default App;
