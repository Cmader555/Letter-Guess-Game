
//Array that contains strings that computer can "randomly" choose from
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Z"]

//variables that will be altered and effects will be seen on screen
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var lettersChosen = [];
var computerGuess;
//grabbing html content so I can later change it with javascript
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var lettersChosenText = document.getElementById("lettersChosen-text");
var img = document.getElementById("theImg");

//randomly generates



function intiate() {

    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerGuess);

    guessesLeft = 5;
    lettersChosen = [];

}

intiate();


//key is pressed and key value compared to random guess
document.onkeyup = function (event) {

    var userGuess = event.key.toLocaleLowerCase();
    if (lettersChosen.indexOf(userGuess) === -1) {
        lettersChosen.push(event.key);

        if (userGuess === computerGuess) {
            wins++;
            img.src = "assets/images/simpson-doughnut.png";
            intiate();
        } else if (userGuess !== computerGuess) {
            guessesLeft--;
            img.src = "assets/images/homer-doh.png";
        }

    }


    if (guessesLeft === 0) {
        losses++;
        img.src = "assets/images/homer-lose.gif";
        intiate();

    }


    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    lettersChosenText.textContent = "Letters Chosen So Far: " + lettersChosen;
}


//This is here so text is there when page is loaded 
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
lettersChosenText.textContent = "Letters Chosen So Far: " + lettersChosen;



