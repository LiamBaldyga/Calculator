let displayValue = '';
let lastValue = '';
let currentOp = '';

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

function clearScreen() {
    currentText.textContent = 0;
    lastText.textContent = '';
    displayValue = '';
    lastValue = '';
}

function appendToCurrent(num) {
    if(currentText.textContent == 0){
         currentText.textContent = num;
         return;
    }
    currentText.textContent += num;
}

function appendToLast(oper) {
    displayValue = currentText.textContent;
    lastValue = `${displayValue} ${oper}`;
    lastText.textContent = lastValue;
}

function deleteNum() {
    currentText.textContent = currentText.textContent.toString().slice(0, -1);
    if (currentText.textContent == '') currentText.textContent = 0;
}

nums.forEach((button) =>
button.addEventListener('click', () => appendToCurrent(button.textContent)))

ops.forEach((button) => 
button.addEventListener('click', () =>  appendToLast(button.textContent)))

clearBtn.onclick = clearScreen;
delBtn.onclick = deleteNum;