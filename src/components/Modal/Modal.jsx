import * as React from "react";
import "./modal.scss";
import CustomerAxiosInstance from "../CustomerAxiosInstance";

// components
import Form from "./Form";
import Survey from "./Survey";

const Modal = ({ close }) => {
  const [surveyCompleted, setSurveyCompleted] = React.useState(false);

  React.useEffect(() => {
    liveStats({ started: true });
  }, []);

  const liveStats = async (payload) => {
    await CustomerAxiosInstance.post(
      "/analytics/updateanalytics",
      payload
    );
  };

  return (
    <div className="modal-get-doctor">
      <div className="main-wrapper">
        {surveyCompleted ? (
          <Form modalClose={close} />
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
