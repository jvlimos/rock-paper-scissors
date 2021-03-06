const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const outcome = document.querySelector('#outcome');
const points = document.querySelector('#points');
const finalOutcome = document.querySelector('#final-outcome');
const playAgainBtn = document.querySelector('#play-again');
const gameButtons = document.querySelectorAll('.game-button');
const movesImg = document.querySelector('#moves');
const playerMove = document.querySelector('#player-move');
const computerMove = document.querySelector('#computer-move');

let userInput;
let rndm;
let botMove;
let move;
let move2;
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
	showMove();
};

const showPoint = () => points.textContent = `Human: ${userWin} | Computer: ${botWin}`;
showPoint();

{/* <span class="iconify" data-icon="la:hand-rock" data-rotate="90deg"></span>
<span class="iconify" data-icon="fa:hand-paper-o" data-rotate="90deg"></span>
<span class="iconify" data-icon="fa6-regular:hand-scissors" data-rotate="180deg" data-flip="vertical"></span>
<span class="iconify" data-icon="la:hand-rock" data-rotate="90deg" data-flip="vertical"></span>
<span class="iconify" data-icon="fa:hand-paper-o" data-rotate="90deg" data-flip="vertical"></span>
<span class="iconify" data-icon="fa6-regular:hand-scissors" data-rotate="180deg" data-flip="horizontal,vertical"></span> */}

function setMultipleAttributesUser(move) {
	const playerMoves = {'userRock': {'class': 'iconify'
												, 'data-icon': "la:hand-rock"
												, 'data-rotate': "90deg"}
											, 'userPaper': {'class': 'iconify'
												, 'data-icon': 'fa:hand-paper-o'
												, 'data-rotate': '90deg'}
											,	'userScissors': {'class': 'iconify'
												, 'data-icon': 'fa6-regular:hand-scissors'
												, 'data-rotate': '180deg'
												, 'data-flip': 'vertical'}
	};

	for (let key in playerMoves) {
		if (move == key) {
			let objs = Object.entries(playerMoves[key]);
			for (array of objs) {
				playerMove.setAttribute(array[0], array[1]);
			}
		}
	}
}

function setMultipleAttributesBot(move2) {
	const computerMoves = {'computerRock': {'class': 'iconify'
													, 'data-icon': 'la:hand-rock'
													, 'data-rotate': '90deg'
													, 'data-flip': 'vertical'}
												, 'computerPaper': {'class': 'iconify'
													, 'data-icon': "fa:hand-paper-o"
													, 'data-rotate': '90deg'
													, 'data-flip': 'vertical'}
												, 'computerScissors': {'class': 'iconify'
													, 'data-icon': 'fa6-regular:hand-scissors'
													, 'data-rotate': '180deg'
													, 'data-flip': 'horizontal,vertical'}
	};

	for (let key in computerMoves) {
		if (move == key) {
			let objs = Object.entries(computerMoves[key]);
			for (array of objs) {
				computerMove.setAttribute(array[0], array[1]);
			}
		}
	}
}

function showMove () {
	if (userInput == 'rock') {
		move = 'userRock';
		setMultipleAttributesUser(move);
	} else if (userInput == 'paper') {
		move = 'userPaper';
		setMultipleAttributesUser(move);
	} else if (userInput == 'scissors') {
		move = 'userScissors';
		setMultipleAttributesUser(move);
	}

	if (botMove == 'rock') {
		move2 = 'computerRock';
		setMultipleAttributesBot(move2);
	} else if (botMove == 'paper') {
		move2 = 'computerPaper';
		setMultipleAttributesBot(move2);
	} else if (botMove == 'scissors') {
		move2 = 'computerScissors';
		setMultipleAttributesBot(move2);
	}
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

function showMessage() {
	if (userWin == 5) {
		finalOutcome.textContent = 'You won against the computer! Well played.';
		playAgainBtn.removeAttribute('style', 'visibility: hidden;');
		gameButtons.forEach(btn => btn.setAttribute('disabled', ''));
		outcome.textContent = '';
	} else if (botWin == 5) {
		finalOutcome.textContent = 'You lost to the computer. Better luck next time!';
		playAgainBtn.removeAttribute('style', 'visibility: hidden;');
		gameButtons.forEach(btn => btn.setAttribute('disabled', ''));
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