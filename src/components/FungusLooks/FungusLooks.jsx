import React, { useEffect } from "react";
import "./funguslooks.css";
import { Container } from "react-bootstrap";
import black from "../../assets/images/black.png";
import backtarial from "../../assets/images/backtarial.png";
import fungal from "../../assets/images/fungal.png";
import cystic from "../../assets/images/cystic.png";
import white from "../../assets/images/white.png";

const FungusLooks = () => {
    useEffect(() => { }, []);

    //     Fungal acne             Black heads
    // Picture*                    Picture*

    // White heads           Cystic acne
    // Picture*                   Picture*

    // Etc
    return (
        <>
            <div
                style={{ background: "#fffaf1" }}
            // className="margin_setting"
            >
                <h2 className="text-center pt-3 ">
                    Different Types of Acne
                </h2>
                {/* <Container className="mobile_direction"> */}
                <div
                    className="main_container22"
                    style={{
                        padding: "80px 80px 80px 0px",
                    }}
                >
                    {/* <h2 className="diff_main_h2">How to spot Bacterial Acne?</h2> */}
                    {/* <div className="d-flex justify-content-around">
                            <h6>Fungal acne</h6>
                            <h6>White heads</h6>
                        </div> */}


                    <img src={fungal} alt="..Loading" style={{ width: "200px" }} className="picture_margin" />
                    <img src={white} alt="..Loading" style={{ width: "200px" }} className="picture_margin" />
                    <img src={black} alt="..Loading" style={{ width: "200px" }} className="picture_margin" />
                    <img src={backtarial} alt="..Loading" style={{ width: "200px" }} className="picture_margin" />
                    <img src={cystic} alt="..Loading" style={{ width: "200px" }} className="picture_margin" />


                    {/* <ul>
                            <li>Face</li>
                            <li>Chest</li>
                            <li>Back</li>
                            <div style={{ height: "25px" }}></div>
                        </ul> */}
                    {/* <h6>How to spot Bacterial Acne?</h6>*/}
                    {/* <p className="diff_main_para">add related image here</p>
                        <h6>- Whiteheads or blackheads.</h6>
                        <h6>- variable in size. </h6> */}
                </div>
                {/* <div
                        className="main_container22"
                        style={{
                            padding: "80px 0px 80px 80px",
                        }}
                    >
                         <h2 className="diff_main">How to spot Fungal acne?</h2> 
                         <div className="d-flex justify-content-around">
                            <h6>Black heads</h6>
                            <h6>Cystic acne</h6>
                        </div> 
                        <div className="d-flex justify-content-around">
                            <img src={black} alt="..Loading" style={{ width: "200px" }} />
                            <img src={cystic} alt="..Loading" style={{ width: "200px" }} />
                        </div>

                        <ul>
                                <li>Upper Arms</li>
                                <li>Back</li>
                                <li>Chest</li>
                                <li> * In rare cases the face</li>
                            </ul> 
                         <h6>How to spot Fungal acne?</h6>
                         <p className="diff_main_para">add related image here</p>
                            <h6>- Similar sized small red bumps</h6>
                            <h6>- that itch. </h6> 
                    </div> */}
                {/* </Container> */}
            </div>
        </>
    );
};

export default FungusLooks;
