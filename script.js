"use strict";
// global variables to be reused all over
const calcBtn = document.querySelector("#calculate");
const firstNum = document.querySelector("#firstnumber");
const secondNum = document.querySelector("#secondnumber");
const operator = document.querySelector("#operator");
const list = document.querySelector("#results");
let output = "";
const checkBox = document.querySelector("#doround");
const decimals = document.querySelector("#decimals");

// do calculations
calcBtn.addEventListener("click", () => {
  if (operator.value === "add") {
    output = Number(firstNum.value) + Number(secondNum.value);
    firstNum.value = output;
  } else if (operator.value === "sub") {
    output = Number(firstNum.value) - Number(secondNum.value);
    firstNum.value = output;
  } else if (operator.value === "mul") {
    output = Number(firstNum.value) * Number(secondNum.value);
    firstNum.value = output;
  } else if (operator.value === "div") {
    output = Number(firstNum.value) / Number(secondNum.value);
    firstNum.value = output;
  }
  // checkbox check and rounding
  if (checkBox.checked) {
    console.log("checked");
    output = output.toFixed(decimals.value);
    console.log(decimals.value);
  }
  //create and append li with calc value
  let newResult = document.createElement("li");
  newResult.appendChild(document.createTextNode(output));
  list.appendChild(newResult);
  list.scrollBy(0, 20);
});

// clear list and input
document.querySelector("#clear").addEventListener("click", () => {
  console.log("clicked");
  firstNum.value = "";
  secondNum.value = "";
  list.textContent = "";
});
