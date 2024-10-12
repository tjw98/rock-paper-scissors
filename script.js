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

function getHumanChoice() {
  return prompt("Choice: ").toLowerCase();
}


// Initialise score variables
let computerScore = 0;
let humanScore = 0;

// Assign computers choice 
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();