let firstOperand;
let secondOperand;

let numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', printNumber));

let decimal = document.querySelector('#decimalBtn');
decimal.addEventListener('click', printDecimal);

let clear = document.querySelector('.clear');
clear.addEventListener('click', clearCalc);

let del = document.querySelector('.delete');
del.addEventListener('click', deleteNumber)

let screen = document.querySelector('.screen');

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