const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of Japan?",
    answers: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  {
    question: "What is the capital of Brazil?",
    answers: ["Buenos Aires", "Rio de Janeiro", "Sao Paulo", "Brasilia"],
    correctAnswer: "Brasilia",
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
  },
  {
    question: "What is the capital of India?",
    answers: ["Mumbai", "New Delhi", "Bangalore", "Chennai"],
    correctAnswer: "New Delhi",
  },
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");

function buildQuiz() {
  const output = [];

  quizData.forEach((data, index) => {
    const answers = [];

    for (let i = 0; i < data.answers.length; i++) {
      answers.push(
        `<label>
        <input type="radio" name="question${index}" value="${data.answers[i]}">
        ${data.answers[i]}
      </label>`
      );
    }

    output.push(
      `<div class="question">
      <h2>Question ${index + 1}</h2>
      <p>${data.question}</p>
      <ul>${answers.join("")}</ul>
    </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".question");
  let score = 0;

  quizData.forEach((data, index) => {
    const answerContainer = answerContainers[index];
    const selector = `input[name=question${index}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === data.correctAnswer) {
      score++;
      answerContainers[index].style.color = "lightgreen";
    } else {
      answerContainers[index].style.color = "red";
    }
  });

  resultsContainer.innerHTML = `Score: ${score}`;
}

document.onload = buildQuiz();

submitButton.addEventListener("click", showResults);

resetButton.addEventListener("click", () => {
  resultsContainer.innerHTML = "";
  buildQuiz();
});
