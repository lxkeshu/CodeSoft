let display = document.getElementById('display');
let expression = '';

function addToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculateResult() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = '';
  } catch (error) {
    display.value = 'Error';
  }
}
