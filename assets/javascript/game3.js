//Array of words for the computer to chose from related to delicious desserts.
var gameChoices = [ "CHOCOLATE", "CUPCAKE", "PUDDING", "ICECREAM", "DOUGHNUT", "BROWNIE", "COOKIES", "FROYO"];										

// This array will help make sure a real letter is pressed
var isaLetter = ["A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X",
"Y","Z"];

// Variable Definitions
var guessesLeft = 15; //Guesses you have left
var guesses = []; //Stores the guessed keys
var wins = 0; //Store wins
var losses = 0; //Stores losses




//Getting elements from the page
var showLetters = document.getElementById("#displayLetter"); 
var showScores = document.getElementById("#displayHtml");
var displayWord = document.getElementById("#wordControl");
var displayPicture = document.getElementById("pictureFix");


//Function for selecting random choice from array
function compWordChoice() {
		var unsolvedWord = gameChoices [Math.floor(Math.random() * gameChoices.length)];
		
		console.log(unsolvedWord);
		
	}
function checkGuess(userGuess) {
	var length = unsolvedWord.length;
	for (i = 0; i < length; i++) {
		if (unsolvedWord.includes(userGuess)) {
			console.log("That is a letter in the word");
		}
	}
}



	// Starting the actual game portion
	compWordChoice();
	var underscores = "";
	for(i = 0; i < length; i++) {
	underscores = underscores + "_ ";
	console.log(underscores);
}
	//This dictates the users input
	document.onkeyup = function(event){
	// Determine what user presses by storing it
	var userGuess = event.key;
	userGuess = userGuess.toUpperCase();
	console.log(userGuess);
		// Forces user to choose a letter
	// if (isaLetter.includes(userGuess)) {
	// 	return true;
		if (event.keyCode >= 65 && event.keyCode <= 90) {
    	console.log("A letter was pushed versus any other key ont he keyboard");
    	checkGuess(userGuess);
		}
		else {
			console.log("That is not a letter choice");
		}
		//Now let the magic begin.

		// if (unsolvedWord.includes(userGuess)) {
		// 	console.log("That was a letter in the word");
		// }
		// else {
		// 	guessesLeft--;
		// 	console.log(guessesLeft);
		// 	console.log("That was not a letter in the word");
		// }

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
		


			