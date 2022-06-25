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
    buttons: [{ answer: "I understand", next: "", completed: false }],
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
      { answer: "Let", next: "6" },
      { answer: "moderate", next: "12" },
      { answer: "Difficult", next: "6" },
    ],
  },
  {
    id: "5",
    question:
      "Unfortunately, it seems we can not help you, thank you for using our service.",
    buttons: [{ answer: "okay", next: "", completed: false }],
  },
  {
    id: "6",
    question:
      "Are you pregnant, breastfeeding or planning to become pregnant within six months?",
    buttons: [
      { answer: "Yes", next: "7" },
      { answer: "No", next: "13" },
    ],
  },
  {
    id: "7",
    question:
      "Do you take any medicines regularly? If yes, fill in the ones in the box below",
    buttons: [{ answer: "Continued", next: "8" }],
    input: {
      required: true,
      placeholder: "write your answer",
    },
  },
  {
    id: "8",
    question: "Other diseases? If yes, fill in the ones in the box below",
    buttons: [{ answer: "Continued", next: "9" }],
    input: {
      required: true,
      placeholder: "write your answer",
    },
  },
  {
    id: "9",
    question:
      "Do you want to provide other medical information? If yes, fill in the box below",
    buttons: [{ answer: "Continued", next: "10" }],
    input: {
      required: true,
      placeholder: "write your answer",
    },
  },
  {
    id: "10",
    question:
      "Do you accept that we send text messages and emails to you when the doctor has made an assessment?",
    buttons: [{ answer: "yes, I accept", next: "11" }],
  },
  {
    id: "11",
    question:
      "The answers you have given show that you have acne that may need medical attention. Do you want a doctor to make an assessment of your case?",
    buttons: [
      {
        answer: "Yes thank you! I want a medical assessment",
        next: "",
        completed: true,
      },
      { answer: "No thanks! not right now.", next: "", completed: false },
    ],
  },
  {
    id: "12",
    question:
      "Are you pregnant, breastfeeding or planning to become pregnant within six months?",
    buttons: [
      { answer: "Yes", next: "7" },
      { answer: "No", next: "13" },
    ],
  },
  {
    id: "13",
    question:
      "Has the acne arisen or deteriorated rapidly with fever, general effects or large wounds?",
    buttons: [
      { answer: "Yes", next: "7" },
      { answer: "No", next: "14" },
    ],
  },
  {
    id: "14",
    question: "Mark the areas where you have acne",
    buttons: [{ answer: "Continued", next: "15" }],
    checkbox: {
      required: true,
      values: ["face", "Breast", "back"],
    },
  },
  {
    id: "15",
    question: "Does the rash itch on the chest?",
    buttons: [
      { answer: "Yes", next: "7" },
      { answer: "No", next: "16" },
    ],
  },
  {
    id: "16",
    question:
      "Do you have acne in any area other than the previous options? If yes, enter in text",
    buttons: [{ answer: "Continued", next: "17" }],
    input: {
      required: true,
      placeholder: "write your answer",
    },
  },
  {
    id: "17",
    question:
      "How many times have you been given antibiotics for your acne problems?",
    buttons: [
      { answer: "Never", next: "18" },
      { answer: "Once", next: "18" },
      { answer: "Two or more times", next: "52" },
    ],
  },
  {
    id: "18",
    question: "Choose the option that best describes your acne",
    buttons: [
      { answer: "Small blackheads without clear redness", next: "19" },
      { answer: "Pimples (less than 0.5 cm) with redness around", next: "19" },
      {
        answer:
          "Large pimples (over 0.5 cm) with severe tenderness and redness",
        next: "19",
      },
    ],
  },
  {
    id: "19",
    question: "How long have you had acne?",
    buttons: [{ answer: "Continued", next: "20" }],
    input: {
      required: true,
      placeholder: "write your answer",
    },
  },
  {
    id: "20",
    question: "Have you tried any prescription creams for your acne before?",
    buttons: [
      { answer: "Yes", next: "21" },
      { answer: "No", next: "32" },
    ],
  },
  {
    id: "21",
    question:
      "We need to know more about your experience with prescription acne cream. You will now have questions about this.",
    buttons: [{ answer: "Okay", next: "22" }],
  },
  {
    id: "22",
    question: "Have you tried Basiron?",
    buttons: [
      { answer: "Yes", next: "23" },
      { answer: "No", next: "24" },
    ],
  },
  {
    id: "23",
    question: "Did Basiron have a good effect on acne and skin?",
    buttons: [
      { answer: "Yes", next: "24" },
      { answer: "No", next: "49" },
    ],
  },
  {
    id: "24",
    question: "Have you tried Differin?",
    buttons: [
      { answer: "Yes", next: "25" },
      { answer: "No", next: "26" },
    ],
  },
  {
    id: "25",
    question: "Did Differin have a good effect on acne and the skin?",
    buttons: [
      { answer: "Yes", next: "26" },
      { answer: "No", next: "46" },
    ],
  },
  {
    id: "26",
    question: "Have you tried Finacea or Skinoren?",
    buttons: [
      { answer: "Yes", next: "27" },
      { answer: "No", next: "28" },
    ],
  },
  {
    id: "27",
    question: "Did Finacea/Skinoren have a good effect on acne and the skin?",
    buttons: [
      { answer: "Yes", next: "28" },
      { answer: "No", next: "43" },
    ],
  },
  {
    id: "28",
    question: "Have you tried Epiduo?",
    buttons: [
      { answer: "Yes", next: "29" },
      { answer: "No", next: "30" },
    ],
  },
  {
    id: "29",
    question: "Did Epiduo have a good effect on acne and the skin?",
    buttons: [
      { answer: "Yes", next: "30" },
      { answer: "No", next: "40" },
    ],
  },
  {
    id: "30",
    question: "Have you tried Duac or Acnatac?",
    buttons: [
      { answer: "Yes", next: "31" },
      { answer: "No", next: "32" },
    ],
  },
  {
    id: "31",
    question: "Did Duac/Acnatac have a good effect on acne and the skin?",
    buttons: [
      { answer: "Yes", next: "32" },
      { answer: "No", next: "36" },
    ],
  },
  {
    id: "32",
    question:
      "To make an assessment, we need to see your acne. Upload an overview image for each area that you have indicated that you have acne. We need a picture from 30 cm distance and one from 10 cm distance per area.",
    buttons: [{ answer: "Select image", next: "33" }],
    image: {
      required: true,
    },
  },
  {
    id: "33",
    question:
      "Are you allergic to any antibiotics or other medicines? If yes, enter the box below",
    buttons: [{ answer: "Continued", next: "34" }],
    input: {
      required: true,
      placeholder: "write your answer",
    },
  },
  {
    id: "34",
    question: "Have you or a relative had skin cancer?",
    buttons: [
      { answer: "Yes", next: "35" },
      { answer: "No", next: "35" },
    ],
  },
  {
    id: "35",
    question: "Do you have a chronic bowel disease?",
    buttons: [
      { answer: "Yes", next: "7" },
      { answer: "No", next: "7" },
    ],
  },
  {
    id: "36",
    question: "Did you use Duac / Acnatac regularly for 4-6 weeks?",
    buttons: [
      { answer: "Yes", next: "37" },
      { answer: "No", next: "39" },
    ],
  },
  {
    id: "37",
    question: "Was the skin irritated or worse by Duac / Acnatac?",
    buttons: [
      { answer: "Yes", next: "32" },
      { answer: "No", next: "38" },
    ],
  },
  {
    id: "38",
    question:
      "It can take up to 6 weeks before you see the results of acne treatment. If it still has not improved after that treatment time, you are welcome to contact us again.",
    buttons: [{ answer: "Okay", next: "", completed: false }],
  },
  {
    id: "39",
    question:
      "Did you stop because your skin became irritated or worse by Duac / Acnatac?",
    buttons: [
      { answer: "Yes", next: "32" },
      { answer: "No", next: "38" },
    ],
  },
  {
    id: "40",
    question: "Did you use Epiduo regularly for 4-6 weeks?",
    buttons: [
      { answer: "Yes", next: "41" },
      { answer: "No", next: "42" },
    ],
  },
  {
    id: "41",
    question: "Was the skin irritated or worse by Epiduo?",
    buttons: [
      { answer: "Yes", next: "30" },
      { answer: "No", next: "30" },
    ],
  },
  {
    id: "42",
    question:
      "Did you stop because the skin became irritated or worse by Epiduo?",
    buttons: [
      { answer: "Yes", next: "30" },
      { answer: "No", next: "38" },
    ],
  },
  {
    id: "43",
    question: "Did you use Finacea / Skinoren regularly for 4-6 weeks?",
    buttons: [
      { answer: "Yes", next: "44" },
      { answer: "No", next: "45" },
    ],
  },
  {
    id: "44",
    question: "The skin became irritated or worse by Finacea / Skinoren",
    buttons: [
      { answer: "Yes", next: "29" },
      { answer: "No", next: "28" },
    ],
  },
  {
    id: "45",
    question:
      "Did you stop because the skin became irritated or worse by Finacea / Skinoren?",
    buttons: [
      { answer: "Yes", next: "28" },
      { answer: "No", next: "38" },
    ],
  },
  {
    id: "46",
    question: "Did you use Differin regularly for 4-6 weeks?",
    buttons: [
      { answer: "Yes", next: "47" },
      { answer: "No", next: "48" },
    ],
  },
  {
    id: "47",
    question: "Was the skin irritated or worse by Differin?",
    buttons: [
      { answer: "Yes", next: "26" },
      { answer: "No", next: "26" },
    ],
  },
  {
    id: "48",
    question:
      "Did you stop because your skin became irritated or worse by Differin?",
    buttons: [
      { answer: "Yes", next: "26" },
      { answer: "No", next: "38" },
    ],
  },
  {
    id: "49",
    question: "Did you use Basiron regularly for 4-6 weeks?",
    buttons: [
      { answer: "Yes", next: "50" },
      { answer: "No", next: "51" },
    ],
  },
  {
    id: "50",
    question: "Was the skin irritated or worse by Basiron?",
    buttons: [
      { answer: "Yes", next: "24" },
      { answer: "No", next: "24" },
    ],
  },
  {
    id: "51",
    question:
      "Did you stop because your skin became irritated or worse by Basiron?",
    buttons: [
      { answer: "Yes", next: "24" },
      { answer: "No", next: "38" },
    ],
  },
  {
    id: "52",
    question:
      "You can not get antibiotics for your acne more than twice and we can therefore not help you with just that. Do you still want to get a doctor's evaluation and get a prescription cream?",
    buttons: [
      { answer: "Yes", next: "32" },
      { answer: "No", next: "53" },
    ],
  },
  {
    id: "53",
    question:
      "You have replied that you have used antibiotics two or more times and that you do not want a prescription cream. This means that unfortunately we can not help you! If you want more help, you can turn to a dermatologist.",
    buttons: [{ answer: "okay", next: "", completed: false }],
  },
];
