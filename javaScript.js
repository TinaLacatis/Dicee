// easy solution
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.querySelector("#imgPlayer1");
var img2 = document.querySelector("#imgPlayer2");

img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    var title;
    document.querySelector("#title").innerHTML = "<i class='bi bi-trophy-fill'></i> Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("#title").innerHTML = "Player 2 Wins! <i class='bi bi-trophy-fill'></i>";
} else {
    document.querySelector("#title").innerHTML = "Draw!";
}


// solution dice with functions

/*
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 > randomNumber2){
    document.querySelector("#title").innerHTML = "<i class='bi bi-trophy-fill'></i> Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("#title").innerHTML = "Player 2 Wins! <i class='bi bi-trophy-fill'></i>";
} else {
    document.querySelector("#title").innerHTML = "Draw!";
}

function diceNr1(randomNumber1) {
    if (randomNumber1 === 1) {
        document.querySelector("#imgPlayer1").setAttribute("src", "images/dice1.png");
    } else if (randomNumber1 === 2) {
        document.querySelector("#imgPlayer1").setAttribute("src", "images/dice2.png");
    } else if (randomNumber1 === 3) {
        document.querySelector("#imgPlayer1").setAttribute("src", "images/dice3.png");
    } else if (randomNumber1 === 4) {
        document.querySelector("#imgPlayer1").setAttribute("src", "images/dice4.png");
    } else if (randomNumber1 === 5) {
        document.querySelector("#imgPlayer1").setAttribute("src", "images/dice5.png");
    } else {
        document.querySelector("#imgPlayer1").setAttribute("src", "images/dice6.png");
    }
    return randomNumber1;
}

function diceNr2(randomNumber2) {
    if (randomNumber2 === 1) {
        document.querySelector("#imgPlayer2").setAttribute("src", "images/dice1.png");
    } else if (randomNumber2 === 2) {
        document.querySelector("#imgPlayer2").setAttribute("src", "images/dice2.png");
    } else if (randomNumber2 === 3) {
        document.querySelector("#imgPlayer2").setAttribute("src", "images/dice3.png");
    } else if (randomNumber2 === 4) {
        document.querySelector("#imgPlayer2").setAttribute("src", "images/dice4.png");
    } else if (randomNumber2 === 5) {
        document.querySelector("#imgPlayer2").setAttribute("src", "images/dice5.png");
    } else {
        document.querySelector("#imgPlayer2").setAttribute("src", "images/dice6.png");
    }
    return randomNumber2;
}
console.log(diceNr1(randomNumber1), diceNr2(randomNumber2));
*/