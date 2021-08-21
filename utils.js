

const winLose = document.getElementById('winlose');
const guessAccuracy = document.getElementById('guessaccuracy');

export function compareNumbers(guess, correctNumber) {
    if (guess < correctNumber) return -1;
    if (guess > correctNumber) return 1;
    if (guess === correctNumber) return 0;
}

export function displayGuessAccuracy(userGuess, correctNumber) {
    if (compareNumbers(userGuess, correctNumber) === -1) {
        guessAccuracy.textContent = 'Guess Again. Your guess of ' + userGuess + ' is too low!';
    }
    else if (compareNumbers(userGuess, correctNumber) === 1) {
        guessAccuracy.textContent = 'Guess Again. Your guess of ' + userGuess + ' is is too high';
    }
    else if (compareNumbers(userGuess, correctNumber) === 0){
        return guessAccuracy.textContent = 'Winner!! You guessed correctly!';
    }
}

export function displayLose() {

    winLose.textContent = 'You lose. No more guesses left.';
}
export function displayWin() {
    winLose.textContent = 'You guessed correctly! You win!!';
    guessAccuracy.textContent = 'Winner!';
}