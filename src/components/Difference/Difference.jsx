import React, { useState, useEffect } from "react";
import "./difference.css";
import { Container } from "react-bootstrap";
import ils from "../../assets/images/ils.svg";
import left from "../../assets/images/4.png";
import right from "../../assets/images/8.png";

const Difference = () => {
    useEffect(() => { }, []);

    return (
        <>
            <div
                style={{ background: "#f4f0db" }}
            // className="margin_setting"
            >
                <h2 className="text-center pt-3 ">
                    Difference between Bacterial and Fungal Acne
                </h2>
                <Container className="mobile_direction">
                    <div
                        className="main_container"
                        style={{
                            padding: "80px 80px 80px 0px",
                        }}
                    >
                        <h2 className="diff_main_h2">How to spot Bacterial Acne?</h2>
                        <h6>Commonly Affected Areas</h6>
                        <ul>
                            <li>Face</li>
                            <li>Chest</li>
                            <li>Back</li>
                            {/* <div style={{ height: "25px" }}></div> */}
                        </ul>
                        {/* <h6>How to spot Bacterial Acne?</h6>
                        <img src={left} alt="..Loading" style={{ width: "200px" }} /> */}
                        {/* <p className="diff_main_para">add related image here</p>
                        <h6>- Whiteheads or blackheads.</h6> */}
                        <h6>White or Black heads,variable in size.</h6>
                    </div>
                    <div
                        className="main_container2"
                        style={{
                            padding: "80px 0px 80px 80px",
                        }}
                    >
                        <div className="mobile_left_margin">
                            <h2 className="diff_main">How to spot Fungal Acne?</h2>
                            <h6>Commonly Affected Areas</h6>
                            <ul>
                                <li>Upper Arms</li>
                                <li>Back</li>
                                <li>Chest</li>
                                <li style={{ listStyle: "none" }}>* In rare cases the face</li>
                            </ul>
                            {/* <span style={{ marginLeft: "15px" }}>
                                * In rare cases the face
                            </span> */}
                            {/* <h6>How to spot Fungal acne?</h6>
                            <img src={right} alt="..Loading" style={{ width: "200px" }} /> */}
                            {/* <p className="diff_main_para">add related image here</p>
                            <h6>- Similar sized small red bumps</h6> */}
                            <h6>Similar sized small red bumps that are often itch. </h6>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Difference;
