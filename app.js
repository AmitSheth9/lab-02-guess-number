/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
//import { displayGuessAccuracy } from "./utils.js";

const numberGuessed = document.getElementById('numberguessed');
const guessAccuracy = document.getElementById('guessaccuracy');
const guessesLeft = document.getElementById('guessesleft');
const guess = document.getElementById('guess');
const submitButton = document.getElementById('submitbutton');
const winLose = document.getElementById('winlose');







// initialize global state
let guessesRemaining = 4;
let magicNumber = Math.floor(Math.random() * 20);

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

submitButton.addEventListener('click', () => {
    guessesRemaining--;
    let guessNumber = Number(guess.value);
    displayGuess(guess.value);
    displayGuessesRemaining();
    displayGuessAccuracy(guessNumber);
    
    if (guessNumber === magicNumber){
        return displayWin();
    }
    if (guessesRemaining === 0 && guessNumber !== magicNumber) {
        return displayLose();
    }
    if (guessesRemaining < 0) {
        return displayNoMoreGuesses();
    }
    

    console.log(`guesses left ${guessesRemaining}`);
    console.log(`number guessed ${numberGuessed.textContent}`);
    console.log(`magic number ${magicNumber}`);
    console.log(`inputguess ${guessNumber}`);
   
    
    
    
    


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

function displayGuessAccuracy(userGuess) {
    if (userGuess < magicNumber) {
        guessAccuracy.textContent = 'Guess Again. Your guess of ' + userGuess + ' is too low!';
    }
    else if (userGuess > magicNumber) {
        guessAccuracy.textContent = 'Guess Again. Your guess of ' + userGuess + ' is is too high';
    }
    else if (userGuess === magicNumber){
        return winLose.textContent = 'Winner!! You guessed correctly!';
    }
}

function resetAndPlayAgain() {

}
