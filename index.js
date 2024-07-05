/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("user-input");
const subBtn = document.getElementById("convert-btn");
const lengthContainer = document.getElementById("length-container");
const volumeContainer = document.getElementById("volume-container");
const massContainer = document.getElementById("mass-container");

subBtn.addEventListener("click", function () {
  let unitToConvert = Number(userInput.value);
  if (unitToConvert >= 0) {
    let lengthValue = (unitToConvert * 3.281).toFixed(3);
    let volumeValue = (unitToConvert * 0.268).toFixed(3);
    let massValue = (unitToConvert * 2.204).toFixed(3);

    lengthContainer.textContent = `${unitToConvert} meters = ${lengthValue} feet | ${unitToConvert} feet = ${(
      unitToConvert / 3.281
    ).toFixed(3)} meters`;
    volumeContainer.textContent = `${unitToConvert} litres = ${volumeValue} gallons | ${unitToConvert} gallons = ${(
      unitToConvert / 0.264
    ).toFixed(3)} litres`;
    massContainer.textContent = `${unitToConvert} kilos = ${massValue} pounds | ${unitToConvert} pounds = ${Number(
      unitToConvert / 2.204
    ).toFixed(3)} kilos`;
  } else {
    lengthContainer.textContent = "";
    volumeContainer.textContent = "";
    massContainer.textContent = "";
    alert("Enter a value greater than 0");
  }
});
