import * as React from "react";
import "./modal.scss";
import axios from "axios";

// components
import Form from "./Form";
import Survey from "./Survey";

const Modal = ({ close }) => {
  const [surveyCompleted, setSurveyCompleted] = React.useState(false);

  React.useEffect(() => {
    liveStats({ started: true });
  }, []);

  const liveStats = async (payload) => {
    await axios.post(
      "http://localhost:6002/analytics/updateanalytics",
      payload
    );
  };

  return (
    <div className="modal-get-doctor" style={{ paddingRight: "0px" }}>
      <div className="main-wrapper">
        {surveyCompleted ? (
          <Form />
        ) : (
          <Survey
            liveStats={liveStats}
            modalClose={close}
            setSurveyCompleted={setSurveyCompleted}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
