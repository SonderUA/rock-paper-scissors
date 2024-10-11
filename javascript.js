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
