
let min = 1;
let max = 10;
let winningNumber = getRandomNumber(min, max);
let chancesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess >max){
        setMessage(`Por favor introduzca un numero entre ${min} y ${max}`, 'red');
    }

    if(guess === winningNumber){
        gameOver(true, `${winningNumber} es correcto, GANASTE`);
    } else{
        chancesLeft -= 1;
        if(chancesLeft === 0){
            gameOver(false, `Fin del Juego, perdiste, el numero correcto era ${winningNumber}`);
        } else{
            guessInput.style.bordercolor = 'red';
            guessInput.value = '';
            setMessage(`${guess} no es correcto, quedan ${chancesLeft} intentos.`, 'red');
        }
    }
});

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;

    setMessage(msg);

    guessBtn.value = 'Jugar de nuevo?';
    guessBtn.className += 'play-again';

}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min+1)+min);
}