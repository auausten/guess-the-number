const startBtn = document.getElementById("startBtn"); // Variable for 'start' button
let userInput = document.getElementById("userInput"); // Variable for user input textbox
const guessBtn = document.getElementById("guessBtn"); // Variable for 'guess' button
let randomNum; // Declares randomNum as variable
let guessCount = 0; // Variable for guess counter
let numbersGuessed = []; // Variable to keep track of numbers guessed via an array


function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1; // Generates random whole number from 1 to a maximum (set by input on line 23)
}


function startGame() {
    startBtn.setAttribute('disabled', 'disabled'); // Disables the function to press the start button
    userInput.removeAttribute('disabled'); // Enables the function to type in the input textbox
    guessBtn.removeAttribute('disabled'); // Enables the function to press the guess button

    result.textContent = 'The result should be displayed here';
    numberOfGuesses.textContent = 'The number of guesses should be displayed here';
    numbersWereGuessed.textContent = 'The numbers you have guessed should be displayed here';

    randomNum = getRandomNumber(1000); // Sets 1000 as the maximum
    guessCount = 0; // Sets guessCount to 0
    numbersGuessed = []; // Sets an array for guessed numbers
}


function checkNumber() {
    const userValue = parseInt(userInput.value); // Makes element based on userInput
    let result = document.getElementById("result"); // Element for a piece of text in HTML file

// Actual gameplay (shows results)
    if (userValue > 1000 || userValue < 1 || userValue % 1 != 0) {
        result.textContent = 'Please insert a value between 1 and 1000';
    } else if (numbersGuessed.includes(userValue)) {
        result.textContent = 'You have already guessed this number';
    } else if (userValue > randomNum) {
        result.textContent = 'Your guess is too high, guess lower';
        updateGuessInfo(userValue);
    } else if (userValue < randomNum) {
        result.textContent = 'Your guess is too low, guess higher';
        updateGuessInfo(userValue);
    } else {
        result.textContent = 'Congratulations! You guessed the correct number which was ' + randomNum + '.';
        updateGuessInfo(userValue);
        endGame();
    }
}


function updateGuessInfo(guessedNumber) {
    guessCount ++;
    numberOfGuesses.textContent = 'Number of guesses: ' + guessCount;
    numbersGuessed.push(guessedNumber);
    numbersWereGuessed.textContent = 'Numbers guessed: ' + numbersGuessed.join(', ');
}

function endGame() {
    startBtn.removeAttribute('disabled');
    userInput.value = '';
    userInput.setAttribute('disabled', 'disabled');
    guessBtn.setAttribute('disabled', 'disabled');
}