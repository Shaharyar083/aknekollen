import React from "react";
import "./heroSection.scss";

// images & icons
import { FiChevronDown } from "react-icons/fi";
import hero750 from "../../../assets/images/hero750px.jpg";
import hero2560 from "../../../assets/images/hero2560px.jpg";
import hero1900px from "../../../assets/images/hero1900px.jpg";

const HeroSection = ({ openModal }) => {
  return (
    <section className="aknekollen-hero-section">
      <picture>
        <source
          media="(max-width: 768px)"
          alt=""
          srcset={hero750}
          className="hero-section-image-768"
        />
        <source
          media="(min-width: 769px)"
          alt=""
          srcset={hero2560}
          className="hero-section-image-min-769"
        />
        <img src={hero1900px} className="hero-section-image-desktop" alt="" />
      </picture>

      <div className="hero-content">
        <h1 className="h1">
          Troublesome acne?
          <br />
          We will help you within 30 minutes.{" "}
        </h1>

        <button className="button1" onClick={openModal}>
          <div className="button_background">
            <p className="text">Get a doctor's assessment here</p>
          </div>
          <div className="button_shadow">&nbsp;</div>
        </button>

        <div>
          <button className="button2">
            <p className="text">RECIPE RENEWAL / VISIT 0KR</p>
          </button>
        </div>
      </div>

      <div className="scroll-down">
        <FiChevronDown size={40} />
      </div>
    </section>
  );
};

export default HeroSection;
