let humanScore = 0;
let computerScore = 0;
let result = document.querySelector("#result");
let score = document.querySelector("#score");

const buttons = document.querySelectorAll("button");
const winningConditions = {
	rock: "scissors",
	scissors: "paper",
	paper: "rock",
};

function getComputerChoice() {
	return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function checkHumanChoice(choice) {
	switch (choice) {
		case "rock":
		case "paper":
		case "scissors":
			return choice;
		default:
			console.error("Invalid choice");
			return null;
	}
}

function showWinner(winner, looser, humanIsWinner = true) {
	if (winningConditions[winner] === looser) {
		result.textContent = `${humanIsWinner ? "You win!" : "You lose!"} ${
			winner.charAt(0).toUpperCase() + winner.slice(1) // Capitalize winner's choice
		} beats ${looser}`;
		humanIsWinner ? humanScore++ : computerScore++;
	}
	if (!humanIsWinner) {
		winner === looser
			? (result.textContent = "A draw! What a surprise")
			: null;
	}
}

function playRound(humanChoice, computerChoice) {
	// Check if the user won the round
	showWinner(humanChoice, computerChoice);
	// Check if the computer won the round or draw
	showWinner(computerChoice, humanChoice, (humanIsWinner = false));
}

function updateScore() {
	score.textContent = `Score: Player(${humanScore}) and Computer(${computerScore})`;
}

for (const button of buttons) {
	button.addEventListener("click", (event) => {
		let computerChoice = getComputerChoice();
		let humanChoice = checkHumanChoice(
			event.target.textContent.toLowerCase()
		);

		if (humanChoice === null) {
			console.error("Invalid Choice!");
		}
		playRound(humanChoice, computerChoice);
		updateScore();

		if (humanScore === 5 || computerScore === 5) {
			result.style.fontWeight = "bold";
			if (humanScore > computerScore) {
				result.textContent = "Human wins!";
			} else {
				result.textContent = "Computer wins!";
			}
		}
	});
}
