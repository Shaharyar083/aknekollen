import * as React from "react";
import "./survey.scss";

import { QUESTIONS } from "./data";

let payload = [];

const Survey = ({ modalClose, setSurveyCompleted, surveyResult }) => {
  const [animation, setAnimation] = React.useState(["push"]);
  const [state, setState] = React.useState(QUESTIONS[0]);
  const [input, setInput] = React.useState("");
  const [checkboxes, setCheckboxes] = React.useState([]);

  const handleCheck = (value) => {
    if (checkboxes.includes(value)) {
      setCheckboxes(checkboxes.filter((val) => val !== value));
    } else {
      setCheckboxes([...checkboxes, value]);
    }
  };

  const handleSurveyData = (answer, nextQuestionID, completeSurvey) => {
    let selectedQuestion = state?.question;
    let selectedAnswer;

    if (state?.input?.required) {
      selectedAnswer = input;
      setInput("");
    } else if (state?.checkbox?.required) {
      selectedAnswer = checkboxes.join();
      setCheckboxes([]);
    } else {
      selectedAnswer = answer;
    }

    payload = [
      ...payload,
      { question: selectedQuestion, answer: selectedAnswer },
    ];

    if (nextQuestionID === "" && completeSurvey === true) {
      // survey completed
      setSurveyCompleted(true);
      console.log("result", payload);
    }

    if (nextQuestionID === "" && completeSurvey === false) {
      // survey exit
      modalClose();
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

              {state?.buttons.map((data, idx) => (
                <div className="answer" key={idx}>
                  <div
                    className="button"
                    onClick={() =>
                      handleSurveyData(
                        data?.answer,
                        data?.next,
                        data?.completed
                      )
                    }
                  >
                    {data?.answer}
                  </div>
                </div>
              ))}
            </div>
          )
      )}
    </>
  );
};

export default Survey;
