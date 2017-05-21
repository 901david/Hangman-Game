//Array of words for the computer to chose from related to delicious desserts.
var gameChoices = [ "CHOCOLATE", "CUPCAKE", "PUDDING", "ICECREAM", "DOUGHNUT", "BROWNIE", "COOKIES", "FROYO"];										


// Variable Definitions
var guessesLeft = 8; //Guesses you have left
var wordSplit = []; //Stores the computer chosen word in a new array
var wins = 0; //Store wins
var losses = 0; //Stores losses
var unsolvedWord; //The word that is chosen by computer
var length; //Length of randomly chosen word
var keysPressed = []; //This willmstore the letters already chosen
var userGuess; //This is the users key press
var gameStatus = []; //This contains the underlines of the unsolved word
var shouldISubtractAGuess = true;
var keysLocked = true;




//Function for selecting random choice from array
function compWordChoice() {
	unsolvedWord = gameChoices [Math.floor(Math.random() * gameChoices.length)];
	console.log(unsolvedWord);
	wordSplit = unsolvedWord.split("");
	console.log(wordSplit);	
}
//This function checks if the letter is in the Unsolved Word
function checkGuess() {
	length = wordSplit.length;
	for (i = 0; i < length; i++) {
		if (wordSplit[i] === userGuess) {
			console.log("That is a letter in the word.");
			gameStatus[i] = wordSplit[i];
			console.log(gameStatus);
		}
		
		else {
			console.log("That was not a letter in the word.");
			shouldISubtractAGuess = true;
		}
		// doesGuessHurtYou();
	}



}
// This function creates dashes in a new array for the given word
function createDashes () {
	for (i = 0; i < wordSplit.length; i++) {
		gameStatus[i] = "_ ";	
	}
	console.log(gameStatus);
}
// This function will print the dashes on the screen
function printDash() {
	$("#wordControl").html(gameStatus);
	$("#displayHtml").html("<p>Choose a letter to determine if you can solve the word above.</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "<p>Letters you have already chosen: " + 
		keysPressed + "</p>");

}
// This function will check the status of the game and determine if we have a winner
function checkGameStatus () {
	var youWin = true;
	for (var i = 0; i < wordSplit.length; i++) {
		if (gameStatus[i] === "_ ") {
			youWin = false;
		}
	}

	if (youWin) {
		wins++;
		$(".wonkaPicture").attr("src", "assets/images/youwin.jpg");
		$(".winAudio").attr("src", "assets/audio/youwin.mp3");
		$(".wonkaPicture").on("click", function erasePicture() {
			$(".wonkaPicture").addClass("hideWin");
		});
		console.log("You win. WINS:  " + wins);
		keysLocked = true;
		whatPicture();
	}
	// else if (gameStatus[i] !== userGuess) {
	// 	guessesLeft--;
	// 	console.log("GuessesLeft:  "+ guessesLeft);
	// }
	
	if (guessesLeft <= 1) {
		losses++;
		$(".wonkaPicture").attr("src", "assets/images/youlose.jpg");
		$(".winAudio").attr("src", "assets/audio/yougetnothing.mp3");
		console.log("You lose. LOSSES:  " + losses);
		keysLocked = true;
		guessesLeft = 8;
		keysPressed = [];
	}
}
// This function currently not being used but I might end up using it
function doesGuessHurtYou() {
	for(var i = 0; i < gameStatus.length; i++) {
		if(gameStatus[i].includes(userGuess)) {
			console.log("It Doesn't look like I should subtract a guess.");
			shouldISubtractAGuess = false;
		}	
	}
	if (shouldISubtractAGuess) {
		guessesLeft--;
	}
}

// This function will determine which index value the word was and try to associate that value with a picture
function whatPicture() {
	if (unsolvedWord === gameChoices[0]) {
		$(".imageSwitch").attr("src", "assets/images/chocolate.jpg");
	}
	else if (unsolvedWord === gameChoices[1]) {
		$(".imageSwitch").attr("src", "assets/images/cupcake.jpg");
	}
	else if (unsolvedWord === gameChoices[2]) {
		$(".imageSwitch").attr("src", "assets/images/pudding.jpeg");
	}
	else if (unsolvedWord === gameChoices[3]) {
		$(".imageSwitch").attr("src", "assets/images/icecream.jpg");
	}
	else if (unsolvedWord === gameChoices[4]) {
		$(".imageSwitch").attr("src", "assets/images/doughnut.jpg");
	}
	else if (unsolvedWord === gameChoices[5]) {
		$(".imageSwitch").attr("src", "assets/images/brownie.jpg");
	}
	else if (unsolvedWord === gameChoices[6]) {
		$(".imageSwitch").attr("src", "assets/images/cookies.jpg");
	}
	else if (unsolvedWord === gameChoices[7]) {
		$(".imageSwitch").attr("src", "assets/images/frozen.jpg");
	}
}


$(document).ready(function(){

		// Starting the actual game portion
		
		$("#start").on("click", function startGame() {
			$(".wonkaPicture").attr("src", "");
			$(".winaudio").attr("src", "");
			$(".imageSwitch").attr("src", "");
			keysLocked = false;
			gameStatus = [];
			keysPressed = [];
			guessesLeft = 8;
			compWordChoice();
			createDashes();
			printDash();
		});
		
			//This dictates the users input
			document.onkeyup = function(event){
				if (keysLocked) {
					alert("You have not pressed the start button yet.");
				}

				else { 

				// Determine what user presses by storing it
				userGuess = event.key;
				userGuess = userGuess.toUpperCase();
				
				console.log(userGuess);
				
				// Forces user to choose a letter
				if ((event.keyCode >= 65 && event.keyCode <= 90) && (!(gameStatus.includes(userGuess))) && (!(keysPressed.includes(userGuess)))) {
					console.log("You made a letter selection I would consider valid!");
					checkGuess();
					checkGameStatus();
					doesGuessHurtYou()
					printDash();
				}
		    	// else if (wordSplit.includes(userGuess)) {
		    	// 		alert("You already chose that letter.")
		    	// }
		    	else {
		    		alert("That is not a valid letter choice.");
		    	}
		    	// if (wordSplit.includes(userGuess)) {
		    	// 	console.log("That letter will not go to the screen because it was in the word");

		    	// }
		    	if ((!(event.keyCode >= 65 && event.keyCode <= 90)) || (gameStatus.includes(userGuess)) || (keysPressed.includes(userGuess))) {
		    		console.log("That letter will not go to the screen because it is not a valid letter selection.");
		    	}
		    	else {
		    		keysPressed.push(userGuess);
		    		printDash();
		    	}
		    }
		}
	});
