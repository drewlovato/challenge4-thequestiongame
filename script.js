//create var for each question/answer asked
const start_btn = document.querySelector(".start_btn button");
const rules_box = document.querySelector(".rules_box");
const exit_btn = document.querySelector(".buttons .stop");
const begin_btn = document.querySelector(".buttons .begin");
const quiz_question_box = document.querySelector(".quiz_question_box");

//**FUNCTIONS SHOW BOXES**
//if start button clicked (visible state)=>
start_btn.onclick = () => {
  rules_box.classList.add("activeInfo"); //REVEALS RULES BOX
};

// if exit button clicked (hidden state)
exit_btn.onclick = () => {
  rules_box.classList.remove("activeInfo"); //HIDES RULES BOX
};

//if begin button clicked (hidden & then visible state)
begin_btn.onclick = () => {
  rules_box.classList.remove("activeInfo"); //HIDES RULES BOX
  quiz_question_box.classList.add("activeInfo"); //REVEALS QUESTION BOX
  showQuestions();
};

let question_count = 0;

//**FUNCTION SHOW QUESTIONS**
function showQuestions() {
  const que_text = document.querySelector(".quiz_question_box .options");
  let que_tag = "<span>" + questions[0].question + "</span>";
  que_text.innerHTML = que_tag;
}

//QUESTIONS
let questions = [
  {
    numb: 1,
    question: "What does URL stand for?",
    answer: "Uniform Resource Locator",
    options: [
      "Underate Relative Language",
      "Uniform Resource Locator",
      "Underwater Relocation Landing",
      "Universal Raptor Launcher 🦖",
    ],
  },
  {
    numb: 2,
    question: "What are the first 5 numbers of the fibonnaci sequence?",
    answer: "0,1,1,2,3",
    options: ["2,3,4,5,6", "0,1,1,2,3,5", "5,6,9,10,12", "0,1,1,2,3"],
  },
  {
    numb: 3,
    question: "What was Pablo Picasso's original last name?",
    answer: "Ruiz",
    options: ["Barbarra", "Ruiz", "Pingatelli", "Picasso"],
  },
  {
    numb: 4,
    question: "How much money does Amazon make in one day?",
    answer: "Aproximately $638 Million per day",
    options: [
      "Aproximately $10 Million per day",
      "Aproximately $68 Million per day",
      "Aproximately $320 Million per day",
      "Aproximately $638 Million per day",
    ],
  },
];

//logic for timer

//log high scores with initial for player

//reset and play again
