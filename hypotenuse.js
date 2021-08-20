const baseValue = document.querySelector("#base-value");
const heightValue = document.querySelector("#height-value");
const hypotenuseMessage = document.querySelector("#hypotenuse-message");
const checkHypotenuseButton = document.querySelector("#hypotenuse-btn");

function calculateSumOfSquares (a, b) {
    const sumOfSquares = (a*a) + (b*b);
    return sumOfSquares;
}

function calculateHypotenuse () {
    const hypotenuse =  calculateSumOfSquares(Number(baseValue.value), Number(heightValue.value));
    const lengthOfHypotenuse = Math.sqrt(hypotenuse);
    hypotenuseMessage.innerText = "The length of hypotenuse is " + lengthOfHypotenuse.toFixed(4);
}

checkHypotenuseButton.addEventListener("click", calculateHypotenuse);