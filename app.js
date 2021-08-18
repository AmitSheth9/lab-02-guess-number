/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
import { compareNumbers, displayGuessAccuracy } from './utils.js';

const numberGuessed = document.getElementById('numberguessed');
const guessAccuracy = document.getElementById('guessaccuracy');
const guessesLeft = document.getElementById('guessesleft');
const guess = document.getElementById('guess');
const submitButton = document.getElementById('submitbutton');
const winLose = document.getElementById('winlose');
const resetButton = document.getElementById('resetbutton');

// initialize global state
let guessesRemaining = 4;
let magicNumber = Math.ceil(Math.random() * 20);

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
        submitButton.disabled = true;
        return displayWin();
        
    }
    if (guessesRemaining === 0 && guessNumber !== magicNumber) {
        submitButton.disabled = true;
        return displayLose();
    }
    if (guessesRemaining < 0) {
        submitButton.disabled = true;
        return displayNoMoreGuesses();
    }
    

    console.log(`guesses left ${guessesRemaining}`);
    console.log(`number guessed ${numberGuessed.textContent}`);
    console.log(`magic number ${magicNumber}`);
    console.log(`inputguess ${guessNumber}`);
   
    
    
    
    


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
    numberGuessed.textContent = userGuess;
}


function displayGuessesRemaining() {
    guessesLeft.textContent = `Guesses Remaining: ${guessesRemaining}`; 
}
function displayLose() {

    winLose.textContent = 'You lose. No more guesses left.';
}
function displayWin() {
    winLose.textContent = 'You guessed correctly! You win!!';
    guessAccuracy.textContent = 'Winner!';
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
