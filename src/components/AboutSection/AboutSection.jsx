import React from "react";
import "./aboutsection.scss";
import { Container } from "react-bootstrap";
import arrow from "../../assets/images/arrow.svg";
import girl from "../../assets/images/girl_pic.jpg";

const part1 = {
    mainheading: "About acnecheck.ae",
    text1:
        "We are a group of doctors that seek to make high quality medical attention available to the UAE, we exclusively focus on conditions that work best with online consulations. A patient suffering from Acne is often very familiar with that fact and more often than not the patient has tried to find answers online and there they will find us.",
    text2:
        "During a visit to acnecheck.ae, you will answer a couple of dynamic questions about your health - the same questions that the doctor at a physical health center would ask. The answers show if you are in need of medical care and if necessary our doctors gives advice and an e-prescription.",
    text3: "",
    flag: true,
    margin: "0px",
};
const part2 = {
    mainheading: "This is what the doctor says",
    text1:
        "During adolescence, the sebaceous glands produce more sebum while producing more of a particular bacteria that helps to cause acne. This makes the sebaceous glands more prone to inflammation, which results in acne outbreaks.",
    text2:
        "The reason why you develop acne more frequently on the face, chest, and back is simple: those areas contain more sebaceous glands. As I previously stated, acne is frequent during adolescence, but this does not imply that the person has to suffer from acne for a long period of time.",
    text3:
        "Despite the fact that there is excellent treatment available today, acne is a skin condition that gets very little attention from doctors.",
    flag: false,
    margin: "30px",
};

const AboutReusable = (props) => {
    return (
        <>
            <div className="main_container" style={{ padding: props.data.flag ? "80px 80px 80px 0px" : "80px 0px 80px 80px" }}>
                <h2 className="main_h2">{props.data.mainheading}</h2>
                <p className="main_para">{props.data.text1}</p>
                <p className="main_para">{props.data.text2}</p>
                <p className="main_para" style={{ marginTop: props.data.margin }}>{props.data.text3}</p>
                {props.data.flag && (
                    <div className="last_link">
                        READ MORE ABOUT US HERE
                        <img src={arrow} alt="loading..." className="img_style" />
                    </div>
                )}
                {!props.data.flag && (
                    <div className="picture_main">
                        <div className="image_box">
                            <img src={girl} alt="loading..." className="pic_main_style" />
                        </div>
                        <div className="d-flex flex-column mt-auto mb-auto ">
                            <div className="tex_box_style">Dr Mohammed Jawad</div>
                            <div className="tex_box_style">Family Medicine Specialist </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

const AboutSection = () => {
    return (
        <>
            <div style={{ background: "#390020" }}>
                <Container className="mobile_direction">
                    <AboutReusable data={part1} />
                    <AboutReusable data={part2} />
                </Container>
            </div>
        </>
    );
};

export default AboutSection;
