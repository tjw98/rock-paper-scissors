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

// Decide winner of round
function playRound(humanChoice, computerChoice) {
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

// Initialise score variables
let computerScore = 0;
let humanScore = 0;

// Create game container
const gameContainer = document.createElement("div");
document.body.appendChild(gameContainer);

// Create rps buttons
const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
gameContainer.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
gameContainer.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
gameContainer.appendChild(scissorsBtn);

// Add click event listeners and play game on click
rockBtn.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("Paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("Scissors", getComputerChoice()));