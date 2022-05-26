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
let userWin = 0;
let botWin = 0;
let winner = '';

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

playAgainBtn.addEventListener('click', playAgain);



const game = () => {
	getRandomNumber();
	compareMoves(userInput);
};

const showPoint = () => points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
showPoint();

function getRandomNumber() {
	rndm = Math.floor(Math.random() * 3) + 1; // gets a random number from 1 to 3

	function assignComputerMove() { // assigns every number from 1 to 3 to a player move
		if (rndm == 1) botMove = 'rock';
		if (rndm == 2) botMove = 'paper';
		if (rndm == 3) botMove = 'scissors';
	}
	assignComputerMove();
}

function showMessage() {
	if (userWin == 5) {
		finalOutcome.textContent = 'You won against the computer! Well played.';
		playAgainBtn.removeAttribute('style', 'visibility: hidden;');
		gameButtons.forEach(btn => btn.setAttribute('disabled', 'disabled'));
		outcome.textContent = '';
	} else if (botWin == 5) {
		finalOutcome.textContent = 'You lost to the computer. Better luck next time!';
		playAgainBtn.removeAttribute('style', 'visibility: hidden;');
		gameButtons.forEach(btn => btn.setAttribute('disabled', 'disabled'));
		outcome.textContent = '';
	} 
	
	if (botWin == 4 && winner == 'computer') {outcome.textContent = 'Come on! You got this!';}
	else if (userWin == 4 && winner == 'human') {outcome.textContent = 'You\'re so close!';}
	else if ((botWin == 3 || botWin == 2 || botWin == 1) && winner == 'computer') {outcome.textContent = 'Computer won this round.';}
	else if ((userWin == 3 || userWin == 2 || userWin == 1) && winner == 'human') {outcome.textContent = 'You won this round.';}
	else if (winner == 'tie') {outcome.textContent = 'Tie.';}
}

function compareMoves(userInput) {

	if (botMove == 'rock') {
		if (userInput == 'paper') {
			userWin++;
			winner = 'human';
			showPoint();
			showMessage();
			return;
		} else if (userInput == 'scissors') {
			botWin++;
			winner = 'computer';
			showPoint();
			showMessage();
			return;
		} else if (userInput == 'rock') {
			winner = 'tie';
			showPoint();
			showMessage();
			return;
		}
	} 
	
	else if (botMove == 'paper') {
		if (userInput == 'scissors') {
			userWin++;
			winner = 'human';
			showPoint();
			showMessage();
			return;
		} else if (userInput == 'rock') {
			botWin++;
			winner = 'computer';
			showPoint();
			showMessage();
			return;
		} else if (userInput == 'paper') {
			winner = 'tie';
			showPoint();
			showMessage();
			return;
		}
	} 
	
	else {
		if (userInput == 'rock') {
			userWin++;
			winner = 'human';
			showPoint();
			showMessage();
			return;
		} else if (userInput == 'paper') {
			botWin++;
			winner = 'computer';
			showPoint();
			showMessage();
			return;
		} else if (userInput == 'scissors') {
			winner = 'tie';
			showPoint();
			showMessage();
			return;
		}
	}
}

function playAgain() {
	userWin = 0;
	botWin = 0;
	showPoint();
	playAgainBtn.setAttribute('style', 'visibility: hidden;');
	finalOutcome.textContent = '';
	gameButtons.forEach(btn => btn.removeAttribute('disabled'));
}