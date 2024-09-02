let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice(choices)));
  }
}

function playRound(userChoice, computerChoice) {
  var message;
  if (userChoice === "rock") {
    if (computerChoice === "rock") {
      message = "Equal round.";
    } else if (computerChoice === "paper") {
      message = "You lose! Paper beats Rock!";
      computerScore++;
    } else {
      message = "You win! Rock beats Scissors!";
      humanScore++;
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "paper") {
      message = "Equal round.";
    } else if (computerChoice === "rock") {
      message = "You win! Paper beats Rock!";
      humanScore++;
    } else {
      message = "You lose! Scissors beats Paper!";
      computerScore++;
    }
  } else {
    // human played scissors
    if (computerChoice === "scissors") {
      message = "Equal round.";
    } else if (computerChoice === "rock") {
      message = "You lose! Rock beats Scissors!";
      computerScore++;
    } else {
      message = "You win! Scissors beats Paper!";
      humanScore++;
    }
  }
  return message;
}

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let choice = prompt("Your Selection: ").toLowerCase();
  return choice;
}



playGame();
if (humanScore > computerScore) {
    console.log("Congrats :)! you won with a " + humanScore + " score!");
} else if (humanScore < computerScore) {
    console.log("Sorry :(! you lost with a " + humanScore + " score.");
} else {
    console.log("You did good! but it's a round game :).");
}