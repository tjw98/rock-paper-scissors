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

// Assign computers choice 
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();