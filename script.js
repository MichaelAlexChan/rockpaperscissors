//Global variable to track the round number
let currentRound = 0;

//Returns a value between 1 - 3 that represents the computer hand choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1
}

//Returns a string for the hand choice based on the given number argument
function getHandChoice(number) {
    let hand
    let convertNumber = Number(number)
    if (convertNumber === 1) {
        hand = "rock"
    }
    else if (convertNumber === 2) {
        hand = "paper"
    }
    else if (convertNumber === 3) {
        hand = "scissors"
    }
    else {
        hand = "invalid"
    }
    return hand
}

//Compares the player's choice to the computer's. If the player won, return true. Otherwise, return false
function playerWin(playerChoice, computerChoice) {
    let playerWin
    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            playerWin = false
        }
        else {
            playerWin = true
        }
    }

    else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            playerWin = false
        }
        else {
            playerWin = true
        }
    }

    else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            playerWin = false
        }
        else {
            playerWin = true
        }
    }

    return playerWin
}

//Plays a round of rock, paper scissors. Calls the PlayerWin function and logs the winner in the console. Returns 1 for player win, 0 for computer win
function playRound(playerChoice, computerChoice) {
    let roundResult;
    let winner = 0;
    if (playerChoice === computerChoice) {
        roundResult = `It's a tie!`
    }
    else if (playerWin(playerChoice, computerChoice)) {
        roundResult = `You win! ${(playerChoice.charAt(0).toUpperCase()) + playerChoice.slice(1)} beats ${(computerChoice.charAt(0).toUpperCase()) + computerChoice.slice(1)}`;
        winner = 1;
    }
    else {
        roundResult = `You lose! ${(computerChoice.charAt(0).toUpperCase()) + computerChoice.slice(1)} beats ${(playerChoice.charAt(0).toUpperCase()) + playerChoice.slice(1)}`;
        winner = -1
    }

    resultText.textContent = roundResult;
    return winner;
}

//Plays 5 rounds of rock, paper, scissors. Calls the playRound function and records the winner of that round in a variable. print the winner of five rounds in the console
function game(item) {
    currentRound += 1;
    let playerWins = 0
    let computerWins = 0

    let playerChoice = item;

    let computerChoice = getHandChoice(getComputerChoice())
    roundNumber.textContent = `Round ${currentRound}:`;

    let playResult = playRound(playerChoice, computerChoice)

    if (playResult === 1) {
        playerWins++
    }
    else if (playResult === -1) {
        computerWins++
    }


    if (playerWins === computerWins) {
        console.log("Tie!")
    }
    else if (playerWins > computerWins) {
        console.log("Player wins")
    }
    else {
        console.log("Computer wins")
    }
}

let roundNumber = document.createElement('h1')
roundNumber.setAttribute('id', 'roundNumber');
document.body.appendChild(roundNumber);

let resultNode = document.createElement('div');
resultNode.setAttribute('id', 'resultdiv');
let resultText = document.createElement('p');
resultNode.appendChild(resultText);
document.body.appendChild(resultNode);

let buttons = document.querySelectorAll('.btn');

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        game(item.id)
     })
})




