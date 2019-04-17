

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Z"]

var wins = 0
var losses = 0
var guessesLeft = 5
var lettersChosen = []


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var lettersChosenText = document.getElementById("lettersChosen-text");
// get img element from dom

document.onkeyup = function (event) {
    
    var userGuess = event.key;


    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];



    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 5;
        lettersChosen = [];
        document.getElementById("theImg").src = "assets/images/simpson-doughnut.png";
    }


    if (userGuess !== computerGuess) {
        guessesLeft--;
        lettersChosen.push(userGuess);
        document.getElementById("theImg").src = "assets/images/homer-doh.png";
    }


    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 5;
        lettersChosen = [];
        document.getElementById("theImg").src = "assets/images/homer-lose.gif";
    }

    
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    lettersChosenText.textContent = "Letters Chosen So Far: " + lettersChosen;
}

// init image to default, or it should be in the html anyway
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
lettersChosenText.textContent = "Letters Chosen So Far: " + lettersChosen;



