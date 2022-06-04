import React from "react";
import "./aboutsection.scss";
import { Container } from "react-bootstrap";
import arrow from "../../assets/images/arrow.svg";
import girl from "../../assets/images/girl_pic.jpg";

const part1 = {
    mainheading: "Om aknekollen.se",
    text1:
        "Since 2016, 400,000 people have sought care from us and our checkpoints, which are exclusively aimed at diagnoses that work best online. The diagnoses are also those that the patient is often familiar with and therefore may suspect they have. In this way, the patient himself effectively seeks the right care.",
    text2:
        " During a visit to us, you answer a couple of questions about your health - the same questions that the doctor at a physical health center asks. The answers show if you are in need of care and if necessary the doctor gives advice and e-prescription.",
    text3:
        " You will receive an answer from a doctor via text message and email within 30 minutes.",
    flag: true,
    margin: "0px",
};
const part2 = {
    mainheading: "This is what the doctor says",
    text1:
        "More sebum is formed in the sebaceous glands during adolescence while increasing a special bacterium that also promotes acne. This makes the sebaceous glands more easily inflamed and you get acne rashes.",
    text2:
        "The fact that you get acne more easily on the face, chest and back is simply due to the fact that you have more sebaceous glands there. As I said, acne is common during adolescence, but that does not mean that it is such a natural part that the individual needs to go through several years with acne.",
    text3:
        "There is very good help today, strangely enough, acne is a very undertreated skin disease.",
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
                        <div className="d-flex flex-column mt-auto mb-auto p-4">
                            <div className="tex_box_style">Matilda Lundblad</div>
                            <div className="tex_box_style">SPECIALIST IN GENERAL MEDICINE</div>
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
            <div style={{ background: "#390020" }} className="mb-5">
                <Container className="mobile_direction">
                    <AboutReusable data={part1} />
                    <AboutReusable data={part2} />
                </Container>
            </div>
        </>
    );
};

export default AboutSection;
