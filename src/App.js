import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";
import TechStack from "./components/TechStack/TechStack.js";


function App() {
  return (
    <div className="App">
    <Navbar />
    <About />
    <TechStack />
       
    </div>
  );
}

export default App;
