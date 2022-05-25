const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const outcome = document.querySelector('#outcome');
let outcomeText = outcome.textContent;
const points = document.querySelector('#points');
const finalOutcome = document.querySelector('#final-outcome');
const playAgainBtn = document.querySelector('#play-again');
const gameButtons = document.querySelectorAll('.game-button');

let userInput;
let rndm;
let botMove;
let userWin = 0;
let botWin = 0;

// switch (true) { // NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 	case botWin == 4:
// 		outcomeText = 'Come on! You got this!';
// 		break;
// 	case userWin == 4:
// 		outcomeText = 'You\'re so close!';
// 		break;
// 	case botWin == 3:
// 	case botWin == 2:
// 	case botWin == 1:
// 		outcomeText = 'Computer won this round.';
// 		break;
// 	case userWin == 3:
// 	case userWin == 2:
// 	case userWin == 1:
// 		outcomeText = 'You won this round.';
// 		break;
// }

// if (botWin == 4) {outcomeText = 'Come on! You got this!';}
// else if (userWin == 4) {outcomeText = 'You\'re so close!';}
// else if (botWin == 3 || botWin == 2 || botWin == 1) {outcomeText = 'Computer won this round.';}
// else if (userWin == 3 || userWin == 2 || userWin == 1) {outcomeText = 'You won this round.';}


const game = () => {
	getRandomNumber();
	compareMoves(userInput);
	console.log(botMove);
};

const showPoint = () => points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
showPoint();

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
		finalOutcome.textContent = 'SHEEESH! Congrats, you won against the computer!';
		playAgainBtn.removeAttribute('hidden');
		gameButtons.forEach(btn => btn.setAttribute('disabled', 'disabled'));
	} else if (botWin == 5) {
		finalOutcome.textContent = 'feelsbadman. Better luck next time.';
		playAgainBtn.removeAttribute('hidden');
		gameButtons.forEach(btn => btn.setAttribute('disabled', 'disabled'));
	} 
	
	// else if (botWin == 4) {outcome.textContent = 'Come on! You got this!';}
	// else if (userWin == 4) {outcome.textContent = 'You\'re so close!';}
	// else if (botWin == 3 || botWin == 2 || botWin == 1) {outcome.textContent = 'Computer won this round.';}
	// else if (userWin == 3 || userWin == 2 || userWin == 1) {outcome.textContent = 'You won this round.';}
}

function compareMoves(userInput) {

	if (botMove == 'rock') {
		if (userInput == 'paper') {
			userWin++;
			showPoint();
			ifFiveWins();
			return;
		} else if (userInput == 'scissors') {
			botWin++;
			showPoint();
			ifFiveWins();
			return;
		} else if (userInput == 'rock') {
			showPoint();
			ifFiveWins();
			return;
		}
	} 
	
	else if (botMove == 'paper') {
		if (userInput == 'scissors') {
			userWin++;
			showPoint();
			ifFiveWins();
			return;
		} else if (userInput == 'rock') {
			botWin++;
			showPoint();
			ifFiveWins();
			return;
		} else if (userInput == 'paper') {
			showPoint();
			ifFiveWins();
			return;
		}
	} 
	
	else {
		if (userInput == 'rock') {
			userWin++;
			showPoint();
			ifFiveWins();
			return;
		} else if (userInput == 'paper') {
			botWin++;
			showPoint();
			ifFiveWins();
			return;
		} else if (userInput == 'scissors') {
			showPoint();
			ifFiveWins();
			return;
		}
	}
}

function playAgain() {
	userWin = 0;
	botWin = 0;
	showPoint();
	playAgainBtn.setAttribute('hidden', 'hidden');
	finalOutcome.textContent = '';
	gameButtons.forEach(btn => btn.removeAttribute('disabled'));
}