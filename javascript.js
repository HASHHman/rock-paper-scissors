function getComputerChoice() {
	randomInt = Math.floor(Math.random() * 3);
	switch (randomInt) {
		case 0:
			return "rock";
			break;
		case 1:
			return "paper";
			break;
		case 2:
			return "scissors";
			break;

		default:
			return "random integer isn't 0 or 1 or 2";
			break;
	}
}

let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

const pResult = document.querySelector("#result");
const spanHumanScore = document.querySelector("#humanScore");
const spanComputerScore = document.querySelector("#computerScore");
const buttonsContainer = document.querySelector("#buttonsContainer");
const finalResult = document.querySelector("#finalResult");
const resetButton = document.querySelector("#reset");

function playRound(humanChoice, computerChoice) {
	if (
		(humanChoice == "rock" && computerChoice == "scissors") ||
		(humanChoice == "paper" && computerChoice == "rock") ||
		(humanChoice == "scissors" && computerChoice == "paper")
	) {
		humanScore++;
		pResult.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
		spanHumanScore.textContent = humanScore;
		spanComputerScore.textContent = computerScore;
	} else if (
		(humanChoice == "rock" && computerChoice == "paper") ||
		(humanChoice == "paper" && computerChoice == "scissors") ||
		(humanChoice == "scissors" && computerChoice == "rock")
	) {
		computerScore++;
		pResult.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
		spanHumanScore.textContent = humanScore;
		spanComputerScore.textContent = computerScore;
	} else {
		pResult.textContent = `It's a draw! ${humanChoice} draws ${computerChoice}.`;
		spanHumanScore.textContent = humanScore;
		spanComputerScore.textContent = computerScore;
	}
	roundsPlayed++;
}

buttonsContainer.addEventListener("click", (event) => {
	const target = event.target;

	switch (target.id) {
		case "rock":
			playRound("rock", getComputerChoice());
			break;
		case "paper":
			playRound("paper", getComputerChoice());
			break;
		case "scissors":
			playRound("scissors", getComputerChoice());
			break;
	}

	if (roundsPlayed >= 5) {
		buttonsContainer.style.display = "none";
		resetButton.style.display = "inline-block";
		if (humanScore > computerScore) {
			finalResult.textContent = `You Win!
					Your score: ${humanScore}
					Computer score: ${computerScore}`;
		} else if (computerScore > humanScore) {
			finalResult.textContent = `You Lose!
					Your score: ${humanScore}
					Computer score: ${computerScore}`;
		} else {
			finalResult.textContent = `It's a draw!
				Your score: ${humanScore}
				Computer score: ${computerScore}`;
		}
	}
});

resetButton.addEventListener("click", () => {
	roundsPlayed = 0;
	humanScore = 0;
	computerScore = 0;
	buttonsContainer.style.display = "block";
	resetButton.style.display = "none";
	finalResult.textContent = "";
	pResult.textContent = "";
	spanHumanScore.textContent = humanScore;
	spanComputerScore.textContent = computerScore;
});
