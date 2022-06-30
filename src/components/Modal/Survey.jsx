import * as React from "react";
import "./survey.scss";
import { setCurrentServey } from "../Redux/responseReducer";

import { QUESTIONS } from "./data";
import { useDispatch, useSelector } from "react-redux";

let payload = [];

const Survey = ({ modalClose, setSurveyCompleted, surveyResult }) => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [animation, setAnimation] = React.useState(["push"]);
  const [state, setState] = React.useState(QUESTIONS[0]);
  const [input, setInput] = React.useState("");
  const [checkboxes, setCheckboxes] = React.useState([]);
  const [image, setImage] = React.useState({});

  const handleCheck = (value) => {
    if (checkboxes.includes(value)) {
      setCheckboxes(checkboxes.filter((val) => val !== value));
    } else {
      setCheckboxes([...checkboxes, value]);
    }
  };

  const handleImage = (e) => {
    setImage({
      file: e.target.files[0],
      src: URL.createObjectURL(e.target.files[0]),
    });
  };

  const imageUpload = async () => {
    let { file } = image;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "nextAuth");
    formData.append("cloud_name", "Sherry7");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/Sherry7/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const res2 = await res.json();

    return res2.url;
  };

  const handleSurveyData = async ({ answer, nextQuestionID, completeSurvey }) => {
    let selectedQuestion = state?.question;
    let selectedAnswer = "";
    let imageUrl = "";

    if (state?.input?.required) {
      selectedAnswer = input;
      setInput("");
    } else if (state?.checkbox?.required) {
      const chest = checkboxes.includes("Chest");
      selectedAnswer = checkboxes.join();
      setCheckboxes([]);

      if (!chest) {
        nextQuestionID = "16";
      }
    } else if (state?.image?.required) {
      imageUrl = await imageUpload();
      setImage({});
    } else {
      selectedAnswer = answer;
    }

    payload = [
      ...payload,
      { question: selectedQuestion, answer: selectedAnswer, image: imageUrl },
    ];

    if (nextQuestionID === "" && completeSurvey === true) {
      // survey completed
      setSurveyCompleted(true);
      console.log("result", payload);
      dispatch(setCurrentServey(payload));
    }

    if (nextQuestionID === "" && completeSurvey === false) {
      // survey exit
      modalClose();
      payload = [];
    }

    if (nextQuestionID !== "") {
      setState(QUESTIONS.find((item) => item.id === nextQuestionID));
      setAnimation([...animation, "push"]);
    }
  };

  return (
    <>
      {animation.map(
        (_, index) =>
          animation.length - 1 === index && (
            <div className={"survey-component fade-in-bottom"}>
              {Object.keys(image).length > 0 ? (
                <>
                  <img src={image?.src} alt="" className="image" />

                  <div className="answer">
                    <div
                      className="button"
                      onClick={() =>
                        handleSurveyData({
                          answer: state?.buttons[0]?.answer,
                          nextQuestionID: state?.buttons[0]?.next,
                          completeSurvey: state?.buttons[0]?.completed,
                        })
                      }
                    >
                      Upload a image
                    </div>
                  </div>

                  <UploadControl onChange={handleImage}>
                    <div className="answer">
                      <div className="button" style={{ padding: "10px 30px" }}>
                        Select another image
                      </div>
                    </div>
                  </UploadControl>
                </>
              ) : (
                <>
                  <div className="question">{state?.question}</div>

                  {state?.input?.required && (
                    <input
                      placeholder={state?.input?.placeholder}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="input"
                    />
                  )}

                  {state?.checkbox?.required && (
                    <div className="checkbox-wrap">
                      {state?.checkbox?.values.map((val, idx) => (
                        <div key={idx} className="checkbox-inline">
                          <input
                            id={val}
                            type="checkbox"
                            checked={checkboxes.includes(val) ? true : false}
                            onChange={() => handleCheck(val)}
                          />
                          <label htmlFor={val}>{val}</label>
                        </div>
                      ))}
                    </div>
                  )}

                  {!state?.image?.required &&
                    state?.buttons.map((data, idx) => (
                      <div className="answer" key={idx}>
                        <div
                          className="button"
                          onClick={() =>
                            handleSurveyData({
                              answer: data?.answer,
                              nextQuestionID: data?.next,
                              completeSurvey: data?.completed,
                            })
                          }
                        >
                          {data?.answer}
                        </div>
                      </div>
                    ))}

                  {state?.image?.required && (
                    <UploadControl onChange={handleImage}>
                      <div className="answer">
                        <div
                          className="button"
                          style={{ padding: "15px 30px" }}
                        >
                          {state?.buttons[0]?.answer}
                        </div>
                      </div>
                    </UploadControl>
                  )}
                </>
              )}
            </div>
          )
      )}
    </>
  );
};

export default Survey;

const UploadControl = ({ children, onChange, disabled }) => {
  return (
    <label htmlFor="contained-button-file">
      <input
        id="contained-button-file"
        accept="image/*"
        type="file"
        value=""
        onChange={disabled ? () => { } : onChange}
        disabled={disabled}
        style={{ display: "none" }}
      />
      {children}
    </label>
  );
};
