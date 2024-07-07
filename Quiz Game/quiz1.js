const questions = [
    {
        question: "What is the Sensing City technology called ?",
        options: ["Machine learning", "Quayside", "Artificial embryo", "Artificial intelligence"],
        correctAnswer: "Quayside"
    },
    
    {
        question: "Which of these technologies help computers to behave like humans ?",
        options: ["XBOX", "Artificial intelligence", "Artificial embryo", "3-D printing"],
        correctAnswer: "Artificial intelligence"
    },

    {
        question: "Which of these technologies support streaming videos ?",
        options: ["Artificial intelligence", "Augmented reality", "Virtual reality", "Machine learning"],
        correctAnswer: "Virtual reality"
    },

    {
        question: "Which of these is related to machine learning ?",
        options: ["Cognitive technology", "XBOX", "Artificial intelligence", "Artificial embryo"],
        correctAnswer: "Cognitive technology"
    },

    {
        question: "Which of these technologies is a solution to shopping ?",
        options: ["Touch commerce", "Cognitive technology", "Virtual reality", "Machine learning"],
        correctAnswer: "Touch commerce"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    questionContainer.textContent = "";
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    resultContainer.textContent = `You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    }
});

displayQuestion();
