import React, { useState } from "react";
import "./form.scss";
import { addUserResponse } from "../Redux/responseReducer"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
const Form = () => {
  const dispatch = useDispatch()
  const store = useSelector((store) => store)
  const [stateData, setStateData] = useState({
    email: ""
  })

  const handelSubmit = async () => {
    try {
      let { data } = await axios.get("http://ip-api.com/json/")
      console.log("datra===", data)
      if (data) {
        dispatch(addUserResponse({ response: store.responseReducer.currentSurvey, email: stateData.email, trackingClientInfo: data }))
      }
    } catch (error) {
      console.log("error===", error)
    }
  }

  const handelChange = (e) => {

    setStateData({
      ...stateData, [e.target.name]: e.target.value
    })
  }
  return (
    <div className="form-wrapper">
      <div className="wrapper">
        <h1>My details</h1>
        <ul>
          <li>Free visit</li>
        </ul>
        <input placeholder="YYYYMMDDXXXX" type="number" />
        <input placeholder="Email" type="email" name="email" onChange={(e) => handelChange(e)} />
        <input placeholder="Phone number" />
        <div className="term">
          <input type="checkbox" />
          <label className="label">
            I am 12-18 years old and do not have a BankID
          </label>
        </div>

        <a href="/" className="link">
          Läs mer om hur vi hanterar dina personuppgifter.
        </a>

        <button>
          <span onClick={() => handelSubmit()}>Get a doctor's assessment</span>
        </button>
      </div>
    </div>
  );
};

export default Form;
