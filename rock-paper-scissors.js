const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const outcome = document.querySelector('#outcome');
const points = document.querySelector('#points');
const finalOutcome = document.querySelector('#final-outcome');
const playAgainBtn = document.querySelector('#play-again');
const gameButtons = document.querySelectorAll('.game-button');

let userInput;
let rndm;
let botMove;

rockBtn.addEventListener('click', () => {
	userInput = 'rock';
	game();
});
paperBtn.addEventListener('click', () => {
	userInput = 'paper';
	game();
});
scissorsBtn.addEventListener('click', () => {
	userInput = 'scissors';
	game();
});

let userWin = 0;
let botWin = 0;
points.textContent = `Human: ${userWin} | Computer: ${botWin}`;

playAgainBtn.addEventListener('click', playAgain);



function game() {
	getRandomNumber();
	compareMoves(userInput);
}

function getRandomNumber() {
	rndm = Math.floor(Math.random() * 3) + 1; // gets a random number from 1 to 3

	function assignComputerMove() { // assigns every number from 1 to 3 to a player move
		if (rndm == 1) botMove = 'rock';
		if (rndm == 2) botMove = 'paper';
		if (rndm == 3) botMove = 'scissors';
	}
	assignComputerMove();
}

function ifFiveWins() {
	if (userWin == 5) {
		finalOutcome.textContent = 'Congrats! You won against the computer!';
		playAgainBtn.removeAttribute('hidden');
		gameButtons.forEach(btn => btn.setAttribute('disabled', 'disabled'));
	} else if (botWin == 5) {
		finalOutcome.textContent = 'feelsbadman. Better luck next time.';
		playAgainBtn.removeAttribute('hidden');
		gameButtons.forEach(btn => btn.setAttribute('disabled', 'disabled'));
	}
}

function compareMoves(userInput) {

	if (botMove == 'rock') {
		if (userInput == 'paper') {
			userWin++;
			points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
			ifFiveWins();
			return;
		} else if (userInput == 'scissors') {
			botWin++;
			points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
			ifFiveWins();
			return;
		} else if (userInput == 'rock') {
			points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
			ifFiveWins();
			return;
		}
	} 
	
	else if (botMove == 'paper') {
		if (userInput == 'scissors') {
			userWin++;
			points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
			ifFiveWins();
			return;
		} else if (userInput == 'rock') {
			botWin++;
			points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
			ifFiveWins();
			return;
		} else if (userInput == 'paper') {
			points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
			ifFiveWins();
			return;
		}
	} 
	
	else {
		if (userInput == 'rock') {
			userWin++;
			points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
			ifFiveWins();
			return;
		} else if (userInput == 'paper') {
			botWin++;
			points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
			ifFiveWins();
			return;
		} else if (userInput == 'scissors') {
			points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
			ifFiveWins();
			return;
		}
	}
}

function playAgain() {
	userWin = 0;
	botWin = 0;
	playAgainBtn.setAttribute('hidden', 'hidden');
	finalOutcome.textContent = '';
	gameButtons.forEach(btn => btn.removeAttribute('disabled'));
}