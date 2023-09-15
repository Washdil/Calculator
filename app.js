let firstNumber = '';
let secondNumber = '';
let operator = '';
let currentInput = '0';

const inputDisplay = document.getElementById('input');
const outputDisplay = document.getElementById('output');


function updateDisplay() {
  inputDisplay.textContent = currentInput;
}

function handleNumericClick(number) {
  if(currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function handleOperatorClick(op) {
  if(firstNumber === '') {
    firstNumber = currentInput;
    operator = op;
    currentInput = '0';
  
  } else if(secondNumber === '') {
    secondNumber = currentInput;
    currentInput = operate(operator, firstNumber, secondNumber);
    firstNumber = currentInput;
    operator = op;
    secondNumber = '';
  }

  updateDisplay();
}


function handleDecimalClick() {
  if(!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function handleBackspace() {
  currentInput = currentInput.slice(0, -1);
  if(currentInput = '') {
    currentInput = '0';
  }
  updateDisplay();
}

document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    if(!isNaN(buttonText) || buttonText === '.') {
      handleNumericClick(buttonText);
    }
  });
});


document.getElementById('btn-add').addEventListener('click', () => {
  handleOperatorClick('+');
});

document.getElementById('btn-subtract').addEventListener('click' , () => {
  handleOperatorClick('-');
});

document.getElementById('btn-multiply').addEventListener('click' , () => {
  handleOperatorClick('*');
});


document.getElementById('btn-divide').addEventListener('click', () => {
  handleOperatorClick('/');
});

document.getElementById('btn-decimal').addEventListener('click', () => {
  handleDecimalClick();
});

document.getElementById('btn-backspace').addEventListener('click' , () => {
  handleBackspace();
});


document.getElementById('btn-equals').addEventListener('click', () => {
  if(secondNumber !== '') {
    currentInput = operate(operator, firstNumber, secondNumber);
    firstNumber = currentInput;
    operator = '';
    secondNumber = '';
    updateDisplay(); 
  }
});

document.getElementById('btn-clear').addEventListener('click', () => {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  currentInput = '0';
  updateDisplay();
})




function operate(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch(operator) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '*':
      return (num1 * num2).toString();
    case '/':
      if(num2 === 0){
        return 'Cannot divide by zero';
      }
      return (num1 / num2).toString();
    default:
      return '0';
  }

}