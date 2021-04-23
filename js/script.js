//Choose a random color

const body = document.querySelector('body');
const button = document.querySelector('.btn')

body.style.backgroundColor = 'cyan';
const colors = ['red', 'green', 'yellow', 'brown', 'blue', 'orange']

button.addEventListener('click', changeColor)

function changeColor(){
    body.style.backgroundColor = colors[parseInt(Math.random()*colors.length)]
}


