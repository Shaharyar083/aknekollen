import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
    return (
        <>
            <div className="footer_wrapper">
                <div className="footer_box">
                    <div className="gg">
                        <div>
                            <div className="footer_plocy">
                                <div>Privacy Policy</div>
                                <div> Terms of purchase</div>
                                <div>Contact Us</div>
                            </div>
                        </div>
                        <div className="footer_plocy1">About aknekollen.se</div>
                    </div>
                    <div className="ffff">
                        <div>
                            <img src={logo} className="f_logo" />
                        </div>
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
