import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Demo from "./Demo";

function Main() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.sectionId;
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Cleanup function to reset the scroll position if needed
    return () => {
      window.scrollTo(0, 0);
    };
  }, [location.state]);

  return (
    <div>
      <div id="home-section">
        <Home />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="services-section">
        <Services />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    
    </div>
  );
}

export default Main;
