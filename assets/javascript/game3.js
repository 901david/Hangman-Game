//Array of words for the computer to chose from related to delicious desserts.
var gameChoices = [ "CHOCOLATE", "CUPCAKE", "PUDDING", "ICECREAM", "DOUGHNUT", "BROWNIE", "COOKIES", "FROYO"];										


// Variable Definitions
var guessesLeft = 15; //Guesses you have left
var wordSplit = []; //Stores the computer chosen word in a new array
var wins = 0; //Store wins
var losses = 0; //Stores losses
var unsolvedWord; //The word that is chosen by computer
var length; //Length of randomly chosen word
var keysPressed = []; //This willmstore the letters already chosen
var userGuess; //This is the users key press
var gameStatus = []; //This contains the underlines of the unsolved word





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
		console.log("That was not a letter in the word.")
		}
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
						keysPressed + " </p>");
				
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
		console.log("You win. WINS:  " + wins);
		for(var i = 0; i < gameStatus.length; i++) {
			if (gameStatus[i] === ["F", "R", "O", "Y", "O"]) {
			alert("This could be a picture");
		}
		}

	}
	else if (gameStatus[i] !== userGuess) {
		guessesLeft--;
		console.log("GuessesLeft:  "+ guessesLeft);
	}
	
	if (guessesLeft <= 0) {
		losses++;
		console.log("You lose. LOSSES:  " + losses);
	}
}
function doesGuessHurtYou() {
	for(var i = 0; i < gameStatus.length; i++) {
		if(gameStatus[i] == userGuess) {
			console.log("I will do nothing");
		}
		else{
			guessesLeft--;

		}
	}
}


$(document).ready(function(){

		// Starting the actual game portion
		$("#start").on("click", function startGame() {
		gameStatus = [];
		keysPressed = [];
		guessesLeft = 15;
		compWordChoice();
		createDashes();
		printDash();
	});
		
		


		//This dictates the users input
		document.onkeyup = function(event){
		// Determine what user presses by storing it
		userGuess = event.key;
		userGuess = userGuess.toUpperCase();
		
		console.log(userGuess);
		
		// Forces user to choose a letter
		if (event.keyCode >= 65 && event.keyCode <= 90) {
    	console.log("You made a valid selection.");
    	checkGuess();
    	checkGameStatus();
    	printDash();
    	}
    	else {
			console.log("That is not a letter choice");
		}
    	if (wordSplit.includes(userGuess)) {
    		console.log("I will do nothing");
    	}
		else {
			keysPressed.push(userGuess);
    		printDash();
		}
		
			

		}

});
		

		


			