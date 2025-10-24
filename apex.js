
const quizData = [
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style Syntax", "Creative Style System", "Colorful Style Sheet"],
    answer: 0
  },
  {
    question: "Which HTML tag is used to link JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<link>"],
    answer: 0
  }
];

let currentQuestion = 0;
const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <p>${q.question}</p>
    ${q.options.map((opt, i) => `<button onclick="checkAnswer(${i})">${opt}</button>`).join("")}
  `;
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  alert(selected === correct ? "Correct!" : "Wrong answer.");
}

nextBtn.addEventListener("click", () => {
  currentQuestion = (currentQuestion + 1) % quizData.length;
  loadQuestion();
});

loadQuestion();

const jokeBtn = document.getElementById("joke-btn");
const jokeText = document.getElementById("joke-text");

jokeBtn.addEventListener("click", async () => {
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeText.textContent = `${data.setup} — ${data.punchline}`;
  } catch (error) {
    jokeText.textContent = "Failed to fetch joke.";
  }
});