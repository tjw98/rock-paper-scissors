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
function playRound(humanChoice, computerChoice) {
  // Win condition
  if (humanChoice === "Rock" && computerChoice === "Scissors"
    || humanChoice === "Scissors" && computerChoice === "Paper"
    || humanChoice === "Paper" && computerChoice === "Rock"
  ) {
    console.log("You win!");
    return humanScore += 1;
  // Lose condition
  } else if (humanChoice === "Rock" && computerChoice === "Paper"
    || humanChoice === "Scissors" && computerChoice === "Rock"
    || humanChoice === "Paper" && computerChoice === "Scissors"
  ) {
    console.log("You lose.");
    return computerScore += 1;
  // Tie condition
  } else {
    console.log("It's a tie.");
  }
}

// Initialise score variables
let computerScore = 0;
let humanScore = 0;

// Assign computers choice 
let computerChoice = getComputerChoice();

// Assign humans choice
let humanChoice = getHumanChoice();

// Print human and computer choices to console
console.log(humanChoice);
console.log(computerChoice);

// Play round of game
playRound(humanChoice, computerChoice);