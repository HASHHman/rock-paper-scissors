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

function getHumanChoice() {
	return window.prompt("Please input your action: ", "rock");
}

function PlayGame(params) {
	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanChoice, computerChoice) {
		humanChoice = humanChoice.toLowerCase();

		if (
			(humanChoice == "rock" && computerChoice == "scissors") ||
			(humanChoice == "paper" && computerChoice == "rock") ||
			(humanChoice == "scissors" && computerChoice == "paper")
		) {
			humanScore++;
			console.log(`You win this round! ${humanChoice} beats ${computerChoice}.
                Your score: ${humanScore}
                Computer score: ${computerScore}`);
		} else if (
			(humanChoice == "rock" && computerChoice == "paper") ||
			(humanChoice == "paper" && computerChoice == "scissors") ||
			(humanChoice == "scissors" && computerChoice == "rock")
		) {
			computerScore++;
			console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.
                Your score: ${humanScore}
                Computer score: ${computerScore}`);
		} else {
			console.log(`It's a draw! ${humanChoice} draws ${computerChoice}.
                Your score: ${humanScore}
                Computer score: ${computerScore}`);
		}
	}

	for (let i = 0; i < 5; i++) {
		const humanChoice = getHumanChoice();
		const computerChoice = getComputerChoice();

		playRound(humanChoice, computerChoice);
	}
	
	if (humanScore > computerScore) {
		console.log(`You Win!
                Your score: ${humanScore}
                Computer score: ${computerScore}`);
	} else if (computerScore > humanScore) {
		console.log(`You Lose!
                Your score: ${humanScore}
                Computer score: ${computerScore}`);
	} else {
		console.log(`It's a draw!
			Your score: ${humanScore}
			Computer score: ${computerScore}`);
	}
}
