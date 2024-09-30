const displayValue = document.querySelector(`.display-value`);
const acButton = document.querySelector(`.ac`);
const clrButton = document.querySelector(`.clr`);
const percentageButton = document.querySelector(`.percentage`);
const divisionButton = document.querySelector(`.division`);
const oneButton = document.querySelector(`.one`);
const twoButton = document.querySelector(`.two`);
const threeButton = document.querySelector(`.three`);
const multiplicationButton = document.querySelector(`.multiplication`);
const fourButton = document.querySelector(`.four`);
const fiveButton = document.querySelector(`.five`);
const sixButton = document.querySelector(`.six`);
const subtractionButton = document.querySelector(`.subtraction`);
const sevenButton = document.querySelector(`.seven`);
const eightButton = document.querySelector(`.eight`);
const nineButton = document.querySelector(`.nine`);
const addButton = document.querySelector(`.addition`);
const equalButton = document.querySelector(`.equal`);
const zeroButton = document.querySelector(`.zero`);
const pointButton = document.querySelector(`.point`);

const modeButton = document.querySelector(`.dark`);
const calculatorDevice = document.querySelector(`.calculator`);
const darker = document.querySelector(`.darker`);

// oneButton.addEventListener("click", () => {
//   displayValue.value += oneButton.innerHTML;
// });
function workCal(variable) {
  variable.addEventListener("click", (event) => {
    displayValue.value += event.target.innerText;
  });
}

let arr = [
  oneButton,
  twoButton,
  threeButton,
  fourButton,
  fiveButton,
  sixButton,
  sevenButton,
  eightButton,
  nineButton,
  zeroButton,
  subtractionButton,
  addButton,
  divisionButton,
  multiplicationButton,
  percentageButton,
  pointButton,
];
for (let i = 0; i < arr.length; i++) {
  workCal(arr[i]);
}

function calculation(operation) {
  operation.addEventListener("click", () => {
    displayValue.value = eval(displayValue.value);
  });
}

calculation(equalButton);

// !  vurma , faiz , xaric hamsi

acButton.addEventListener("click", () => {
  displayValue.value = "";
});

clrButton.addEventListener("click", () => {
  displayValue.value = displayValue.value.slice(0, -1);
});

modeButton.addEventListener("click", () => {
  calculatorDevice.classList.toggle("active");
});

darker.addEventListener("click", () => {
  calculatorDevice.classList.toggle("activeCalculator");
});
