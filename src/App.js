import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";


function App() {
  return (
    <Router>
      <Nav />
      <Route path="/" element={<About />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" elemet={<Contact />}/>
    </Router>
  );
}

export default App;
