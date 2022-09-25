import React, { useState, useEffect } from "react";
import "./FactsSection.scss";
import { Container } from "react-bootstrap";
import arrow1 from "../../assets/images/arrow1.svg";
import carton from "../../assets/images/carton.png";
import bg_stiker from "../../assets/images/bg-s.png";
import ils from "../../assets/images/ils.svg";
import img1 from "../../assets/images/111.png";
import img2 from "../../assets/images/333.png";
import img3 from "../../assets/images/15.png";
import arrowright from "../../assets/images/arrow-right.svg";

const FactsSection = () => {
    const [flag, setFlag] = useState(0);


    // useEffect(() => {
    //     let count = flag;
    //     console.log("re- built");
    //     setInterval(function () {
    //         console.log("ali raza", count, flag);
    //         setFlag(count);
    //         count++;
    //         if (count === 4) {
    //             count = 0;
    //         }
    //     }, 10000);
    // }, []);

    const handelStates = (st) => {
        setFlag(st);
    };

    return (
        <>
            <div style={{ background: "#b38b59" }}>
                <Container
                    className="mobile_direction_facts"
                    style={{ height: "50vh" }}
                >
                    <div
                        className="main_container_facts"
                        style={{
                            padding: "80px 80px 80px 0px",
                        }}
                    >
                        <h2 className="facts_main_h2_facts">Facts About Acne</h2>
                        {[
                            {
                                heading: "The only Way",
                                paragraph:
                                    "There is only one way you can get a pimple. when your sebum glands produce too much sebum in combination with dirt and dead skin cells, your pores or hair follicles can become blocked. This causes a build-up of bacteria, and a pimple breaks out in the area where the pore is blocked.",
                            },
                            {
                                heading: "Stick to it! ",
                                paragraph:
                                    "Impatience is one of the biggest contributors to failed Acne treatments. Often, if we do not see immediate results when treating acne, we give up and look for the next solution. Sometimes you can be very close to getting rid of your acne, but you stop...",
                            },
                            {
                                heading: "DAIRY ",
                                paragraph:
                                    "While not always the case, recent research has found that dairy products can trigger acne. This is the result of artificial hormones that can be found in dairy products. These hormones can offset your own hormonal balance, which is the likely cause of the acne breakout relating to dairy products.",
                            },
                            {
                                heading: "SUNSHINE",
                                paragraph:
                                    "Exposure to sunshine can help your skin deal with acne. 20 mins of sun exposure daily, helps the body to produce vitamin D, which contributes to skin cell growth, repair, and metabolism, helping the skin to recover from acne and acne scarring, don’t forget to use SPF and keep in mind that to much sun exposure can cause pigmentation.",
                            },
                        ].map((data, index) => {
                            return (
                                <>
                                    {index === flag && (
                                        <div key={index} className="mb-3">
                                            <h4 style={{ color: "white" }}>{data?.heading}</h4>
                                            <p className="facts_main_para">{data?.paragraph}</p>
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </div>
                    <div
                        className="main_container2_facts"
                        style={{
                            // padding: "80px 0px 80px 80px",
                        }}
                    >
                        <div
                            className="facts_bg_stiker_wrap_facts"
                            style={{ marginTop: "20px" }}
                        >
                            {flag === 0 && (
                                <img
                                    src={ils}
                                    className="arrow_rightff"
                                    style={{ height: "100%", width: "100%" }}
                                />
                            )}
                            {flag === 1 && (
                                <img
                                    src={img1}
                                    className="arrow_rightff"
                                    style={{ height: "100%", width: "100%" }}
                                />
                            )}
                            {flag === 2 && (
                                <img
                                    src={img2}
                                    className="arrow_rightff"
                                    style={{ height: "100%", width: "100%" }}
                                />
                            )}
                            {flag === 3 && (
                                <img
                                    src={img3}
                                    className="arrow_rightff"
                                    style={{ height: "85%", width: "75%" }}
                                />
                            )}
                        </div>
                    </div>
                </Container>
                <div
                    className="d-flex  justify-content-center"
                    style={{ paddingBottom: "15px" }}
                >
                    <div
                        onClick={() => handelStates(0)}
                        style={{
                            marginRight: "10px",
                            cursor: "pointer",
                            color: flag === 0 ? "#f4f0db" : "black",
                        }}
                    >
                        <li></li>
                    </div>
                    <div
                        onClick={() => handelStates(1)}
                        style={{
                            marginRight: "10px",
                            cursor: "pointer",
                            color: flag === 1 ? "#f4f0db" : "black",
                        }}
                    >
                        <li></li>
                    </div>
                    <div
                        onClick={() => handelStates(2)}
                        style={{
                            marginRight: "10px",
                            cursor: "pointer",
                            color: flag === 2 ? "#f4f0db" : "black",
                        }}
                    >
                        <li></li>
                    </div>
                    <div
                        onClick={() => handelStates(3)}
                        style={{
                            marginRight: "10px",
                            cursor: "pointer",
                            color: flag === 3 ? "#f4f0db" : "black",
                        }}
                    >
                        <li></li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FactsSection;
