import React, { useState } from "react";
import "./form.scss";
import { addUserResponse } from "../Redux/responseReducer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import NumberFormat from "react-number-format";
import cancel from "../../assets/images/cancel.svg";
const Form = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [stateData, setStateData] = useState({
    name: "",
    email: "",
    phone: "+971",
    eId: "",
  });
  const [emailerror, setEmailError] = useState(false);

  const handelSubmit = async () => {
    let correctPhone =
      stateData?.phone?.slice(0, 4) + stateData?.phone?.slice(5, 14);
    console.log("data==", correctPhone);
    try {
      // let { data } = await axios.get("http://www.ip-api.com/json");
      // console.log("datra===", data);
      // if (data) {
      dispatch(
        addUserResponse({
          response: store.responseReducer.currentSurvey,
          stateData: { ...stateData, phone: correctPhone },
          trackingClientInfo: {},
        })
      );
      setStateData({
        name: "",
        email: "",
        phone: "",
        eId: "",
      });
      props.modalClose();
      // }
    } catch (error) {
      console.log("error===", error);
    }
  };

  const handelChange = (e, email) => {
    console.log("ali raza===", validateEmail(e.target.value));
    if (email) {
      setEmailError(!validateEmail(e.target.value));
    }
    setStateData({
      ...stateData,
      [e.target.name]: e.target.value,
    });
  };

  const handelChangeEid = (e) => {
    setStateData({
      ...stateData,
      ["eId"]: e.formattedValue,
    });
  };
  const handelChangePhone = (e) => {
    setStateData({
      ...stateData,
      ["phone"]: e.formattedValue,
    });
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim());
  };

  return (
    <>
      <div>
        <img
          src={cancel}
          alt=""
          className="cancel"
          onClick={() => props.modalClose()}
        />
        <div className="form-wrapper">
          <div className="wrapper">
            <h1>My details</h1>
            <input
              placeholder="Full Name"
              type="text"
              name="name"
              value={stateData.name}
              onChange={(e) => handelChange(e)}
            />
            <input
              className="mb-0"
              placeholder="Email"
              type="email"
              name="email"
              value={stateData.email}
              onChange={(e) => handelChange(e, "email")}
            />
            {emailerror && (
              <span style={{ color: "red" }}>Please Enter a valid email</span>
            )}
            <NumberFormat
              placeholder="Phone number"
              value={stateData.phone}
              format="+971##########"
              onValueChange={handelChangePhone}
              className="mt-3"
            />
            {/* <span style={{ color: "red" }}>Please Enter a valid phone</span> */}
            <NumberFormat
              placeholder="Emirates ID"
              // type="number"
              // name="eId"
              value={stateData.eId}
              format="####-####-#######-#"
              onValueChange={handelChangeEid}
              className="mt-3"
            />
            <button
              disabled={
                stateData.eId !== "" &&
                  stateData.email !== "" &&
                  stateData.name !== "" &&
                  stateData.phone !== ""
                  ? false
                  : true
              }
              onClick={() => handelSubmit()}
              style={{
                color: "white",
                background:
                  stateData.eId !== "" &&
                    stateData.email !== "" &&
                    stateData.name !== "" &&
                    stateData.phone !== ""
                    ? ""
                    : "grey",
              }}
            >
              Get a doctor's assessment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
