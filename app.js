"use strict";
let dark = document.querySelector('.dark');
let child = document.querySelector('.child');
let isTrue = false;
dark.addEventListener('click', () => {
    child.classList.toggle('dark-mode');
    child.style.transition = '2s';
    if (isTrue) {
        dark.innerText = 'Dark Mode';
        isTrue = false;
    }
    else {
        dark.innerText = 'Light Mode';
        isTrue = true;
    }
});
// calculator starts here
let display = document.querySelector('input');
let btns = document.querySelectorAll('button');
let str = '';
btns.forEach(e => {
    e.addEventListener('click', (element) => {
        let data = element.target.innerText;
        if (data === '=') {
            str = eval(str);
            display.value = str;
        }
        else if (data === 'C') {
            str = '';
            display.value = str;
        }
        else {
            str += data;
            display.value = str;
        }
    });
});
