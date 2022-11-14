const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const screen = document.querySelector(".screen_content");
const screenSecondary = document.querySelector(".screen_secondary_content");

function clearScreen() {
  screen.innerText = "";
  screenSecondary.innerText = "";
}

const clearButton = document
  .querySelector(".clear")
  .addEventListener("click", () => {
    clearScreen();
  });

const del = document.querySelector(".delete").addEventListener("click", () => {
  const newContent = screen.innerText.slice(0, screen.innerText.length - 1);
  screen.innerText = newContent;
});

numbers.forEach((element) => {
  element.addEventListener("click", (e) => {
    screen.innerText += e.target.innerText;
  });
});

let numbersToBeCalculated = [];
let operationToBeUsed = undefined;
let result = undefined;

function clearScreenVariables() {
  numbersToBeCalculated = [];
  operationToBeUsed = undefined;
  result = undefined;
}

function calculate(operation) {
  switch (operation) {
    case "+":
      result = numbersToBeCalculated.reduce((a, b) => a + b);
      break;
    case "-":
      result = numbersToBeCalculated.reduce((a, b) => a - b);
      break;
    case "x":
      result = numbersToBeCalculated.reduce((a, b) => a * b);
      break;
    case "÷":
      result = numbersToBeCalculated.reduce((a, b) => a / b);
      break;
    case "%":
      result = numbersToBeCalculated.reduce((a, b) => (a * b) / 100);
      break;
  }
}

operators.forEach((elements) => {
  elements.addEventListener("click", (e) => {
    if (screen.innerText != "") {
      numbersToBeCalculated.push(parseFloat(screen.innerText));
    }
    switch (e.target.innerText) {
      case "+":
        operationToBeUsed = "+";
        clearScreen();
        break;
      case "-":
        operationToBeUsed = "-";
        clearScreen();
        break;
      case "x":
        operationToBeUsed = "x";
        clearScreen();
        break;
      case "÷":
        operationToBeUsed = "÷";
        clearScreen();
        break;
      case "%":
        operationToBeUsed = "%";
        clearScreen();
        break;
      case "=":
        calculate(operationToBeUsed);
        if (result != undefined) {
          screen.innerText = result;
        }
        operationToBeUsed = "=";
        if (operationToBeUsed == "=" && numbersToBeCalculated[1] != undefined) {
          screenSecondary.innerText +=
            numbersToBeCalculated[1] + operationToBeUsed;
        }
        clearScreenVariables();
        break;
    }

    if (numbersToBeCalculated.length == 1) {
      screenSecondary.innerText += numbersToBeCalculated + operationToBeUsed;
    }
  });
});
