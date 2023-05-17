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

let screen = document.querySelector('.screen');

let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addition);

let subtractBtn = document.querySelector('#subtractBtn');
subtractBtn.addEventListener('click', subtraction);

let multiplyBtn = document.querySelector('#multiplyBtn');
multiplyBtn.addEventListener('click', multiplication);

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
    return x / y;
}

function printDecimal() {
    return screen.textContent += this.value;
}

function printNumber() {
    return screen.textContent += this.value
}

function clearCalc() {
    location.reload();
}

function deleteNumber() {
    let screenText = screen.textContent;
    newText = screenText.substring(0, screenText.length-1);
    screen.textContent = newText;
    return console.log(newText);
}

function addition() {
    firstOperand = screen.textContent;
    operator = '+';
    screen.textContent = "";
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = true);
}

function subtraction() {
    firstOperand = screen.textContent;
    operator = '-';
    screen.textContent = "";
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = true);
}

function multiplication() {
    firstOperand = screen.textContent;
    operator = 'x';
    screen.textContent = "";
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = true);
}