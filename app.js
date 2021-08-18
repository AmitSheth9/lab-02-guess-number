
import { compareNumbers, displayGuessAccuracy, displayGuess, displayWin, displayLose } from './utils.js';

const numberGuessed = document.getElementById('numberguessed');
const guessAccuracy = document.getElementById('guessaccuracy');
const guessesLeft = document.getElementById('guessesleft');
const guess = document.getElementById('guess');
const submitButton = document.getElementById('submitbutton');
const winLose = document.getElementById('winlose');
const resetButton = document.getElementById('resetbutton');
const timesCorrect = document.getElementById('timescorrect');
const timesWrong = document.getElementById('timeswrong');

let guessesRemaining = 4;
let magicNumber = Math.ceil(Math.random() * 20);
let timesguessedright = 0;
let timesguessedwrong = 0;



submitButton.addEventListener('click', () => {
    guessesRemaining--;
    let guessNumber = Number(guess.value);
    displayGuess(guess.value);
    displayGuessesRemaining();
    displayGuessAccuracy(guessNumber, magicNumber);
    
    if (guessNumber === magicNumber){
        timesguessedright++;
        timesCorrect.textContent = `Times guessed correctly: ${timesguessedright}`;
        submitButton.disabled = true;
        return displayWin();    
    }
    if (guessesRemaining === 0 && guessNumber !== magicNumber){
        submitButton.disabled = true;
        timesguessedwrong++;
        timesWrong.textContent = `Times lost: ${timesguessedwrong}`;
        return displayLose();
    }
});

resetButton.addEventListener('click', () =>{
    submitButton.disabled = false;
    guessesRemaining = 4;
    magicNumber = Math.ceil(Math.random() * 20);
    numberGuessed.textContent = '';
    guessesLeft.textContent = 'Guesses Remaining: 4';
    winLose.textContent = '';
    guessAccuracy.textContent = '';
});

function displayGuessesRemaining() {
    guessesLeft.textContent = `Guesses Remaining: ${guessesRemaining}`; 
}





