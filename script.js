const screenText = document.getElementById('screen');
const buttons = document.querySelectorAll('.griditem');
const buttonChildren = document.querySelector('#buttons').children;
const clear = document.querySelector('.clear');
const ops = document.querySelectorAll('.ops');
const eq = document.getElementById('=');
const buttonC = document.getElementById('buttons');
let a = null;
let b = null;
let selectedOper = '';
let total = null;
const opsDefault = '#CD5C5C'; 
const opsSelect = '#F08080';

const colors = {
    clear : '#161w616',
    ops : '#CD5C5C',
    opsSel : '#F08080',
    equals : '#E9967A'
}
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
    defaultColor();
}

function defaultColor() {
    for (let i = 0; i < buttonChildren.length; i++) {
        buttonChildren[i].style.backgroundColor = colors[buttonChildren[i].classList[0]];
    }
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
        defaultColor();
        a = screenText.textContent;
        selectedOper = op.id;
        op.style.backgroundColor = opsSelect;
        screenText.textContent = 0;
    });
}

eq.onclick = function() {
    defaultColor();
    if (a == null) return;
    b = screenText.textContent;
    total = operate(selectedOper, a, b).toString().slice(0,7);
    screenText.textContent = total;

}
clear.onclick = clearText;
