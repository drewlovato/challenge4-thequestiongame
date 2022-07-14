//create var for each question/answer asked
const start_btn = document.querySelector(".start_btn button");
const rules_box = document.querySelector(".rules_box");
const exit_btn = document.querySelector(".buttons .exit_btn");
const begin_btn = rules_box.querySelector(".buttons .begin");
const nxt_btn = document.querySelector(".question_box_footer .nxt_btn");
const finish_btn = document.querySelector(".buttons .finish_btn");
const question_box = document.querySelector(".question_box");
const result_box = document.querySelector(".result_box");

//**TIMER FUNCTIONS**
// selects element by class
var timeEl = document.querySelector(".time");

// selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Remaining: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      //   // Calls function to create and append image
      //   sendMessage();
    }
  }, 1000);
}

setTime();

//**FUNCTIONS SHOW BOXES**
//if start button clicked (visible state)=>
start_btn.onclick = () => {
  rules_box.classList.add("activeInfo"); //REVEALS RULES BOX
};

exit_btn.onclick = () => {
  rules_box.classList.remove("activeInfo"); //REMOVES RULES BOX
  console.log("linked");
};

begin_btn.onclick = () => {
  rules_box.classList.remove("activeInfo"); //REMOVES RULES BOX
  question_box.classList.add("activeInfo"); //REVEALS QUESTION BOX

  showQuestions(0);

  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time Remaining: " + secondsLeft;

      if (secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        //   // Calls function to create and append image
        //   sendMessage();
      }
    }, 1000);

    setTime();
  }
};

nxt_btn.onclick = () => {
  question_box.classList.remove("activeInfo"); //REMOVES RULES BOX
  result_box.classList.add("activeResult"); //REVEALS QUESTION BOX

  showQuestions(1);
};

finish_btn.onclick = () => {
  result_box.classList.remove("activeResult"); //REMOVES RULES BOX
};

// SAVE FOR LATER

// // //if begin button clicked (hidden & then visible state)
// begin_btn.onclick = () => {
//   rules_box.classList.remove("activeInfo"); //HIDES RULES BOX
//   question_box.classList.remove("activeQuiz"); //REVEALS QUESTION BOX
//   showQuestions(0);

//   function setTime() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function () {
//       secondsLeft--;
//       timeEl.textContent = "Time Remaining: " + secondsLeft;

//       if (secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         //   // Calls function to create and append image
//         //   sendMessage();
//       }
//     }, 1000);
//   }

//   setTime();
// };

// let question_count = 0;

// //**FUNCTION SHOW QUESTIONS**
function showQuestions(index) {
  const question_box = document.querySelector(".question_box");
  let que_tag = "<span>" + questions[`${index}`].question + "<span>";
  question_box.innerHTML = que_tag;
}

// //QUESTIONS
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
