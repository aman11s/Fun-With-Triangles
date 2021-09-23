const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const areaMessage = document.querySelector("#area-message");
const areaForm = document.querySelector("#area-form")

function errorHandler(sideOne, sideTwo, sideThree) {
    if((sideOne > (sideTwo + sideThree)) || (sideTwo > (sideOne + sideThree)) || (sideThree > (sideOne + sideTwo))) {
        areaMessage.innerText = "Each side length should be less than the sum of other two sides!!"
        areaMessage.style.color = "red";
    }
}

function calculateSemiPerimeter (a, b, c) {
    const semiPerimeter = ((a + b + c) / 2); 
    return semiPerimeter;
}

function calculateAreaOfTriangle (event) {
    event.preventDefault();
    const s = calculateSemiPerimeter(Number(firstSide.value), Number(secondSide.value), Number(thirdSide.value));
    const areaOfTriangle = Math.sqrt(s * (s - Number(firstSide.value)) * (s - Number(secondSide.value)) * (s - Number(thirdSide.value)));
    areaMessage.style.color = "black";
    areaMessage.innerText  = "Area of a triangle using heron's formula is " + areaOfTriangle.toFixed(4) + " units."
    errorHandler(Number(firstSide.value), Number(secondSide.value), Number(thirdSide.value));
}

areaForm.addEventListener("submit", calculateAreaOfTriangle);