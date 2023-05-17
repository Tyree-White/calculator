let firstOperand;
let secondOperand;
let operator;

let numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', printNumber));

let decimal = document.querySelector('#decimalBtn');
decimal.addEventListener('click', printDecimal);

let clear = document.querySelector('.clear');
clear.addEventListener('click', clearCalc);

let del = document.querySelector('.delete');
del.addEventListener('click', deleteNumber)

let topText = document.querySelector('.top');
let bottom = document.querySelector('.bottom');

let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addition);

let subtractBtn = document.querySelector('#subtractBtn');
subtractBtn.addEventListener('click', subtraction);

let multiplyBtn = document.querySelector('#multiplyBtn');
multiplyBtn.addEventListener('click', multiplication);

let divideBtn = document.querySelector('#divideBtn');
divideBtn.addEventListener('click', division);

let equal = document.querySelector('#equalBtn')
equal.addEventListener('click', operate)

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return 'Deez Nutz';
    }
    return x / y;
}

function printDecimal() {
    decimal.disabled = true;
    return bottom.textContent += this.value;
}

function printNumber() {
    if (operator === '=') {
        let operators = document.querySelectorAll('.operator');
        operators.forEach(operator => operator.disabled = false);
        decimal.disabled = false;

        topText.textContent = bottom.textContent;
        bottom.textContent = '';
        operator = undefined;

    }
    return bottom.textContent += this.value
}

function clearCalc() {
    location.reload();
}

function deleteNumber() {
    let bottomText = bottom.textContent;
    newText = bottomText.substring(0, bottomText.length-1);
    bottom.textContent = newText;
    decimal.disabled = false;
}

function addition() {
    firstOperand = bottom.textContent;
    topText.textContent = `${firstOperand} +`
    operator = '+';
    bottom.textContent = "";
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = true);
    decimal.disabled = false;
}

function subtraction() {
    firstOperand = bottom.textContent;
    topText.textContent = `${firstOperand} -`
    operator = '-';
    bottom.textContent = "";
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = true);
    decimal.disabled = false;
}

function multiplication() {
    firstOperand = bottom.textContent;
    topText.textContent = `${firstOperand} x`
    operator = 'x';
    bottom.textContent = "";
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = true);
    decimal.disabled = false;
}

function division() {
    firstOperand = bottom.textContent;
    topText.textContent = `${firstOperand} /`
    operator = '/';
    bottom.textContent = "";
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = true);
    decimal.disabled = false;
}

function operate() {
    let result;
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = false);
    decimal.disabled = false;

    secondOperand = bottom.textContent;
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);

    switch (operator) {
        case '+':
          result = add(firstOperand, secondOperand);
          result = Math.round(result * 1000)/1000;
          topText.textContent = `${firstOperand} + ${secondOperand} =`
          bottom.textContent = result;
          break;
        case '-':
          result = subtract(firstOperand, secondOperand);
          result = Math.round(result * 1000)/1000;
          topText.textContent = `${firstOperand} - ${secondOperand} =`
          bottom.textContent = result;
          break;
        case 'x':
          result = multiply(firstOperand, secondOperand);
          result = Math.round(result * 1000)/1000;
          topText.textContent = `${firstOperand} * ${secondOperand} =`
          bottom.textContent = result;
          break;
        case '/':
          result = divide(firstOperand, secondOperand);
          result = Math.round(result * 1000)/1000;
          topText.textContent = `${firstOperand} / ${secondOperand} =`
          bottom.textContent = result;
          break;
        default:
          operators.forEach(operator => operator.disabled = true);
          decimal.disabled = true;
          bottom.textContent = 'Error';
    }
    operator = '=';
}
