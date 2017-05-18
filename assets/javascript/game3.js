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


//Getting elements from the page
var showLetters = document.getElementById("#displayLetter"); 
var showScores = document.getElementById("#displayHtml");
var displayWord = document.getElementById("#wordControl");
var displayPicture = document.getElementById("pictureFix");


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
function createDashes () {
	for (i = 0; i < wordSplit.length; i++) {
		gameStatus[i] = "_ ";	
	}
	console.log(gameStatus);
}
	function printDash() {
		for (i = 0; i < wordSplit.length; i++) {
			$("#wordControl").append(wordsplit[i]);
		}
	}





		// Starting the actual game portion
		
		compWordChoice();
		createDashes();
		
		


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
		}
		else {
			console.log("That is not a letter choice");
		}
			if (guessesLeft < 1){
			alert("You lose.  Try another word");
			guessesLeft = 15;
			losses++;
			compWordChoice();
			console.log(guessesLeft);
			console.log(losses);
			console.log(unsolvedWord)
		}

		}
		

		


			