let min = 1;
let max = 10;
let winningNumber = 3;
let chancesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess >max){
        setMessage(`Por favor introduzca un numero entre ${min} y ${max}`, 'red');
    }

    if(guess === winningNumber){
        guessInput.disabled = true;
        guessInput.style.bordercolor = 'green';
        setMessage(`${winningNumber} es correcto, GANASTE`, 'green');
    }
});

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}