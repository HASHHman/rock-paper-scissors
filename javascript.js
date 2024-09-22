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
