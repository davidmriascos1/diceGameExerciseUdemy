var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var diceImage1 = document.querySelector(".img1");
diceImage1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var diceImage2 = document.querySelector(".img2");
diceImage2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

var resultWinP1 = document.querySelector("h1");

var resultWinP2 = document.querySelector("h1");

var resultDraw = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    resultWinP1.innerHTML = "Player 1 Wins 🏆";
} 

if (randomNumber1 < randomNumber2)
    {
        resultWinP2.innerHTML = "Player 2 Wins 🏆";
    }

if (randomNumber1 === randomNumber2) {
    resultDraw.innerHTML = "Draw 🤝";
    
}

