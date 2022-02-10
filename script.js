let firstValue = '';
let lastValue = '';
let currentOp = '';
let shouldReset = false;

const nums = document.querySelectorAll('[data-num]');
const ops = document.querySelectorAll('[data-op]');
const clearBtn = document.getElementById('clear');
const delBtn = document.getElementById('delete');
const eqBtn = document.getElementById('eq');
const dotBtn = document.getElementById('dot');
const lastText = document.querySelector('.lastNum');
const currentText = document.querySelector('.currentNum');

//Function declarations
function add(a,b) {
    return a + b;
} 

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(op, a, b) {
    a = Number(a);
    b = Number(b);
    switch(op) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '×':
            return multiply(a,b);
        case '÷':
            if (b === 0) return null;
            else return divide(a,b);
        default:
            return null;
    }
}

function reset() {
    currentText.textContent = '';
    shouldReset = false;
}

function clearScreen() {
    currentText.textContent = 0;
    lastText.textContent = '';
    firstValue = '';
    lastValue = '';
    currentOp = '';
}

function appendToCurrent(num) {
    if(currentText.textContent == 0 || shouldReset){
        currentText.textContent = num;
        shouldReset = false;
    }
    else currentText.textContent += num;
}

function opSetup(op) {
    if (currentOp != '') calculate();
    firstValue = currentText.textContent;
    currentOp = op;
    lastText.textContent = `${firstValue} ${currentOp}`
    shouldReset = true;
}

function decimal() {
    if(shouldReset) reset();
    if (currentText.textContent == '') reset();
    else if (currentText.textContent.includes('.')) return;
    currentText.textContent += '.';
}

function deleteNum() {
    currentText.textContent = currentText.textContent.toString().slice(0, -1);
    if (currentText.textContent == '') currentText.textContent = 0;
}

function calculate() {
    if (!currentOp || shouldReset) return;
    lastValue = currentText.textContent;
    currentText.textContent = round(operate(currentOp, firstValue, lastValue));
    lastText.textContent = `${firstValue} ${currentOp} ${lastValue} =`;
    currentOp = '';
    shouldReset = true;
}

function round(num) {
    return parseFloat(num.toFixed(10));
}

nums.forEach((button) =>
button.addEventListener('click', () => appendToCurrent(button.textContent)))

ops.forEach((button) => 
button.addEventListener('click', () =>  opSetup(button.textContent)))

clearBtn.addEventListener('click', clearScreen);
delBtn.addEventListener('click', deleteNum);
dotBtn.addEventListener('click', decimal);
eqBtn.addEventListener('click', calculate);