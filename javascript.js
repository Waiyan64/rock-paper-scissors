var playerSelection;
var playerWin = 0;
var computerWin = 0;
var newDiv = document.createElement("div");
var currentDiv = document.getElementById("div1");
var winContent = document.createTextNode("5 points. Game End. You win");
var loseContent = document.createTextNode("5 points. Game End.ou lose");
var tieContent = document.createTextNode("It is a tie");



function getComputerChoice() {
    var randomNumber = Math.floor(Math.random()*3+1);
    if (randomNumber == 1 ){
        return 'Rock'; 
    }
    else if (randomNumber == 2) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return tie();
    }
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return lose();
    }
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return win(); 
    }
    if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return win();
    }
    if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return lose();
    }
    if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return lose();
    }
    if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return win();
    }


}var playerbtn = document.addEventListener("click", game );

function game(e) {
    var computerSelection = getComputerChoice();
    playerSelection = e.target.id;
    if (playerWin == 5) {
        newDiv.appendChild(winContent);
        document.body.insertBefore(newDiv, currentDiv);
    } else if (computerWin == 5) {
        newDiv.appendChild(loseContent);
        document.body.insertBefore(newDiv, currentDiv);
    } else {
        console.log(playRound(playerSelection, computerSelection));
    }
    
}

function tie() {
    return "It is a tie";
}

function win() {
    playerWin++;
    return "You win";
}

function lose() {
    computerWin++;
    return "You lose";
}






