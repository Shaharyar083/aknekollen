import React, { useState, useEffect } from "react";
import "./FactsSection.scss";
import { Container } from "react-bootstrap";
import arrow1 from "../../assets/images/arrow1.svg";
import carton from "../../assets/images/carton.png";
import bg_stiker from "../../assets/images/bg-s.png";
import arrowright from "../../assets/images/arrow-right.svg";

const FactsSection = () => {
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        setInterval(function () {
            setFlag(!flag);
        }, 50000);
    }, []);

    return (
        <>
            <div style={{ background: "#f6f2eb" }}>
                <Container className="mobile_direction">
                    <div
                        className="main_container"
                        style={{
                            padding: "80px 80px 80px 0px",
                        }}
                    >
                        <h2 className="facts_main_h2">Facts about acne</h2>
                        <p className="facts_main_para">
                            {flag
                                ? " Acne is not because your skin is dirty. But it can help to wash your skin with a gentle wash and finish with a moisturizing lotion tailored to your affected area."
                                : "Did you know that acne is caused by sebaceous glands in the skin becoming inflamed. Acne is also called pimples"}
                        </p>
                        <div className="facts_last_link">
                            READ MORE ABOUT ACNE HERE
                            <img src={arrow1} alt="loading..." className="facts_img_style" />
                        </div>
                        <div className="facts_carton_img_wrap">
                            <img src={carton} className="facts_carton_img" />
                        </div>
                    </div>
                    <div
                        className="main_container2"
                        style={{
                            padding: "80px 0px 80px 80px",
                        }}
                    >
                        <div className="facts_image_wrapper">
                            <div className="facts_bg_stiker">
                                <div className="facts_bg_stiker_wrap">
                                    <img src={bg_stiker} className="facts_stker_img_3" />
                                    <div className="facts_text_wrap_33">
                                        Do you need help or have a questions?
                                        <div>
                                            <img src={arrowright} className="arrow_rightff" style={{ height: "32px", width: "32px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default FactsSection;
