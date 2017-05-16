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



//Function for selecting random choice from array
	function compWordChoice() {
		unsolvedWord = gameChoices [Math.floor(Math.random() * gameChoices.length)];
		console.log(unsolvedWord);
	}
compWordChoice();

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






