console.log("Hello, world!");
function getComputerChoice() {
	switch (true) {
		case Math.random() < 0.34:
			return "rock";
		case Math.random() < 0.67:
			return "paper";
		case Math.random() < 1:
			return "scissors";
		default:
			return "error";
	}
}
// console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;
let round = 0;
function playRound(humanChoice, computerChoice) {
  round++;
	humanChoice = humanChoice.toLowerCase();
	computerChoice = computerChoice.toLowerCase();
	const choices = ["rock", "paper", "scissors"];
	if (!choices.includes(humanChoice) || !choices.includes(computerChoice)) {
		return "error";
	}
	const paperBeatsRock = "Paper beats rock!";
	const rockBeatsScissors = "Rock beats scissors!";
	const scissorsBeatsPaper = "Scissors beats paper!";
	if (humanChoice === computerChoice) {
		return "It's a tie!";
	} else if (humanChoice === "rock") {
		if (computerChoice === "paper") {
			computerScore++;
			return paperBeatsRock;
		} else {
			humanScore++;
			return rockBeatsScissors;
		}
	} else if (humanChoice === "paper") {
		if (computerChoice === "scissors") {
			computerScore++;
			return scissorsBeatsPaper;
		} else {
			humanScore++;
			return paperBeatsRock;
		}
	} else if (humanChoice === "scissors") {
		if (computerChoice === "rock") {
			computerScore++;
			return rockBeatsScissors;
		} else {
			humanScore++;
			return scissorsBeatsPaper;
		}
	}
}
buttonRock = document.createElement("button");
buttonRock.textContent = "rock";
buttonPaper = document.createElement("button");
buttonPaper.textContent = "paper";
buttonScissors = document.createElement("button");
buttonScissors.textContent = "scissors";
document.body.appendChild(buttonRock);
document.body.appendChild(buttonPaper);
document.body.appendChild(buttonScissors);

const ROUND=5;
function displayResult(humanChoice) {
  if (round < ROUND) {
    const result = document.createElement("p");
    result.textContent = playRound(humanChoice, getComputerChoice());
    document.body.appendChild(result);
  }
  else {
    const result = document.createElement("p");
    result.textContent = playGame();
    document.body.appendChild(result);
  }
}

buttonRock.addEventListener("click", () => displayResult("rock"));
buttonPaper.addEventListener("click", () => displayResult("paper"));
buttonScissors.addEventListener("click", () => displayResult("scissors"));

function playGame() {
	if (humanScore > computerScore) {
		return "你赢了！";
	} else if (humanScore < computerScore) {
		return "你输了！";
	} else {
    return "平局！";
  }
}
