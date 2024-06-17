import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";

import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "./Home.css";
import Footer from "./Footer";

function About() {
  //   const navigate = useNavigate();

  useEffect(() => {
    // Initialize PureCounter for Organic Reach and Watch Hours
    new PureCounter({
      selector: ".purecounter[data-purecounter-id='organic-reach']", // Selector targeting Organic Reach counter
    });

    new PureCounter({
      selector: ".purecounter[data-purecounter-id='watch-hours']", // Selector targeting Watch Hours counter
    });
  }, []);

  return (
    <div>
      <section id="about">
        <div className="about-title">
          <hr className="horizontal-line" />
          <h1>ABOUT</h1>
          <hr className="horizontal-line" />
        </div>
        <div className="about-container">
          <div className="about-left-side">
            <p>
              We are Akeshya, a firm that specializes in web design and
              marketing. We help transform ideas into reality with a team of
              passionate graphic designers, web developers, and seasoned
              marketing advisors.
            </p>
            <p>
              <i className="ri-check-double-line"></i> We started with a simple
              idea: do what is best for the client.
            </p>
            <p>
              <i className="ri-check-double-line"></i> Our methodical and
              individual approach to each project delivers the finest possible
              results for your media.
            </p>
            <p>
              <i className="ri-check-double-line"></i> Our day-to-day work is to
              solve your problems utilizing the most up-to-date, practical
              adaptive technology, and we have a lot of fun doing it.
            </p>
          </div>
          <div className="about-right-side">
            <p>
              We're professional, but we're also friendly, and we'll always pay
              attention to your concerns. We expect to work with innovative
              people that have an open mind and are dedicated to making every
              idea a reality. We want to hear from you if you're interested in
              SEO, have Web Development ideas, or require a graphic designer who
              can match your goals.
            </p>
            <button className="about-right-button">Learn More</button>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="section-about">
          <img
            src="https://akeshya.com/assets/img/counts-img.svg"
            alt="About Us"
            className="about-image"
          />
          <div className="count-box-container">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="3835039"
                data-purecounter-duration="2"
                className="purecounter"
                data-purecounter-id="organic-reach"
              ></span>
              <p>
                <strong>Organic Reach</strong> (Global)
              </p>
            </div>
            <div className="count-box">
              <i className="bi bi-clock"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="14081"
                data-purecounter-duration="2"
                className="purecounter"
                data-purecounter-id="watch-hours"
              ></span>
              <p>
                <strong>Watch Hours</strong> (Asia)
              </p>
            </div>
          </div>
          <div className="count-box-container">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="85"
                data-purecounter-duration="3"
                className="purecounter"
              >
                85
              </span>
              <p>
                <strong>campaigns</strong>
              </p>
            </div>
            <div className="count-box">
              <i className="bi bi-globe"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="17"
                data-purecounter-duration="1"
                className="purecounter"
              >
                17
              </span>
              <p>
                <strong>Excellent CTR %</strong> (Asia)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
