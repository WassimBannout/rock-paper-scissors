let humanScore = 0;
let computerScore = 0;

const results = document.getElementById("results");

// Function to get a random choice between "rock", "paper" and "scissors" 
function getComputerChoice() {
    const num = Math.random() * 3;
    return num < 1 ? "rock" : num < 2 ? "paper" : "scissors";
}

function playRound(humanChoice, computerChoice) {
    let resultText = "";
    if (humanChoice === computerChoice) {
        resultText = `Tie! You both chose ${humanChoice}.`;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        resultText = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    
    // Update the results on the page
    results.innerHTML = `
        <p>${resultText}</p>
        <p>Score — You: ${humanScore}, Computer: ${computerScore}</p>
    `;
    // Check for winner
    if (humanScore === 5 || computerScore === 5) {
        const finalWinner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        results.innerHTML += `<p><strong>${finalWinner}</strong></p>`;

        // Disable buttons
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
}

// Add event listeners
document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
