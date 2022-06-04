import * as React from "react";
import "./modal.scss";
import { QUESTIONS } from "./data";

// images
import cancel from "../../assets/images/cancel.svg";

let payload = [];

const Modal = ({ close }) => {
  const [state, setState] = React.useState(QUESTIONS[0]);

  const handleResult = (answer, nextQuestionID) => {
    payload = [...payload, { question: state.question, answer }];

    if (nextQuestionID === "") {
      payload = [];
      close();
      return;
    }
    setState(QUESTIONS.find((item) => item.id === nextQuestionID));
  };

  return (
    <div className="modal-get-doctor">
      <div className="main-wrapper">
        <img src={cancel} alt="" className="cancel" onClick={close} />

        <div className="content">
          <div className="question">{state.question}</div>

          {state.buttons.map((data, idx) => (
            <div className="answer" key={idx}>
              <div
                className="button"
                onClick={() => handleResult(data.answer, data.next)}
              >
                {data.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;

// const question = {
//   question: "Are you 12 years or older?",
//   buttons: [
//     {
//       answer: "Yes",
//       next: {
//         question: "Do you suspect you have acne?",
//         buttons: [
//           {
//             answer: "Yes",
//             next: {
//               question: "How would you describe the severity of your acne?",
//               buttons: [
//                 {
//                   answer: "Let",
//                   next: {
//                     question:
//                       "Are you pregnant, breastfeeding or planning to become pregnant within six months?",
//                     buttons: [
//                       {
//                         answer: "Yes",
//                         next: {
//                           question:
//                             "Do you take any medicines regularly? If yes, fill in the ones in the box below",
//                           buttons: [{ answer: "continued", next: "" }],
//                         },
//                       },
//                       { answer: "No", next: "" },
//                     ],
//                   },
//                 },
//                 { answer: "moderate", next: "" },
//                 { answer: "Difficult", next: "" },
//               ],
//             },
//           },
//           {
//             answer: "No",
//             next: {
//               question:
//                 "Unfortunately, it seems we can not help you, thank you for using our service.",
//               buttons: [{ answer: "okay" }],
//             },
//           },
//         ],
//       },
//     },
//     {
//       answer: "No",
//       next: {
//         question:
//           "Unfortunately, we do not treat anyone under 12 years of age. We recommend that you go to your health center for further help.",
//         buttons: [{ answer: "I understand" }],
//       },
//     },
//   ],
// };
