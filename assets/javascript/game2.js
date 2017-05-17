//Array of words for the computer to chose from related to delicious desserts.
var gameChoices = [ "CHOCOLATE", "CUPCAKE", "PUDDING", "ICECREAM", "DOUGHNUT", "BROWNIE", "COOKIES", "FROYO"];										

// This array will help make sure a real letter is pressed
var letterQ = ["A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X",
"Y","Z"];
// Definition of variables
var wins = 0;
var guesses = 15;
var losses = 0;
var solvedWord;
var unsolvedWord;
var userAnswerUnsolved = [];



//Function for selecting random choice from array
function compWordChoice() {
	unsolvedWord = gameChoices [Math.floor(Math.random() * gameChoices.length)];
	console.log(unsolvedWord);
}
// This function checks userGuess to unsovled word
function checkGuess () {
	for (i = 0; i < unsolvedWord.length; i++) {
		var n = (unsolvedWord.includes(userGuess)) 
		}
		if (n === true) {			

			console.log("That is a letter in the Word")
		}
	
	else {
		console.log("That is not a letter int he word")
	}
}

// Function to compare userGuess to letterQ
// function isaLetter () {
// 	for (i = 0; i < letterQ.length; i++) {
// 		letterQ.includes(userGuess) {
// 			checkGuess(userGuess);
// 		}
// 	}
// }


	// Printing guess field
	// function printWord () {
	// 	for (i = 0; i < unsolvedWord.length; i++) {
	// 		var wordControl = document.getElementById("wordControl");
	// 		wordControl.innerHtml = unsolvedWord[i];
	// 	}	
	// }
	
	
	

//This dictates the users input
document.onkeyup = function(event){
	// Determine what user presses by storing it
	var userGuess = event.key;
	userGuess = userGuess.toUpperCase();
	console.log(userGuess);
	checkGuess();

	













// Working Code I am commenting out and writing a function.
	// Forces user to choose a letter
	// if (letterQ.includes(userGuess)) {

// Working Code trying to start with a function
//Now let the magic begin.

// if (unsolvedWord.includes(userGuess)) {
// 	console.log("That was a letter in the word");
// }
// else {
// 	guesses--;
// 	console.log(guesses);
// 	console.log("That was not a letter in the word");


// }

// }
// else {
// 	console.log("That is not a letter choice");
// }
// if (guesses < 1){
// 	alert("You lose.  Try another word");
// 	guesses = 15;
// 	losses++;
// 	compWordChoice();
// 	console.log(guesses);
// 	console.log(losses);
// 	console.log(unsolvedWord)
// }



// }
}





