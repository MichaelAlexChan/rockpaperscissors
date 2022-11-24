//Returns a value between 1 - 3 that represents the computer hand choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1
}

//Returns a string for the hand choice based on the given number argument
function getHandChoice(number) {
    let hand
    if (number === 1) {
        hand = "Rock"
    }
    else if (number === 2) {
        hand = "Paper"
    }
    else if (number === 3) {
        hand = "Scissors"
    }
    else {
        hand = "Invalid"
    }
    return hand
}

//Compares the player's choice to the computer's. If the player won, return true. Otherwise, return false
function playerWin(playerChoice, computerChoice) {
    let playerWin
    if (playerChoice === "Rock") {
        if (computerChoice === "Paper"){
            playerWin = false
        }
        else {
            playerWin = true
        }
    }

    else if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            playerWin = false
        }
        else {
            playerWin = true
        }
    }

    else if (playerChocie === "Scissors") {
        if (computerChoice === "Rock") {
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
    if (playerChoice === computerChoice) {
        console.log(`It's a tie!`)
        return -1
    }
    else if (playerWin(playerChoice, computerChoice)) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`)
        return 1
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`) 
        return 0
    }
}

//Plays 5 rounds of rock, paper, scissors. Calls the playRound function and records the winner of that round in a variable. print the winner of five rounds in the console
function game() {
    let playerWins = 0
    let computerWins = 0

    const playerChoice = getHandChoice(1)

    for (let i = 1; i <= 5; i++) {
        let computerChoice = getHandChoice(getComputerChoice())
        console.log(`Round ${i}:`)

        let playResult = playRound(playerChoice, computerChoice)

        if (playResult === 1) {
            playerWins++
        }
        else if (playResult === 0) {
            computerWins++
        }
        else {
            continue
        }
    }

    if (playerWins > computerWins) {
        console.log("Player wins")
    }
    else {
        console.log("Computer wins")
    }
    
}

game()