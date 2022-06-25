const Rock = "rock";
const Paper = "paper";
const Scissors = "scissors";

function userChoice() {
  const userChoice = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase();
  return userChoice
}

function compChoice() {
  let compChoice = Math.random();
  if (compChoice < 0.34) {
    compChoice = "rock";
  } else if (compChoice <= 0.67) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }
  return compChoice
}

function playRound(userChoice, compChoice) {
  //Rock Choice
  if (userChoice == "rock" && compChoice == "scissors") {
    return "You Win! rock beats scissors!";
  } else if (userChoice == "rock" && compChoice == "paper") {
    return "Loser! paper Beats rock";
  } else if (userChoice == "rock" && compChoice == "rock") {
    return "It's a Draw";
  }
  //paper Choice
  else if (userChoice == "paper" && compChoice == "rock") {
    return "You Win! paper beats rock";
  } else if (userChoice == "paper" && compChoice == "scissors") {
    return "You Lose! scissors beats paper";
  } else if (userChoice == "paper" && compChoice == "paper") {
    return "It's a Draw";
  }
  //scissors Choice
  else if (userChoice == "scissors" && compChoice == "paper") {
    return "You win! scissors beat paper";
  } else if (userChoice == "scissors" && compChoice == "rock") {
    return "You Lose! rock beats scissors";
  } else if (userChoice == "scissors" && compChoice == "scissors") {
    return "It's a Draw";
  } else {
    return "Something Went Wrong";
  }
}

console.log(playRound(userChoice(), compChoice()))