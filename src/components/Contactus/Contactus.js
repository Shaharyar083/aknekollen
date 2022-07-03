import React, { useState } from "react";
import "../Contactus/contactus.css";
import Navbar from "../Navbar/Navbar";
import FooterMain from "../FooterMain/Footer";
import CustomerAxiosInstance from "../CustomerAxiosInstance";
import swal from "sweetalert";

const Contactus = () => {
    const [contactState, setContactState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleOnChange = (e) => {
        setContactState({
            ...contactState,
            [e.target.name]: e.target.value,
        });
    };
    const handelSubmit = async (e) => {
        try {
            let res = await CustomerAxiosInstance.post(
                "/user/addquery",
                contactState
            );
            console.log("data==", res);
            if (res) {
                swal({
                    title: "",
                    text: res.data.message,
                    icon: "success",
                }).then(() => {
                    setContactState(null)
                });
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <>
            <Navbar flag={false} />
            <br />
            <div className="contactus_page">
                <div className="contactus_pagemain">
                    <div className="contactus_inputdiv">
                        <label for="full-name" className="contactus_label">
                            <b>Name</b>
                        </label>
                        <input
                            className="contactus_input"
                            type="text"
                            name="name"
                            value={contactState.name}
                            onChange={(e) => handleOnChange(e)}
                            placeholder="Name"
                        />
                        <label for="email" className="contactus_label">
                            <b>Email</b>
                        </label>
                        <input
                            className="contactus_input"
                            type="email"
                            name="email"
                            value={contactState.email}
                            onChange={(e) => handleOnChange(e)}
                            placeholder="Enter your Email"
                        />
                        <label for="full-name" className="contactus_label">
                            <b>Message</b>
                        </label>
                        <textarea
                            rows="5"
                            cols="50"
                            form="usrform"
                            className="contactus_txtarea"
                            placeholder="  What would you like to ask?"
                            name="message"
                            value={contactState.message}
                            onChange={(e) => handleOnChange(e)}
                        ></textarea>

                        <button className="contactus_btn" onClick={() => handelSubmit()}>
                            SIGNUP
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <FooterMain />
        </>
    );
};

export default Contactus;
