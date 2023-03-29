

let computerChoice = (getComputerChoice());
let playerChoice = (getPlayerChoice());


//this function defines an array of 3 choices
//then assigns as a variable a random number based on the array length (0-2)
//then returns an array object based on the random number

function getComputerChoice(computerChoice) {
    const arrayChoices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * arrayChoices.length);
    return arrayChoices[randomNumber];
}

//this function prompts the user for text input "rock paper or scissors"
//then slices it (first letter and 2nd letter to end)
//then converts first letter to upper case and all others to lower case for easy use in gameplay function

function getPlayerChoice(playerChoice){
let playerChoicePrompt = prompt("Paper, Scissors or Rock?", "One of those")
let firstLetter = playerChoicePrompt.slice(0, 1);
let theRest = playerChoicePrompt.slice(1);
let firstLetterCap = firstLetter.toUpperCase();
let theRestUnCap = theRest.toLowerCase();
return firstLetterCap+theRestUnCap;
}

//put gameplay function here


console.log(computerChoice);
console.log(playerChoice);
console.log(typeof computerChoice);
console.log(typeof playerChoice);

