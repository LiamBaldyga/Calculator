const screenText = document.getElementById('screen');
const buttons = document.querySelectorAll('.griditem');
const clear = document.querySelector('.clear');
const ops = document.querySelectorAll('.ops');
const eq = document.getElementById('=');
const buttonC = document.getElementById('buttons');
let a = null;
let b = null;
let oper = '';
let total = null;
window.onload = clearText;

function add(a,b) {
    return Number(a) + Number(b);
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
    switch(op) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

function clearText() {
    screenText.textContent = 0;
    a = null;
    b = null;
    // ops.forEach(function(e) {
    //     e.style.backgroundColor = '#CD5C5C';
    // })
}

for (const button of buttons) {
    button.addEventListener('click', () => {
        if(screenText.textContent.length >= 7) return;
        else if(screenText.textContent == 0) {
            screenText.textContent = button.textContent;
        }
        else {
        screenText.textContent += button.textContent;
        }
    });
}

for (const op of ops) {
    op.addEventListener('click', () => {
        a = screenText.textContent;
        oper = op.id;
        op.style.backgroundColor = '#F08080';
        screenText.textContent = 0;
    });
}

eq.onclick = function() {
    if (a == null) return;
    b = screenText.textContent;
    total = operate(oper, a, b).toString().slice(0,7);
    screenText.textContent = total;
}
clear.onclick = clearText;