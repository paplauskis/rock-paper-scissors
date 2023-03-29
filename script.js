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


