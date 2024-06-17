import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Success from "./components/Success";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/success" element={<Success />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
