let dark = document.querySelector('.dark') as HTMLButtonElement;
let child = document.querySelector('.child') as HTMLDivElement;
let isTrue: boolean = false
dark.addEventListener('click', () => {
    child.classList.toggle('dark-mode')
    child.style.transition = '2s'
    if (isTrue) {
        dark.innerText = 'Dark Mode'
        isTrue = false
    }
    else {
        dark.innerText = 'Light Mode'
        isTrue = true
    }
})


// calculator starts here



let display = document.querySelector('input') as HTMLInputElement;
let btns = document.querySelectorAll('button') as NodeList;
let str: string = '';


btns.forEach(e => {
    e.addEventListener('click', (element) => {
        let data = (element.target as HTMLInputElement).innerText;
        if (data === '=') {
            str = eval(str)
            display.value = str
        } else if (data === 'C') {
            str = '';
            display.value = str
        }
        else {
            str += data
            display.value = str
        }

    })
})