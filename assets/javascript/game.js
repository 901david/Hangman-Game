//Array of words for the computer to chose from related to delicious
// desserts.
var gameChoices = [
					["C","H","O","C","O","L","A","T","E"], 
					["C","U","P","C","A","K","E"],
					["P","U","D","D","I","N","G",],
					["I","C","E","C","R","E","A","M",],
					["D","O","U","G","H","N","U","T",],
					["B","R","O","W","N","I","E",],
					["C","O","O","K","I","E","S",],
					["F","R","O","Y","O"]
					];
var userAnswer;
var typedLetter = true;
var wordSelect = [];
var userAnswerUnsolved = new Array(wordSelect.length);
var wins = 0;
var losses = 0;
var lettersUsed = "The letters you have already used: ";
wordChoose();
var displayHtml;
var guesses = 15;




//For loop that creates blank spaces for the random word
// Does this need to be a Function that is called each time the copmuter chooses the word.
var displayBlank = for (i = 0; i < gameChoices.length; i++) {
	userAnswerUnsolved[i] = "_ ";
	console.log(userAnswerUnsolved);
}
// Function to run when you want the computer to randomly choose
// a word and then place blanks on the page.
function wordChoose () {
	wordSelect = gameChoices [Math.floor(Math.random()
		* gameChoices.length)];
	console.log(wordSelect);
	document.getElementById(#wordControl).innerHTML = "<p>" + userAnswerUnsolved
	+ "<p>";

}


	//This dictates the users input
	document.onkeyup = function(event){
	// Determine what user presses by storing it
	var userGuess = event.key;
	userGuess = userGuess.toUpperCase();
	typedLetter = false;
	console.log(userGuess);

	//Conditionals
	

	// This is where I put the HTML modification code
	var displayHtml = 
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guesses + "</p>";
	document.querySelector("#displayHtml").innerHTML = displayHtml;
	typedLetter = true;
}