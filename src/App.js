import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";
import TechStack from "./components/TechStack/TechStack.js";
import Experience from "./components/Experience/Experience.js"
import ExperienceBox from "./components/Experience/ExperienceBox/ExperienceBox.js"
import Projects from "./components/Projects/Projects.js"

function App() {
  return (
    <div className="App">
    <Navbar />
    <About />
    <TechStack />
    <Experience />
    <Projects />
    </div>
  );
}

export default App;
