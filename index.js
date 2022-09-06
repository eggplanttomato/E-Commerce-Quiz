const myQuestions = [{
    question: "Which of the following is not a real eCommerce platform?",
    answers: {
      a: "Shopify",
      b: "WooCommerce",
      c: "ShopCommerce",
      d: "Shift4Shop"
    },
    correctAnswer: "c"
  },
  {
    question: "If Shopify is so good, why are Shopify developers necessary?",
    answers: {
      a: "To save time on things like store setups and migrations",
      b: "To extend the limited design options and functionalities of themes with custom code",
      c: "To provide support with a deep understanding of how the platform works and what its limitations are",
      d: "All the above"
    },
    correctAnswer: "d"
  },
  {
    question: "Which of the following is true about Shopify developers?",
    answers: {
      a: "They are paid extremely well",
      b: "There is a high demand for them",
      c: "They need to know web development, the platform itself, and the liquid template language",
      d: "All the above"
    },
    correctAnswer: "d"
  }
];

let questionNumber = 0;
let numCorrect = 0;
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");
const resetButton = document.getElementById("reset");
const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const question = document.getElementById('question');
const picture = document.getElementById("picture");
const message = document.getElementById("message");

function showQuestion() {
  let currentQuestion = myQuestions[questionNumber].question;
  let currentAnswers = myQuestions[questionNumber].answers;
  const answers = [];

  if (questionNumber === 0) {
    backButton.style.display = 'none';
    resetButton.style.display = 'none';
  } else {
    backButton.style.display = 'inline-block';
  }
  if (questionNumber === myQuestions.length - 1) {
    nextButton.style.display = 'none';
    backButton.style.display = 'inline-block';
    resetButton.style.display = 'inline-block';
  } else {
    nextButton.style.display = 'inline-block';

  }
  question.innerHTML = `<h3>Question ${questionNumber+1} of ${myQuestions.length}</h3> ${currentQuestion} `
  console.log(currentQuestion);
  // for each available answer...
  for (const letter in currentAnswers) {
    // ...add an HTML radio button
    answers.push(
      `<label>
        <div class="answer"> <input type="radio" id="${letter}" onclick="showResults('${letter}') "name="answer" value="${letter}">
            ${currentAnswers[letter]}
          </div>
        </label>`
    );
  }
  quiz.innerHTML = answers.join('');
}


function showResults(answer) {
  let score;
  if (answer == myQuestions[questionNumber].correctAnswer) {
    numCorrect++;
}

(numCorrect == 0) ? score = 0 :
(numCorrect > 0 && numCorrect < 3) ? score = 1 :
(numCorrect == 3) ? score = 2 :
"score";

let messages = (score == 2) ? "Get the Money!!" :
  (score == 1) ? "You're getting close, but still no treats" :
  (score == 0) ? "Come on, Try Harder!" :
  " ";

  let pic = (score == 2) ? "images/richCat.jpg" :
    (score == 1) ? "images/sosoCat.gif" :
    (score == 0) ? "images/lazyCat.jpg" :
    "images/moneyCat.jpg";


  if (questionNumber < myQuestions.length - 1) {
    questionNumber++;
    showQuestion();}
  else {
    results.innerHTML = `<h2>You got ${numCorrect} out of ${myQuestions.length}</h2>`;
    message.innerHTML = `<h2> ${messages}</h2>`;
    picture.innerHTML = "<img src=" + pic + ">";
  }
}

function next() {
  questionNumber++;
  showQuestion();
}

function back() {
  questionNumber += -1;
  showQuestion();
}

function reset() {
  window.location.reload();
  showQuestion();
}


// display quiz right away
showQuestion();


backButton.addEventListener("click", back);
nextButton.addEventListener("click", next);
resetButton.addEventListener("click", reset);
// tryAgain.innerHTML = "<button onClick='window.location.reload(true)'>Try Again</button>";
