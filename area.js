const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const areaMessage = document.querySelector("#area-message");
const areaForm = document.querySelector("#area-form")

function calculateSemiPerimeter (a, b, c) {
    const semiPerimeter = ((a + b + c) / 2); 
    return semiPerimeter;
}

function calculateAreaOfTriangle (event) {
    event.preventDefault();
    const s = calculateSemiPerimeter(Number(firstSide.value), Number(secondSide.value), Number(thirdSide.value));
    const areaOfTriangle = Math.sqrt(s * (s - Number(firstSide.value)) * (s - Number(secondSide.value)) * (s - Number(thirdSide.value)));
    areaMessage.innerText  = "Area of a triangle using heron's formula is " + areaOfTriangle.toFixed(4) + " units."
}

areaForm.addEventListener("submit", calculateAreaOfTriangle);