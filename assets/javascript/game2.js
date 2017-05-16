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

/**
@var gameChoicesDeux you shouldnt need to make each letter an element in the area just the whole word
*/
var gameChoicesDeux = [ 'CHOCOLATE', 'CUPCAKE', 'PUDDING', 'ICECREAM', 'DOUGHNUT', 'BROWNIE', 'COOKIES', 'FROYO'];

// This array will help make sure a real letter is pressed
var alphabetChoices = ["A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X",
"Y","Z"];
// Definition of variables
var wins = 0;
var guesses = 15;
var losses = 0;
var unsolvedWord;
// var displayBlank;

/**
	@var unsolved my unsovled word so i wouldnt fuck with your stuff :)
*/
let unsolved;


//Function for selecting random choice from array
	function compWordChoice() {
		unsolvedWord = gameChoices [Math.floor(Math.random() * gameChoices.length)];
		console.log(unsolvedWord);
	}
	/**
		My function below
		@func compWordChoiceDeux sets the random word for us
	*/
	function compWordChoiceDeux() {
		unsolved = gameChoicesDeux[Math.floor(Math.random() * gameChoicesDeux.length)];
		console.log(' UNSOLVED WORD DEUXXXX', unsolved);
	}
compWordChoice();
///////////////////////
// Austins function to choose the word
compWordChoiceDeux();
/**
	@func checkGuess checks if your character is in the unsolved word
*/
function checkGuess(letter) {
	console.log(' WE SHOULD HAVE OUR LETTER', letter);
	let length = unsolved.length;

	for (let i = 0; i < length; i += 1) {
		if(unsolved.charAt(i) === letter) {
			console.log(' WE HAVE A CHARACTER!!!', letter);
		}
	}
}
//For loop that creates blank spaces for the random word
// Does this need to be a Function that is called each time the copmuter chooses the word.
 //    for (i = 0; i < unsolvedWord.length; i++) {
	// 	unsolvedWord[i] = "_";
	// 	console.log(userAnswerUnsolved);
	// }


//This dictates the users input
	document.onkeyup = function(event){
	// Determine what user presses by storing it
	var userGuess = event.key;
	userGuess = userGuess.toUpperCase();
	typedLetter = false;
	console.log(userGuess);
	checkGuess(userGuess);

//Now let the magic begin.

	if (unsolvedWord.includes(userGuess)) {
		console.log("That was a letter in the word");
	}
	else {
		guesses--;
		console.log(guesses);
		console.log("That was not a letter in the word");


	}
	// This is where I put the HTML modification code
	var html = "<p>Choose a letter to determine if you can solve the word above.</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guesses + "</p>";
	document.querySelector("#displayHtml").innerHTML = html;
	typedLetter = true;


}
