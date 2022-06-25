let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let allChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    return randomChoice
}


function game() {
    while (playerScore < 5 && computerScore < 5) {
        const userChoice = prompt("Would you like to choose Rock, Paper or Scissors?")
        const compChoice = computerPlay();
        alert(playRound(userChoice, compChoice));
    }
}


function playRound(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return "Tie game!"
    } else if (userChoice === "Rock" && compChoice === "Scissors") {
        playerScore += 1;
        return `You win! ${userChoice} beats ${compChoice}!`
        
    } else if (userChoice === "Paper" && compChoice === "Rock") {
        playerScore += 1;
        return `You win! ${userChoice} beats ${compChoice}!`
        
    } else if (userChoice === "Scissors" && compChoice === "Paper") {
        playerScore += 1;
        return `You win! ${userChoice} beats ${compChoice}!`

    } else {
        computerScore += 1;
        return `You lose! ${compChoice} beats ${userChoice}`
    }
}

function winGame() {
    if (playerScore === 5) {
        return "You win!"
    } else if (computerScore === 5) {
        return "You lose!"
    }
}

game();

console.log(playerScore);
console.log(computerScore);
