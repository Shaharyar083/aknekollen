import React from "react";
import "./heroSection.scss";

// images & icons
import { FiChevronDown } from "react-icons/fi";
import hero750 from "../../../assets/images/hero750px.jpg";
import hero2560 from "../../../assets/images/hero2.jpeg";
import hero1900px from "../../../assets/images/hero1900px.jpg";
import main from "../../../assets/images/main.png";
import { HashLink } from "react-router-hash-link";

const HeroSection = ({ openModal }) => {
  return (
    <section className="aknekollen-hero-section">
      <picture>
        {/* <source
          media="(max-width: 768px)"
          alt=""
          srcset={hero750}
          className="hero-section-image-768"
        /> */}
        <source
          media="(min-width: 769px)"
          alt=""
          srcset={hero2560}
          className="hero-section-image-min-769"
        />
        <img src={main} className="hero-section-image-desktop" alt="" />
      </picture>

      <div className="hero-content fade-in-bottom">
        <h1 className="h1">
          {/* Troublesome acne?
          <br /> */}
          We will help you with your acne within 3 hours.
        </h1>

        <button className="button1 outline-none" onClick={openModal}>
          <div className="button_background">
            <p className="text">Get a doctor's assessment here</p>
          </div>
          {/* <div className="button_shadow">&nbsp;</div> */}
        </button>

        {/* <div>
          <button className="button2 outline-none">
            <p className="text">RECIPE RENEWAL / VISIT 0KR</p>
          </button>
        </div> */}
      </div>

      <div className="scroll-down">
        <HashLink smooth to="/#1234">
          <FiChevronDown size={40} />
        </HashLink>
      </div>
    </section>
  );
};

export default HeroSection;
