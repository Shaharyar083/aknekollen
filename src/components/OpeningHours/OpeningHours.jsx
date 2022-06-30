import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./openinghours.scss";
const OpeningHours = () => {
    const [change, setChange] = useState(false);
    useEffect(() => {
        setInterval(function () {
            setChange(!change);
        }, 5000);
    }, []);
    return (
        <div style={{ background: "#f6f2eb" }}>
            <Container className="list_section_section">
                <div className="first_part">
                    <div className="main_text">OPENING HOURS AND PATIENT FEES</div>
                    <div className="d-flex mt-4">
                        <div style={{ flex: 0.2 }}>
                            <div className="circle"></div>
                        </div>
                        <div className="text_style">
                            PATIENT FEE. This doctors assesments is free of charge for all UAE
                            citizens & residents to be eligible for the consultation you need
                            to have an Emirates ID
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <div className="circle"></div>
                        <div className="text_style">
                            OPENING HOURS. This service is available 24/7, the doctors handles
                            your online visits from 7 am - 8 pm. Response time within 18 hours
                            from completion of the online consultation
                        </div>
                    </div>
                </div>
                <div className="second_part">
                    <div className="second_first_img"></div>
                    <div className="middle_text">
                        {/* {change ? (
                            <> */}
                        <p>
                            I love acnecheck.ae, It's always there and saves me both time
                            and money when I'm dealing with breakouts, I've been too
                            embarrassed to seek medical attention for my acne until i
                            found acnecheck.
                        </p>
                        <div>Samar, 21 years old.</div>
                        {/* </>
                        ) : (
                            <>
                                <p>
                                    Awesome good service smooth and very professional, nice to get
                                    help quickly!
                                </p>
                                <div>Stina, 19 years old</div>
                            </>
                        )} */}
                    </div>
                    <div className="second_first_img2"></div>
                </div>
            </Container>
        </div>
    );
};

export default OpeningHours;
