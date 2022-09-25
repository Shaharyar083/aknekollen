import React from "react";
import "../FooterMain/footer.css";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/2.png";
import { HashLink } from "react-router-hash-link";

const Footer = (props) => {
    const history = useHistory();
    return (
        <>
            <div>
                <footer className="footer_section">
                    <div className="container_footer">
                        <div className="row2">
                            <div className="right_logo">
                                <div className="ftr_logo">
                                    <img src={logo} alt="Logo" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="left">
                                <div className="ftr_links">
                                    <h6>EXPLORE</h6>
                                    <HashLink smooth to="/#123">
                                        <ul>
                                            <li
                                            //  onClick={props.executeScroll}
                                            >
                                                About Acnecheck.ae
                                            </li>
                                        </ul>
                                    </HashLink>
                                </div>
                            </div>
                            <div className="center">
                                <div className="ftr_links">
                                    <h6>LEGAL</h6>
                                    <ul>
                                        <li onClick={() => history.push("/privacypolicy")}>
                                            Privacy & Policy
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right2">
                                <div className="ftr_links">
                                    <h6>UPDATES</h6>
                                    <ul>
                                        <li onClick={() => history.push("/contactus")}>
                                            Contact Us
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <hr style={{ margin: "0px", color: "#b38b59" }} />
                <div className="footer_bottom">
                    <div className="footer_bottommain">
                        <p>A service by Raw Medical Services LLC</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
