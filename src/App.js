import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import Home from "./components/Home";
import "./fonts/WeimarMedium.ttf";
import "./fonts/HelveticaReg.ttf";
import Certificate from "./components/Certificate";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Certificate />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
