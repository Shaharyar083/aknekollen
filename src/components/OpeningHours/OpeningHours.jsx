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
        <Container className="list_section_section">
            <div className="first_part">
                <div className="main_text">OPENING HOURS AND PATIENT FEES</div>
                <div className="d-flex mt-4">
                    <div style={{ flex: 0.2 }}>
                        <div className="circle"></div>
                    </div>
                    <div className="text_style">
                        PATIENT FEE. The visit usually costs SEK 100, you only pay if you
                        receive medical treatment. No patient fee for you under the age of
                        20, over the age of 85 or in the event of a prescription renewal,
                        even for prescriptions that other care providers have printed out
                        for you in the past. Free pass applies.
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="circle"></div>
                    <div className="text_style">
                        OPENING HOURS. We accept visits around the clock. The doctors handle
                        visits 7-22, every day. You can therefore easily pick up your
                        prescription within the pharmacy's opening hours
                    </div>
                </div>
            </div>
            <div className="second_part">
                <div className="second_first_img"></div>
                <div className="middle_text">
                    {change ? (
                        <>
                            <p>
                                Thank you aknekollen.se for being there for people like us who
                                do not like to apply to the health center because we simply
                                think it is too embarrassing or, in my case, socially
                                difficult.Thank you aknekollen.se for being there for people
                                like us who do not like to apply to the health center because we
                                simply think it is too embarrassing or, in my case, socially
                                difficult.
                            </p>
                            <div>Stina, 19 years old</div>
                        </>
                    ) : (
                        <>
                            <p>
                                Awesome good service smooth and very professional, nice to get
                                help quickly!
                            </p>
                            <div>Stina, 19 years old</div>
                        </>
                    )}
                </div>
                <div className="second_first_img2"></div>
            </div>
        </Container>
    );
};

export default OpeningHours;
