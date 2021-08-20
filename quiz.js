const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-btn");
const questionContainer = document.querySelectorAll(".question-container")
const message = document.querySelector("#quiz-message");

const correctAnswers = ["Yes", "No", "Yes", "Yes", "Yes", "Isosceles", "30°", "Both", "5°", "Scalene"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()) {
        if(value === correctAnswers[index]) {
            score = score + 1;
            questionContainer[index].style.backgroundColor = "#29df29";
        } else {
            questionContainer[index].style.backgroundColor = "#f24b4b";
        }
        index = index + 1;
    }
    submitButton.style.display = "none"
    message.innerText = "Your Score is " + score;
}

submitButton.addEventListener("click", calculateScore);