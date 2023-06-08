let currentColor = document.querySelector('.current-color');
let bodyElem = document.querySelector('body');
let generateBtn = document.querySelector('.generate-button');

bodyElem.style.backgroundColor = currentColor.innerText;

generateBtn.addEventListener('click', () => {
    let randomColor= "";
    let character= "0123456789abcdef";

    // The FOR LOOP is very useful in JavaScript syntax
    // for (initializer; conditioner; increment) {
    //      code...
    // };

    for (let i = 0; i < 6; i++) {
        randomColor = randomColor + character[Math.floor(Math.random() * 16)];
    }

    currentColor.innerText = "#" + randomColor;
    bodyElem.style.backgroundColor = "#" + randomColor;
})