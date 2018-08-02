// Themed Hangman Game - Cars (music plays while you play game)

// ELEMENTS:
// Bank of words to guess based on theme
// Word to guess needs to be broken into letters and displayed with blank spaces until guessed
// Correct guesses display letter and should have some sort of success sound/animation
// There will be a standard number of guesses based off how many body parts are displayed 
// head
// arms * 2
// hands * 2
// torso
// legs * 2
// feet * 2
// TOTAL GUESSES = 10

// Game process: 
// 1) page loads
// 2) gameWord from wordBank is chosen at random --->  Math.floor(Math.random())
// 3) gameWord is broken up into an array of letters called gwArray 
// 3a) gameWord is displayed in an area of the screen
// 4) userGuess = user guesses key -- document onkey event
// 5) userGuess compared against gwArray 
// 6) if there is a match, the letter displays
// 7) if there is not match, increment guesses by 1
// 8) if guesses is greater than 10, game ends
// 9) Once game is over, display "Play Again" button

var wordBank = ["Lightning_McQueen", "Doc_Hudson", "Sally_Carrera", "Mater", "Ramone", "Luigi", "Guido", "Flo", "Sarge", "Sheriff", "Fillmore"];
var gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];

// Game word test
console.log("The game word is " + gameWord);
var userGuess = document.getElementById("word-area");

let guesses = [];
let wrongGuesses = [];
let gwArray = [];


// Main Game function begin
document.onkeyup = function (keyStroke) {
  for (let q = 0; q < gameWord.length; q++) {
    gwArray.push(gameWord[q]);
    userGuess.textContent = keyStroke.key;
    guesses.push(userGuess);

  }
};


// Main function end



console.log(userGuess);
console.log("guesses are equal to: " + guesses);

// CONDITIONAL TO CHECK IF STRING INCLUDES userGuess, IF YES, FUNCTION TO DISPLAY LETTER, IF NO, DISPLAY IN GUESSES BOX
// if (gameWord.includes(userGuess)) {
//   userGuess.
// }

// ----------------------------------------
// .SPLIT METHOD SAMPLE CODE
// function splitString(stringToSplit, separator) {
//   var arrayOfStrings = stringToSplit.split(separator);

//   console.log('The original string is: "' + stringToSplit + '"');
//   console.log('The separator is: "' + separator + '"');
//   console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
// }

// var space = ' ';
// var comma = ',';

// splitString(tempestString, space);
// splitString(tempestString);
// splitString(monthString, comma);
// -----------------------------------------
// PLOTLY GRAPH TO SHOW SCORE
// var data = [{
//   values: [1, 0, 1],
//   labels: ['Wins', 'Losses', 'Ties'],
//   type: 'pie'
// }];

// Plotly.newPlot('myDiv', data);