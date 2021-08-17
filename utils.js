


const guessAccuracy = document.getElementById('guessaccuracy');

function displayGuessAccuracy (userGuess) {
    if (userGuess < number) {
        guessAccuracy.textContent = `Guess Again. Your guess of ${userGuess} is too low!`;
    }
    else if (userGuess > number) {
        guessAccuracy.textContent = `Guess Again. Your guess of ${userGuess} is too high`;
    }
    else if (userGuess=== number){
        return winLose.textContent = 'Winner!! You guessed correctly!';
    }
}