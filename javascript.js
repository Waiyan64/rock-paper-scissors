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


}

function game() {
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("Choose your weapon!");
        var computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerWin == computerWin) {
        return "It is a tie";
    } else if (playerWin > computerWin) {
        return "You win this round";
    } else {
        return "You lose this round";
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

var playerWin = 0;
var computerWin = 0;
console.log(game());



