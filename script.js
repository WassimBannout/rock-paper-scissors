/* Function to get a random choice between "rock", "paper" and "scissors" */
function getComputerChoice() {
    const num = Math.random() * 3;
    return num < 1 ? "rock" : num < 2 ? "paper" : "scissors";
}

function getHumanChoice() {
    return prompt("Enter your choice: (\"rock\", \"paper\" or \"scissors\")");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("Tie!");
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("End of game:\nFinal results:\n");
    if (humanScore === computerScore) {
        console.log("Tie!");
    } else if (humanScore > computerScore) {
        console.log("human wins!");
    } else {
        console.log("computer wins!");
    }
}

playGame();