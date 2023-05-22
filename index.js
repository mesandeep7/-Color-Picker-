

let colorPickerContainer = document.getElementById("colorPickerContainer");
// let thirdBlockContentSpace = document.getElementById("thirdBlockContentSpace")
let selectedColorHexCode = document.getElementById("selectedColorHexCode");



let buttonOne = document.getElementById("button1");
buttonOne.addEventListener('click', function onClick(event) {
    colorPickerContainer.style.backgroundColor = '#e0e0e0';
    selectedColorHexCode.textContent="#e0e0e0";

});

let buttonTwo = document.getElementById("button2");
buttonTwo.addEventListener('click', function onClick(event) {
    colorPickerContainer.style.backgroundColor = '#6fcf97';
    selectedColorHexCode.textContent="#6fcf97";

});

let buttonThree = document.getElementById("button3");
buttonThree.addEventListener('click', function onClick(event) {
    colorPickerContainer.style.backgroundColor = '#56ccf2';
    selectedColorHexCode.textContent="#56cc2";

});

let buttonFour = document.getElementById("button4");
buttonFour.addEventListener('click', function onClick(event) {
    colorPickerContainer.style.backgroundColor = '#bb6bd9';
    selectedColorHexCode.textContent="#bb6bd9";

});

