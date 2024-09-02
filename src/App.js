import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <div className="App bg-background text-firstText font-sans ">
      <Navbar />
      <main className="w-10/12 md:w-9/12 lg:w-3/5 mx-auto">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
