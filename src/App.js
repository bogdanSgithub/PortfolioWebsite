import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <div className="App bg-background text-firstText">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
