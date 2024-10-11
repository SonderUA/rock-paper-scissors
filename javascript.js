let humanScore = 0;
let computerScore = 0;

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

function chooseWinner(winner, looser, message) {
	if (winner === "rock" && looser === "scissors") {
		console.log(`${message} Rock beats Scissors`);
		winner++;
	} else if (winner === "scissors" && looser === "paper") {
		console.log(`${message} Scissors beats Paper`);
		winner++;
	} else if (winner === "paper" && looser === "rock") {
		console.log(`${message} Paper beats Rock`);
		winner++;
	}
}

function playRound(humanChoice, computerChoice) {
	chooseWinner(humanChoice, computerChoice, "You win!");
	chooseWinner(computerChoice, humanChoice, "You lose!");
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

// paper wins rock; rock wins scissors; scissors wins paper;
