/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
import { displayWin, displayLose, compareNumbers, displayGuessAccuracy } from './utils.js';

const numberGuessed = document.getElementById('numberguessed');
const guessAccuracy = document.getElementById('guessaccuracy');
const guessesLeft = document.getElementById('guessesleft');
const guess = document.getElementById('guess');
const submitButton = document.getElementById('submitbutton');
const winLose = document.getElementById('winlose');
const resetButton = document.getElementById('resetbutton');
const timesCorrect = document.getElementById('timescorrect');
const timesWrong = document.getElementById('timeswrong');

// initialize global state
let guessesRemaining = 4;
let magicNumber = Math.ceil(Math.random() * 20);
let timesguessedright = 0;
let timesguessedwrong = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

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
    if (guessesRemaining === 0 && guessNumber !== magicNumber) {
        submitButton.disabled = true;
        timesguessedwrong++;
        timesWrong.textContent = `Times lost: ${timesguessedwrong}`;
        return displayLose();
    }
    if (guessesRemaining < 0) {
        submitButton.disabled = true;
        return displayNoMoreGuesses();
    }
    

    // console.log(`guesses left ${guessesRemaining}`);
    // console.log(`number guessed ${numberGuessed.textContent}`);
    // console.log(`magic number ${magicNumber}`);
    // console.log(`inputguess ${guessNumber}`);
   

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




function displayGuess(userGuess) {
    numberGuessed.textContent = `You guessed: ${userGuess}`;
}

function displayGuessesRemaining() {
    guessesLeft.textContent = `Guesses Remaining: ${guessesRemaining}`; 
}

function displayNoMoreGuesses() {
  
    numberGuessed.textContent = 'Sorry no more guesses remaining.';
    guessAccuracy.textContent = '';
    displayLose();
    guessesLeft.textContent = 0;

}

function checkIfWon(guessedNumber, correctNum) {
    if (guessedNumber === correctNum) return displayWin();
}

function resetAndPlayAgain() {

}
