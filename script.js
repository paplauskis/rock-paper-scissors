let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = 
        Math.floor(Math.random() * 3 + 1)
    if (computerChoice == 1) {
        let choice = "rock"
        return choice
    } else if (computerChoice == 2) {
        let choice = "paper"
        return choice
    } else if(computerChoice == 3) {
        let choice = "scissors"
        return choice;
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    if (computerSelection == playerSelection) {
        console.log(`It is a tie! You both picked ${playerSelection}!`)
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") 
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++
        console.log(`You win, ${playerSelection} beats ${computerSelection}!`)
    } else {
        computerScore++
        console.log(`You lose, ${computerSelection} beats ${playerSelection}!`)
        
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose your weapon!", "Rock, Paper, Scissors").toLowerCase()
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    }
    if (playerScore > computerScore){
        return "You beat the computer!"
    } else if (playerScore < computerScore) {
        return "You lost to the computer"
    } else {
        return "This game is a tie!"
    }
    

}




//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

//console.log(game())
console.log(game())