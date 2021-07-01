// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

let scrabblescore = 0
let simpleScore = 0 
let vowelBonusScore = 0 
let score = 0 


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const simplePointStructure = {
  1: ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
};

const vowelbonusPointStructure = {
  1: ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'],
  3: ['A','E','I','O','U'],
};

function vowelbonusScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelbonusPointStructure) {
 
		 if (vowelbonusPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      vowelBonusScore = vowelBonusScore + parseInt(pointValue,10)
		 }
 
	  }
	}
	return letterPoints;
 }
 
function simpleScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in simplePointStructure) {
 
		 if (simplePointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      simpleScore = simpleScore + parseInt(pointValue,10)
		 }
 
	  }
	}
	return letterPoints;
 }


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      scrabblescore = scrabblescore + parseInt(pointValue,10)
		 }
 
	  }
	}
	return letterPoints;
 }


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initalPrompt() {
 console.log("Let's play some Scrabble!")
 userinput = input.question("Enter a word to score:")
}

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use")
  console.log("0 - Simple: One point per character")
  console.log("1 - Vowel Bonus: Vowels are worth 3 points")
  console.log("2 - Scrabble: Uses scrabble point system")
  scorerPromptinput = input.question("Enter 0, 1, or 2:")
}


function runProgram() {
  
initalPrompt();

scorerPrompt();

if (scorerPromptinput === '0'){
 score = simpleScrabbleScorer(userinput);
 console.log(`Score for '${userinput}' : ${simpleScore}`)


} else if(scorerPromptinput === '1'){
 score = vowelbonusScrabbleScorer(userinput);
 console.log(`Score for '${userinput}' : ${vowelBonusScore}`)



} else if(scorerPromptinput === '2'){
  score = oldScrabbleScorer(userinput);
  console.log(`Score for '${userinput}' : ${scrabblescore}`)


}else{
  console.log("Not A Valid Entry")
}

}

runProgram();


// Don't write any code below this line //
// And don't change these or your program will not run as expected //




module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

