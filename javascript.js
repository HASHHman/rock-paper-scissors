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

function getUserChoice() {
    return window.prompt("Please input your action(\"rock\" \"paper\" \"scissors\"): ", "rock");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice = "", computerChoice = "") {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerChoice++;
    } else {
        console.log(`It's a draw! ${humanChoice} draw ${computerChoice}`)
    }
}
