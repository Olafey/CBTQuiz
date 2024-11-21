const quizData = [
  {
    question: "What is the capital of France?",
    options: [
      "Scotland",
      "Madrid",
      "Paris",
      "Lisbon",
    ],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Jane Austen", "Mark Twain", "F. Scott Fitzgerald"],
    answer: "Harper Lee",
  },
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

function loadQuiz() {
  quizData.forEach((quizItem, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
            <h3>${index + 1}. ${quizItem.question}</h3>
            <ul class="options">
                ${quizItem.options
                  .map(
                    (option, i) => `
                    <li>
                        <input type="radio" name="question${index}" id="question${index}option${i}" value="${option}">
                        <label for="question${index}option${i}">${option}</label>
                    </li>`
                  )
                  .join("")}
            </ul>
        `;
    quizContainer.appendChild(questionElement);
  });
}

function getSelectedAnswers() {
  const selectedAnswers = [];
  quizData.forEach((_, index) => {
    const answer = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    selectedAnswers.push(answer ? answer.value : null);
  });
  return selectedAnswers;
}

function showResult() {
  const selectedAnswers = getSelectedAnswers();
  let score = 0;

  selectedAnswers.forEach((answer, index) => {
    if (answer === quizData[index].answer) {
      score++;
    }
  });

  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

submitButton.addEventListener("click", showResult);

loadQuiz();
