export const QUESTIONS = [
  {
    id: "1",
    question: "Are you 12 years or older?",
    buttons: [
      { answer: "Yes", next: "3" },
      { answer: "No", next: "2" },
    ],
  },
  {
    id: "2",
    question:
      "Unfortunately, we do not treat anyone under 12 years of age. We recommend that you go to your health center for further help.",
    buttons: [{ answer: "I understand", next: "" }],
  },
  {
    id: "3",
    question: "Do you suspect you have acne?",
    buttons: [
      { answer: "Yes", next: "4" },
      { answer: "No", next: "5" },
    ],
  },
  {
    id: "4",
    question: "How would you describe the severity of your acne?",
    buttons: [
      { answer: "Let", next: "" },
      { answer: "moderate", next: "" },
      { answer: "Difficult", next: "" },
    ],
  },
  {
    id: "5",
    question:
      "Unfortunately, it seems we can not help you, thank you for using our service.",
    buttons: [{ answer: "okay" }],
  },
];
