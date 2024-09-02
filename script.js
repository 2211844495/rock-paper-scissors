const humanScoreElement = document.getElementById("humanScore");
const computerScoreElement = document.getElementById("computerScore");

let humanScore = parseInt(humanScoreElement.innerText, 10) || 0;
let computerScore = parseInt(computerScoreElement.innerText, 10) || 0;

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

  humanScoreElement.innerText = humanScore;
  computerScoreElement.innerText = computerScore;
  return message;
}

const choices = ["rock", "paper", "scissors"];
let computerC = document.getElementById("computerChoice");
let humanSelection = "";
function getComputerChoice(choices) {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  if (choice === "rock") {
    computerC.innerHTML = rock.innerHTML;
    computerC.style = rock.style;
  } else if (choice === "paper") {
    computerC.innerHTML = paper.innerHTML;
    computerC.style = paper.style;
  } else {
    computerC.innerHTML = scissors.innerHTML;
    computerC.style = scissors.style;
  }
  return choice;
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("mousedown", () => setHumanSelection("rock"));
paper.addEventListener("mousedown", () => setHumanSelection("paper"));
scissors.addEventListener("mousedown", () => setHumanSelection("scissors"));

function setHumanSelection(selection) {
  humanSelection = selection;
  document.getElementById("result").innerText = playRound(humanSelection, getComputerChoice(choices));
}


/* if (humanScore > computerScore) {
    console.log("Congrats :)! you won with a " + humanScore + " score!");
} else if (humanScore < computerScore) {
    console.log("Sorry :(! you lost with a " + humanScore + " score.");
} else {
    console.log("You did good! but it's a round game :).");
}*/
