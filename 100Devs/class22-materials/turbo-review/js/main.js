// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favoriteDrink = " Budweiser Beer ";
favoriteDrink = favoriteDrink.trim();
console.log(favoriteDrink);


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let sayFacts = "an apple a day keeps the doctor away";
let result = sayFacts.includes("apple");
console.log(result);


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let randomNumber = Math.random();
    if ( randomNumber < 0.33) {
        return 'rock'
    } else if ( randomNumber < 0.66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
rockPaperScissors();


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const checkWinner = (playerPick) => {
    let botPick = rockPaperScissors();
    if ((playerPick === 'rock' && botPick === 'scissors') || (playerPick === 'paper' && botPick === 'rock') || (playerPick === 'scissors' && botPick === 'paper')) {
        console.log('Player 1 wins');
    } else if (playerPick === botPick) {
        console.log('It\'s a draw');
    } else {
        console.log ('You lost this round')
    }
}
// checkWinner('rock');
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playTheGame(arr) {
    arr.forEach(playerPick => {
        checkWinner(playerPick)
    });
}

playTheGame(['rock', 'paper', 'scissors']);