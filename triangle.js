const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const checkTriangleButton = document.querySelector("#check-triangle-btn");
const angleOfTriangleMessage = document.querySelector("#angle-of-triangle-message");
const isTriangleForm = document.querySelector("#is-triangle-form");

isTriangleForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const sumOfAngles = Number(angleOne.value)+ Number(angleTwo.value) + Number(angleThree.value);
    if(sumOfAngles === 180) {
        angleOfTriangleMessage.style.color = "green"
        angleOfTriangleMessage.innerText = "Yayy!! These angles make a △"
    } else {
        angleOfTriangleMessage.style.color = "red";
        angleOfTriangleMessage.innerText = "No!! These angles do not form a △"
    }
});