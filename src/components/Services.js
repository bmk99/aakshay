// import React, { useEffect } from "react";
// import PureCounter from "@srexi/purecounterjs";
// import "./Home.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { useNavigate } from "react-router-dom";
// import Nav from "./Nav";
// import About from "./About";
// import Footer from "./Footer";

// function Services() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <section id="services" className="services">
//         <div className="services-container">
//           <div className="services-title">
//             <hr className="horizontal-line" />
//             <h1>SERVICES</h1>
//             <hr className="horizontal-line" />
//           </div>
//           <p>
//             Akeshya will serve as your consultant and development partner to
//             help you turn your idea into a reality.
//           </p>
//         </div>

//         <div className="service-container">
//           <div className="service-row">
//             <i className="bx bxl-dribbble"></i>
//             <h3>Design</h3>
//             <p>
//               Our web design services can assist you in reclaiming your
//               company's online image. Your business will flourish on the
//               Internet thanks to the combination of style and technology we
//               provide, as well as our experience.
//             </p>
//           </div>
//           <div className="service-row">
//             <i className="bx bx-file"></i>
//             <h3>Development</h3>
//             <p>
//               Our development team can construct platforms to help your business
//               thrive by creating powerful customized solutions tailored to your
//               particular requirements. Akeshya makes use of established and
//               effective web development tools.
//             </p>
//           </div>
//           <div className="service-row">
//             <i className="bx bx-world"></i>
//             <h3>Marketing</h3>
//             <p>
//               A beautiful website is the foundation of effective marketing. Our
//               customers achieve success where it counts—in the real world—by
//               combining our proven approach with our passion for improving
//               conversions and increasing ROI.
//             </p>
//           </div>
//           <div className="service-row">
//             <i className="bx bx-tachometer"></i>
//             <h3>Support</h3>
//             <p>
//               Since the beginning, we at Akeshya have specialized in website
//               maintenance. We recognize the significance of having your business
//               online 24 hours a day, seven days a week, and we've created a
//               system to ensure that we're always available.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="process">
//         <div className="process-title">
//           <hr className="horizontal-line" />
//           <h1>OUR PROCESS</h1>
//           <hr className="horizontal-line" />
//         </div>
//         <p className="process-text">
//           Over the years we’ve evolved a tested method for attaining achievement
//           for each one of our clients.
//         </p>
//         <div className="process-container">
//           <div className="process-row">
//             <h2>1. Planning</h2>
//             <p>
//               We help you turn all of your ideas into a digital product that
//               meets all of your requirements. We begin each project by
//               determining its scope and needs. This is done by collaborating
//               closely with you to ensure that we're all on the same page.
//             </p>
//           </div>
//           <div className="process-row">
//             <h2>2. Design</h2>
//             <p>
//               We build our websites carefully through a series of workshops,
//               wire-framing, and user experience (UX) sessions, resulting in a
//               site that reinforces trust, conveys important brand messaging, and
//               provides a return on innovation.
//             </p>
//           </div>
//           <div className="process-row">
//             <h2>3. Development</h2>
//             <p>
//               We provide extensive front-end and back-end development that
//               allows your idea to stand alone. Our in-house developers work
//               side-by-side with the artistic team to seek out natural
//               breakpoints inside the content and order practicality based on
//               acknowledged statistics.
//             </p>
//           </div>
//           <div className="process-row">
//             <h2>4. Marketing</h2>
//             <p>
//               We come up with ideas and campaigns to help your business prosper
//               online. Our campaigns and virtual approach have a verified tune
//               report of accomplishing brilliant results, gathering new leads and
//               site visitors in your website and assist them convert.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="features">
//         <div className="features-title">
//           <hr className="horizontal-line" />
//           <h1>OUR CORE FEATURES</h1>
//           <hr className="horizontal-line" />
//         </div>
//         <p className="features-text">
//           Akeshya is a forward-thinking and intelligent design firm that is
//           technically and creatively capable of transforming your brand into its
//           best digital self. Our approach to design and development results in
//           compelling, engaging branding and immersive digital experiences that
//           provide a value for money.
//         </p>
//         <div className="features-container">
//           <div className="features-box">
//             <i className="ri-window-line"></i>
//             <h4>
//               <a href="">Web design</a>
//             </h4>
//           </div>
//           <div className="features-box">
//             <i className="ri-code-box-line"></i>
//             <h4>
//               <a href="">Development</a>
//             </h4>
//           </div>
//           <div className="features-box">
//             <i className="ri-creative-commons-by-line"></i>
//             <h4>
//               <a href="">Branding</a>
//             </h4>
//           </div>
//           <div className="features-box">
//             <i className="ri-play-circle-line"></i>
//             <h4>
//               <a href="">Media buying</a>
//             </h4>
//           </div>
//           <div className="features-box">
//             <i className="ri-search-eye-line"></i>
//             <h4>
//               <a href="">Search engine</a>
//             </h4>
//           </div>
//           <div className="features-box">
//             <i className="ri-todo-line"></i>
//             <h4>
//               <a href="">Brand strategy</a>
//             </h4>
//           </div>
//           <div className="features-box">
//             <i className="ri-map-pin-line"></i>
//             <h4>
//               <a href="">Local search marketing</a>
//             </h4>
//           </div>
//           <div className="features-box">
//             <i className="ri-bar-chart-grouped-line"></i>
//             <h4>
//               <a href="">Lead Tracking & Management</a>
//             </h4>
//           </div>
//           <div className="features-box">
//             <i className="ri-contacts-book-line"></i>
//             <h4>
//               <a href="">Contact management</a>
//             </h4>
//           </div>
//           <div className="features-box">
//             <i className="ri-disc-line"></i>
//             <h4>
//               <a href="">Media management</a>
//             </h4>
//           </div>
//           <div className="features-box">
//             <i className="ri-calendar-event-line"></i>
//             <h4>
//               <a href="">Social scheduling</a>
//             </h4>
//           </div>
//           <div className="features-box">
//             <i className="ri-advertisement-fill"></i>
//             <h4>
//               <a href="">Ad retargeting</a>
//             </h4>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Services;
import React from "react";
import { useNavigate } from "react-router-dom";
import PureCounter from "@srexi/purecounterjs"; // Assuming this is used somewhere else in the codebase
import "./Home.css"; // Custom CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons

import Nav from "./Nav"; // Assuming these components are used in a higher-level component
import About from "./About";
import Footer from "./Footer";

function Services() {
  const navigate = useNavigate();

  return (
    <div>
      <section id="services" className="services">
          <div className="services-title">
            <hr className="horizontal-line" />
            <h1>SERVICES</h1>
            <hr className="horizontal-line" />
          </div>
          <p className="services-text">
            Akeshya will serve as your consultant and development partner to
            help you turn your idea into a reality.
          </p>

        <div className="service-container">
          <ServiceRow
            icon="bx bxl-dribbble"
            title="Design"
            description="Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience."
          />
          <ServiceRow
            icon="bx bx-file"
            title="Development"
            description="Our development team can construct platforms to help your business thrive by creating powerful customized solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools."
          />
          <ServiceRow
            icon="bx bx-world"
            title="Marketing"
            description="A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI."
          />
          <ServiceRow
            icon="bx bx-tachometer"
            title="Support"
            description="Since the beginning, we at Akeshya have specialized in website maintenance. We recognize the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available."
          />
        </div>
      </section>

      <ProcessSection />

      <FeaturesSection />
    </div>
  );
}

function ServiceRow({ icon, title, description }) {
  return (
    <div className="service-row">
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>help</p>

    </div>
  );
}

function ProcessSection() {
  return (
    <section className="process">
      <div className="process-title">
        <hr className="horizontal-line" />
        <h1>OUR PROCESS</h1>
        <hr className="horizontal-line" />
      </div>
      <p className="process-text">
        Over the years we’ve evolved a tested method for attaining achievement
        for each one of our clients.
      </p>
      <div className="process-container">
        <ProcessRow
          step="1. Planning"
          description="We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page."
        />
        <ProcessRow
          step="2. Design"
          description="We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation."
        />
        <ProcessRow
          step="3. Development"
          description="We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics."
        />
        <ProcessRow
          step="4. Marketing"
          description="We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert."
        />
      </div>
    </section>
  );
}

function ProcessRow({ step, description }) {
  return (
    <div className="process-row">
      <h2>{step}</h2>
      <p>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="features">
      <div className="features-title">
        <hr className="horizontal-line" />
        <h1>OUR CORE FEATURES</h1>
        <hr className="horizontal-line" />
      </div>
      <p className="features-text">
        Akeshya is a forward-thinking and intelligent design firm that is
        technically and creatively capable of transforming your brand into its
        best digital self. Our approach to design and development results in
        compelling, engaging branding and immersive digital experiences that
        provide a value for money.
      </p>
      <div className="features-container">
        <FeatureBox icon="ri-window-line" title="Web design" />
        <FeatureBox icon="ri-code-box-line" title="Development" />
        <FeatureBox icon="ri-creative-commons-by-line" title="Branding" />
        <FeatureBox icon="ri-play-circle-line" title="Media buying" />
        <FeatureBox icon="ri-search-eye-line" title="Search engine" />
        <FeatureBox icon="ri-todo-line" title="Brand strategy" />
        <FeatureBox icon="ri-map-pin-line" title="Local search marketing" />
        <FeatureBox icon="ri-bar-chart-grouped-line" title="Lead Tracking & Management" />
        <FeatureBox icon="ri-contacts-book-line" title="Contact management" />
        <FeatureBox icon="ri-disc-line" title="Media management" />
        <FeatureBox icon="ri-calendar-event-line" title="Social scheduling" />
        <FeatureBox icon="ri-advertisement-fill" title="Ad retargeting" />
      </div>
    </section>
  );
}

function FeatureBox({ icon, title }) {
  return (
    <div className="features-box">
      <i className={icon}></i>
      <h4>
        <a href="">{title}</a>
      </h4>
    </div>
  );
}

export default Services;
