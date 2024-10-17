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

function updateScoreBoard() {
  scoreBoard.textContent = `Round: ${roundNum} Player Score: ${humanScore} Computer Score: ${computerScore}`;
}

function checkGameWon() {
  if (humanScore === 5) {
    gameResults.textContent = "Congrats! You win :)";
    gameResults.style.fontSize = "80px";
    buttonContainer.removeChild(rockBtn);
    buttonContainer.removeChild(paperBtn);
    buttonContainer.removeChild(scissorsBtn);
  } else if (computerScore === 5) {
    gameResults.textContent = "Oh no! You lose :(";
    gameResults.style.fontSize = "80px";
    buttonContainer.removeChild(rockBtn);
    buttonContainer.removeChild(paperBtn);
    buttonContainer.removeChild(scissorsBtn);
  }
}

// Decide winner of round
function playRound(humanChoice, computerChoice) {
  roundNum += 1;
  // Win condition
  if (humanChoice === "Rock" && computerChoice === "Scissors"
    || humanChoice === "Scissors" && computerChoice === "Paper"
    || humanChoice === "Paper" && computerChoice === "Rock"
  ) {
    gameResults.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore += 1;
  // Lose condition
  } else if (humanChoice === "Rock" && computerChoice === "Paper"
    || humanChoice === "Scissors" && computerChoice === "Rock"
    || humanChoice === "Paper" && computerChoice === "Scissors"
  ) {
    gameResults.textContent = `Computer wins. ${computerChoice} beats ${humanChoice}`;
    computerScore += 1;
  // Tie condition
  } else {
    gameResults.textContent = "It's a tie.";
  }
  checkGameWon();
}

// Initialise score variables
let computerScore = 0;
let humanScore = 0;
let roundNum = 1;

//Initialse game elements
const gameContainer = document.querySelector(".game-container");
const buttonContainer = document.querySelector(".button-container");
const scoreBoard = document.querySelector(".scoreboard");
const gameResults = document.createElement("p");
gameResults.textContent = "Choose your weapon! First to five wins!";
gameContainer.appendChild(gameResults);
scoreBoard.textContent = `Round: ${roundNum} Player Score: ${humanScore} Computer Score: ${computerScore}`;

// Create rps buttons
const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
buttonContainer.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
buttonContainer.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
buttonContainer.appendChild(scissorsBtn);

// Add click event listeners and play game on click
rockBtn.addEventListener(
  "click", () => {
    playRound("Rock", getComputerChoice());
    updateScoreBoard();
  });
  
paperBtn.addEventListener(
  "click", () => {
    playRound("Paper", getComputerChoice());
    updateScoreBoard();
  });
    
scissorsBtn.addEventListener(
  "click", () => {
    playRound("Scissors", getComputerChoice());
    updateScoreBoard();
  });