console.log("Hello, world!");
function getComputerChoice() {
	switch (true) {
		case Math.random() < 0.34:
			return "rock";
			break;
		case Math.random() < 0.67:
			return "paper";
			break;
		case Math.random() < 1:
			return "scissors";
			break;
		default:
			return "error";
			break;
	}
}
console.log(getComputerChoice());
function getHumanChoice() {
	let answer = prompt("What's your choice?");
	return answer;
}
// console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
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

// playRound(hunmanSelection, computerSelection);
function playGame() {
	for (let i = 0; i < 5; i++) {
		const hunmanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		console.log(playRound(hunmanSelection, computerSelection));
	}
	if (humanScore > computerScore) {
		return "You win!";
	} else if (humanScore < computerScore) {
		return "You lose!";
	}
}
console.log(playGame());
