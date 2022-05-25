// FUNCTION rPS {
// 	GET INPUT rock/paper/scissors

// 	FUNCTION getBotMove() {
// 		botMove = randomNumber from 1-3 wherein 1 = rock, 2 = paper, 3 = scissors
// 	}
// 	getBotMove();

// 	rPS2();
// 	FUNCTION rPS2 {
		// IF botMove == rock {
		// 	IF INPUT == paper {u win};
		// 	ELSE IF INPUT == scissors {u lose};
		// 	ELSE rPS2();
		// }
		
		// IF botMove == paper {
		// 	IF INPUT == rock {u lose};
		// 	ELSE IF INPUT == scissors {u win};
		// 	ELSE rPS2();
		// }

		// IF botMove == scissors {
		// 	IF INPUT == rock {u win};
		// 	ELSE IF INPUT == paper {u lose};
		// 	ELSE rPS2();
		// }
// 	}



let userWin = 0;
let botWin = 0;

function rockPaperScissors() {

	let botMove = Math.floor(Math.random() * 3) + 1;
	let userInput = prompt('Rock, paper, scissors?');

	function computerPlay() {

		if (botMove == 1) {
			botMove = 'rock';
			console.log(botMove);
		} else if (botMove == 2) {
			botMove = 'paper';
			console.log(botMove);
		} else {
			botMove = 'scissors';
			console.log(botMove);
		}
	}
	computerPlay();

	function getUserInput() {

		if (userInput != ('rock' || 'paper' || 'scissors')) {
			getUserInput();
		} else {
			return userInput;
		}

		getUserInput();
	}



	function compareMoves() {

		if (botMove == 'rock') {

			if (userInput == 'paper') {
				console.log('u win!');
				console.log('userWin: ', userWin + 1);
				console.log('botWin: ', botWin);
				return userWin++;
			} else if (userInput == 'scissors') {
				console.log('u lose, nub');
				console.log('userWin: ', userWin);
				console.log('botWin: ', botWin + 1);
				return botWin++;
			} else {
				console.log('draw!');
				console.log('userWin: ', userWin);
				console.log('botWin: ', botWin);
			}

		} else if (botMove == 'paper') {

			if (userInput == 'scissors') {
				console.log('u win!');
				console.log('userWin: ', userWin + 1);
				console.log('botWin: ', botWin);
				return userWin++;
			} else if (userInput == 'rock') {
				console.log('u lose, nub');
				console.log('userWin: ', userWin);
				console.log('botWin: ', botWin + 1);
				return botWin++;
			} else {
				console.log('draw!');
				console.log('userWin: ', userWin);
				console.log('botWin: ', botWin);
			}

		} else {

			if (userInput == 'rock') {
				console.log('u win!');
				console.log('userWin: ', userWin + 1);
				console.log('botWin: ', botWin);
				return userWin++;
			} else if (userInput == 'paper') {
				console.log('u lose, nub');
				console.log('userWin: ', userWin);
				console.log('botWin: ', botWin + 1);
				return botWin++;
			} else {
				console.log('draw!');
				console.log('userWin: ', userWin);
				console.log('botWin: ', botWin);
			}

		}
	}
	compareMoves();

}

function game() {

	rockPaperScissors();

	while ((userWin || botWin) <= 5) {

		rockPaperScissors();

		if (userWin == 5) {
			alert('U WON OVERALL, KING');
			break;
		} else if (botWin == 5) {
			alert('U LOST TO A BOT. SHAME.');
			break;
		}

	}

}
game();