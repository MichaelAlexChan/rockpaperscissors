function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1
}

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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log(`It's a tie!`)
    }
    else if (playerWin(playerChoice, computerChoice)) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`)
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
    }
}

const playerChoice = getHandChoice(1)
const computerChoice = getHandChoice(getComputerChoice())

console.log(playerChoice)
console.log(computerChoice)

playRound(playerChoice, computerChoice)