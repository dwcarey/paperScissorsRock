let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;


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
//get choices, evaluates if player win or lose , returns string player wins, player loses, draw
//increment player or computer score by 1 per round

function playRound() {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        
        if (playerChoice == computerChoice)
        {return 'It\'s a draw!';
        }
  
        else if (playerChoice == 'Rock' && computerChoice == 'Scissors' 
        || playerChoice == 'Paper' && computerChoice == 'Rock'
        || playerChoice == 'Scissors' && computerChoice == 'Paper')
        {playerScore++;
        return 'Player Wins!';
        }

        else if 
        (computerChoice == 'Rock' && playerChoice == 'Scissors' 
        || computerChoice == 'Paper' && playerChoice == 'Rock'
        || computerChoice == 'Scissors' && playerChoice == 'Paper')
        {computerScore++;
        return 'Computer Wins!';
        }

        else return 'What did you do???????';

}

function playGame() {
  while (playerScore < 3 && computerScore < 3) {
  let result = playRound();
  alert(`${result} Player Choice: ${playerChoice}, Computer Choice: ${computerChoice}`);
  alert(`Player Score: ${playerScore}, Computer Score: ${computerScore}.`);
  }
  if (playerScore == 3) {alert(`Player Wins the game! Player Score: ${playerScore}.`);}

  else if (computerScore == 3) {alert(`Computer Wins the game! Computer Score: ${computerScore}.`);}
}







console.log(playGame());
console.log(playRound());
console.log(playerChoice);
console.log(computerChoice);
console.log(playerScore);
console.log(computerScore);




//this returns the desired text for later use as paragraph output
//based on winner/loser of the round
//use this function INSIDE main game function

//function playRoundTextOutput(computerChoice, playerChoice) {
  //  if (computerChoice == playerChoice) 
  //  return `${playerChoice} is the same as ${computerChoice}, amazing!`;

 //   else if (playerChoice == "Rock" && computerChoice == "Paper") 
 //   return `${playerChoice} sucks, ${computerChoice} fucks, you lose!`;

 //   else if (playerChoice == "Rock" && computerChoice == "Scissors") 
 //   return `${playerChoice} is dank, ${computerChoice} stank, you win!`;

 //   else if (playerChoice == "Paper" && computerChoice == "Scissors") 
  //  return `${playerChoice} is nasty, ${computerChoice} are fasty, you lose!`;

  //  else if (playerChoice == "Paper" && computerChoice == "Rock") 
    //return `${playerChoice} is l33t, ${computerChoice} can\'t comp3t3, you win!`; 

 //   else if (playerChoice == "Scissors" && computerChoice == "Paper") 
 //   return `${playerChoice} has problems, ${computerChoice} ain\'t one of them, you win!`;

 //   else if (playerChoice == "Scissors" && computerChoice == "Rock") 
 //   return `${playerChoice} don/'t rhyme, ${computerChoice} ain\'t got the time, you lose!`;

 //   else return `${playerChoice} aint shit`;

//}
//this is supposed to be increments playerScore or computerScore by 1 on victory
//i think  it all needs to go inside game function

//function gameScore(playerChoice, computerChoice) {
 //   if (playerChoice == "Rock" && computerChoice == "Paper" 
 //   || playerChoice == "Paper" && computerChoice == "Scissors"
  //  || playerChoice == "Scissors" && computerChoice == "Rock")
  //  return ++computerScore;

 //   else if (computerChoice == "Rock" && playerChoice == "Paper" 
 //   || computerChoice == "Paper" && playerChoice == "Scissors"
 //   || computerChoice == "Scissors" && playerChoice == "Rock")
 //   return ++playerScore;

 //   else return "oh dear";

//}

//function playGame() {}





