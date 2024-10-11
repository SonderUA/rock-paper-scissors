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

function playRound(humanChoice, computerChoice) {
	if (humanChoice === "rock" && computerChoice === "scissors") {
		console.log("You win! Rock beats Scissors");
		humanScore++;
	} else if (humanChoice === "scissors" && computerChoice === "paper") {
		console.log("You win! Scissors beats Paper");
		humanScore++;
	} else if (humanChoice === "paper" && computerChoice === "rock") {
		console.log("You win! Paper beats Rock");
		humanScore++;
	} else if (humanChoice === "scissors" && computerChoice === "rock") {
		console.log("You lose! Rock beats Scissors");
		computerScore++;
	} else if (humanChoice === "paper" && computerChoice === "scissors") {
		console.log("You lose! Scissors beats Paper");
		computerScore++;
	} else if (humanChoice === "rock" && computerChoice === "paper") {
		console.log("You lose! Paper beats Rock");
		computerScore++;
	}
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		let humanChoice = getHumanChoice();
		let computerChoice = getComputerChoice();

		playRound(humanChoice, computerChoice);
	}
	console.log(humanScore > computerScore ? "Human wins!" : "Computer wins!");
}

// paper wins rock; rock wins scissors; scissors wins paper;
