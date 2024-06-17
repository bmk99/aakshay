import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import "./Home.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";
import Services from "./Services";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/success");
  };

  return (
    <div>
      <section className="contact">
        <div id="contact" className="contact">
          <div className="contact-title">
            <hr className="horizontal-line" />
            <h1>CONTACT US</h1>
            <hr className="horizontal-line" />
          </div>
        </div>
        <div className="contact-container">
          <div className="contact-layout">
            <div className="contact-page">
              <h1>Akeshya</h1>
              <p>
                Designers, developers & marketeers capable of delivering
                solutions according to your needs.
              </p>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-info">
              <i className="ri-map-pin-line"></i>
              <p>
                26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                524004
              </p>
            </div>
            <div className="contact-info">
              <i className="ri-mail-send-line"></i>
              <p>info@akeshya.com</p>
            </div>
            <div className="contact-info">
              <i className="ri-phone-line"></i>
              <p>+91 94942 40922</p>
            </div>
          </div>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="contact-form-input"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="contact-form-input"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="contact-form-input"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  required
                  className="contact-form-textarea"
                ></textarea>
              </div>
              <button type="submit" className="contact-form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
