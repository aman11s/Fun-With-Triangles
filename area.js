const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const areaMessage = document.querySelector("#area-message");
const calculateButton = document.querySelector("#area-btn");

function calculateSemiPerimeter (a, b, c) {
    const semiPerimeter = ((a + b + c) / 2); 
    return semiPerimeter;
}

function calculateAreaOfTriangle () {
    const s = calculateSemiPerimeter(Number(firstSide.value), Number(secondSide.value), Number(thirdSide.value));
    const areaOfTriangle = Math.sqrt(s * (s - Number(firstSide.value)) * (s - Number(secondSide.value)) * (s - Number(thirdSide.value)));
    areaMessage.innerText  = "Area of a triangle using heron's formula is " + areaOfTriangle.toFixed(4) + " units."
}

calculateButton.addEventListener("click", calculateAreaOfTriangle);