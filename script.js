function getComputerChoice() {
  // Generates a random number between 1 and 3
  let n = Math.floor(Math.random() * 3 + 1);
  
  // Return computer choice based on random number
  if (n === 1) {
    return "Rock";
  } else if (n === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Return human choice based on prompt
function getHumanChoice() {
  let choice = prompt("Choice: ").toLowerCase()
  let formChoice = choice[0].toUpperCase() + choice.slice(1);
  return formChoice;
}

// Decide winner of round
function playRound(humanChoice, computerChoice, roundNumber) {
  console.log(`Round ${roundNumber}:`);
  // Win condition
  if (humanChoice === "Rock" && computerChoice === "Scissors"
    || humanChoice === "Scissors" && computerChoice === "Paper"
    || humanChoice === "Paper" && computerChoice === "Rock"
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore += 1;
  // Lose condition
  } else if (humanChoice === "Rock" && computerChoice === "Paper"
    || humanChoice === "Scissors" && computerChoice === "Rock"
    || humanChoice === "Paper" && computerChoice === "Scissors"
  ) {
    console.log(`Computer wins. ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
  // Tie condition
  } else {
    console.log("It's a tie.");
  }
}

function playGame() {
  for(let i = 0; i < 5; i++){
    playRound(getHumanChoice(), getComputerChoice(), roundNumber);
    roundNumber += 1;
  }

  if (humanScore > computerScore) {
    console.log(`You win the game ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game ${humanScore} to ${computerScore}`);
  } else {
    console.log("The game is a tie, what are the odds.");
  }
}

// Initialise score variables
let computerScore = 0;
let humanScore = 0;
let roundNumber = 1;

playGame();