import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <div className="footer_box">
          <div className="gg">
            <div className="footer_plocy">
              <div className="mar">Privacy Policy</div>
              <div className="mar"> Terms of purchase</div>
              <div className="mar">Contact Us</div>
            </div>
            <div className="footer_plocy1">About aknekollen.se</div>
          </div>

          <div className="ffff">
            <img src={logo} className="f_logo" />

            <div className="right_box">
              InnovDr AB ORGNR: 559059-3256 Copyright @ 2016- 2022
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
