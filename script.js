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
    return bottom.textContent += this.value;
}

function printNumber() {
    return bottom.textContent += this.value
}

function clearCalc() {
    location.reload();
}

function deleteNumber() {
    let bottomText = bottom.textContent;
    newText = bottomText.substring(0, bottomText.length-1);
    bottom.textContent = newText;
    return console.log(newText);
}

function addition() {
    firstOperand = bottom.textContent;
    topText.textContent = `${firstOperand} + `
    operator = '+';
    bottom.textContent = "";
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = true);
}

function subtraction() {
    firstOperand = bottom.textContent;
    topText.textContent = `${firstOperand} - `
    operator = '-';
    bottom.textContent = "";
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = true);
}

function multiplication() {
    firstOperand = bottom.textContent;
    topText.textContent = `${firstOperand} x `
    operator = 'x';
    bottom.textContent = "";
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = true);
}

function division() {
    firstOperand = bottom.textContent;
    topText.textContent = `${firstOperand} / `
    operator = '/';
    bottom.textContent = "";
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.disabled = true);
}