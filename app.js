const choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
  //Computer choices
 let random = choices[Math.floor(Math.random() * (choices.length))];
 console.log(random);
 return random;
}

function userPlay() {
  //Player choices
  let input = prompt("Please type rock, paper or scissors into the box");
  console.log(input);
  return input.toLowerCase();
  
}

function game() {
  //5 rounds of the game
  for (let i = 0; i < 5; i++) {
    let result = playRound(i);
    console.log(result);
    console.log(playerScore);
    console.log(computerScore)
    if (playerScore >= 3) {
      console.log('----------------You win the game!-----------------')
    } else if (computerScore >=3) {
      console.log('----------------Computer wins the game!----------------')
    }
    }
 }


function playRound(computerSelection, playerSelection,) {
  computerSelection = computerPlay();
  playerSelection = userPlay();
 
if (playerSelection === computerSelection) {
  return "Draw" }
if (playerSelection === 'rock' && computerSelection === 'paper') {
  computerScore ++ ;
  return 'You lose, paper beats rock!';
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
  computerScore ++ ;
  return 'You lose, scissors beat paper!';
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
  computerScore ++ ;
  return 'You lose, rock beats scissors!';
} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
  playerScore ++ ;
  return 'You win, rock beats scissors!';
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
  playerScore ++ ;
  return 'You win, paper beats rock!';
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
  playerScore ++ ;
  return 'You win, scissors beat paper!';
}
}

game();
 