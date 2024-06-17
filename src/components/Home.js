import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import "./Home.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";
import Services from "./Services";
import Contact from "./Contact";

function Home() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/success");
  };

  return (
    <div>
      {/* <Nav /> */}

      <section id="home" className="home">
        <div className="container home-container">
          <div className="home-left">
            <h1>Grow your business with Akeshya</h1>
            <p>
              We are a team of talented website designers, developers & digital
              marketeers.
            </p>
            <button className="home-left-button">Get Started</button>
          </div>
          <div className="home-right">
            <img
              src="https://akeshya.com/assets/img/hero-img.png"
              alt="Profile"
              className="home-image"
            />
          </div>
        </div>
      </section>

      <section id="home">
        <div className="home-back-images">
          <img
            src="https://akeshya.com/assets/img/clients/client-1.png"
            alt="Client 1"
            className="home-image1"
          />
          <img
            src="https://akeshya.com/assets/img/clients/client-2.png"
            alt="Client 2"
            className="home-image1"
          />
          <img
            src="https://akeshya.com/assets/img/clients/client-3.png"
            alt="Client 3"
            className="home-image1"
          />
          <img
            src="https://akeshya.com/assets/img/clients/client-4.png"
            alt="Client 4"
            className="home-image1"
          />
          <img
            src="https://akeshya.com/assets/img/clients/client-5.png"
            alt="Client 5"
            className="home-image1"
          />
          <img
            src="https://akeshya.com/assets/img/clients/client-6.png"
            alt="Client 6"
            className="home-image1"
          />
        </div>
      </section>
      
    </div>
  );
}

export default Home;
