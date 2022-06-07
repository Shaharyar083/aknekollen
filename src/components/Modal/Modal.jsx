import * as React from "react";
import "./modal.scss";

// components
import Form from "./Form";
import Survey from "./Survey";

// images
import cancel from "../../assets/images/cancel.svg";

const Modal = ({ close }) => {
  const [surveyCompleted, setSurveyCompleted] = React.useState(false);
  console.log("payload");
  return (
    <div className="modal-get-doctor">
      <div className="main-wrapper">
        <img src={cancel} alt="" className="cancel" onClick={close} />

        {surveyCompleted ? (
          <Form />
        ) : (
          <Survey
            modalClose={close}
            setSurveyCompleted={setSurveyCompleted}
            surveyResult={() => { }}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
