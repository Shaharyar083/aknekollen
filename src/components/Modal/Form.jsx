import React, { useState } from "react";
import "./form.scss";
import { addUserResponse } from "../Redux/responseReducer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
const Form = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [stateData, setStateData] = useState({
    name: "",
    email: "",
    phone: "",
    eId: "",
  });

  const handelSubmit = async () => {
    try {
      let { data } = await axios.get("http://ip-api.com/json/");
      console.log("datra===", data);
      if (data) {
        dispatch(
          addUserResponse({
            response: store.responseReducer.currentSurvey,
            stateData,
            trackingClientInfo: data,
          })
        );
        setStateData({
          name: "",
          email: "",
          phone: "",
          eId: "",
        });
      }
    } catch (error) {
      console.log("error===", error);
    }
  };

  const handelChange = (e) => {
    setStateData({
      ...stateData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="form-wrapper">
      <div className="wrapper">
        <h1>My details</h1>
        <input
          placeholder="Full Name"
          type="text"
          name="name"
          onChange={(e) => handelChange(e)}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={(e) => handelChange(e)}
        />
        <input
          placeholder="Phone number"
          type="number"
          name="phone"
          onChange={(e) => handelChange(e)}
        />
        <input
          placeholder="Emirates ID"
          type="number"
          name="eId"
          onChange={(e) => handelChange(e)}
        />
        <button>
          <span onClick={() => handelSubmit()}>Get a doctor's assessment</span>
        </button>
      </div>
    </div>
  );
};

export default Form;
