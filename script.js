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
        playerSelection = playerSelection.toLowerCase()
        if (computerSelection == playerSelection) {
            return "It is a tie!"
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            return "You win, rock beats scissors!"
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            return "You win, paper beats rock!"
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            return "You win, scissors beats paper!"
        } else {
            return "You lose, up your game!"
        }
    } 
    