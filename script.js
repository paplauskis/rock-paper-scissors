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
        const weapons = document.querySelector('.weapons')
        weapons.textContent = "It is a tie!"

        const description = document.querySelector('.description');
        description.textContent = `You both picked ${playerSelection}`;
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") 
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++
        const weapons = document.querySelector('.weapons')
        weapons.textContent = `You win!`

        const description = document.querySelector('.description');
        description.textContent = `${playerSelection} beats ${computerSelection}`

        const pScore = document.querySelector('.player-score')
        pScore.innerText = `Player: ${playerScore}`
    } else {
        computerScore++
        const weapons = document.querySelector('.weapons')
        weapons.textContent = "Computer wins!"

        const description = document.querySelector('.description');
        description.textContent = `${computerSelection} beats ${playerSelection}`;

        const cScore = document.querySelector('.computer-score')
        cScore.innerText = `Computer: ${computerScore}`
    }
    checkWinner(playerScore, computerScore);
}

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

btnRock.addEventListener('click', () => playRound(playerSelection = "rock"));
btnPaper.addEventListener('click', () => playRound(playerSelection = "paper"));
btnScissors.addEventListener('click', () => playRound(playerSelection = "scissors"));



function checkWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        swal('You won!', 'Computer didn\'t stand a chance', {
            button: "Damn right!"
        });
        const weapons = document.querySelector('.weapons')
    weapons.textContent = "Choose your weapon"
    
    const description = document.querySelector('.description');
        description.textContent = `First to score 5 points wins`;
        resetScore()
    }
    if (computerScore === 5) {
        swal('Computer won!', 'Up your game!', {
            buttons: [ 'Nah I\'m out',"I will!"]
        })

        const weapons = document.querySelector('.weapons')
    weapons.textContent = "Choose your weapon"
    
    const description = document.querySelector('.description');
        description.textContent = `First to score 5 points wins`;
        resetScore()
    }
    
}
function resetScore() {
    playerScore = 0;
    computerScore = 0;
    const cScore = document.querySelector('.computer-score')
    cScore.innerText = `Computer: ${computerScore}`

    const pScore = document.querySelector('.player-score')
    pScore.innerText = `Player: ${playerScore}`

}