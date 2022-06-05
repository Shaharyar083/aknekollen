import React from "react";
import "./form.scss";

const Form = () => {
  return (
    <div className="form-wrapper">
      <div className="wrapper">
        <h1>My details</h1>

        <ul>
          <li>Free visit</li>
        </ul>

        <input placeholder="YYYYMMDDXXXX" type="number" />

        <input placeholder="Email" type="email" />

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
          <span>Get a doctor's assessment</span>
        </button>
      </div>
    </div>
  );
};

export default Form;
