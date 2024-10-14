let humanScore = 0;
let computerScore = 0;

const winningConditions = {
	rock: "scissors",
	scissors: "paper",
	paper: "rock",
};

function getComputerChoice() {
	return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
	let choice = prompt("Your choice: ").toLowerCase();

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
		console.log(
			`${humanIsWinner ? "You win!" : "You lose!"} ${
				winner.charAt(0).toUpperCase() + winner.slice(1) // Capitalize winner's choice
			} beats ${looser}`
		);
		humanIsWinner ? humanScore++ : computerScore++;
	}
}

function playRound(humanChoice, computerChoice) {
	// Check if the user won the round
	showWinner(humanChoice, computerChoice);
	// Check if the computer won the round
	showWinner(computerChoice, humanChoice, (humanIsWinner = false));
	if (computerChoice === humanChoice) {
		console.log("A draw! What a surprise");
	}
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		let humanChoice = getHumanChoice();
		let computerChoice = getComputerChoice();

		playRound(humanChoice, computerChoice);
	}

	console.log(
		humanScore > computerScore
			? "Human wins!"
			: humanScore === computerScore
			? "A draw!"
			: "Computer wins!"
	);
}
