let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');


paper.addEventListener('click', function() {
  playRound('Paper');
});

scissors.addEventListener('click', function() {
  playRound('Scissors');
});

rock.addEventListener('click', function() {
  playRound('Rock');
});


function getComputerChoice() {
    const arrayChoices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * arrayChoices.length);
    return arrayChoices[randomNumber];
}

function playRound(playerChoice) {
  computerChoice = getComputerChoice();
  
  if (playerChoice == computerChoice) {
    document.querySelector('.winnerText').textContent = 'It\'s a draw!';
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors' || 
             playerChoice == 'Paper' && computerChoice == 'Rock' || 
             playerChoice == 'Scissors' && computerChoice == 'Paper') {
    playerScore++;
    document.querySelector('.winnerText').textContent = 'You Win!';
  } else if (computerChoice == 'Rock' && playerChoice == 'Scissors' || 
             computerChoice == 'Paper' && playerChoice == 'Rock' || 
             computerChoice == 'Scissors' && playerChoice == 'Paper') {
    computerScore++;
    document.querySelector('.winnerText').textContent = 'Computer Wins!';
  }

  document.querySelector('.theChoices').textContent = `You Chose: ${playerChoice}, \nComputer Chose: ${computerChoice}`;
  document.querySelector('.gameScore').textContent = `Your Score: ${playerScore}. Computer Score: ${computerScore}.`;
  setTimeout(restart, 100);


}

  

function restart() {  
  if (playerScore === 5) {
    alert('Game Over! \nYou Win!!!!!!');
    playerScore = 0;
    computerScore = 0;
    document.querySelector('.winnerText').textContent = 'Playing again?';
    document.querySelector('.theChoices').textContent = 'I really don\'t see why..';
    document.querySelector('.gameScore').textContent = 'Oh well, have fun!';

  }
  else if (computerScore === 5) {
    alert('Game Over! \nYou Lose!!!!!!');
    playerScore = 0;
    computerScore = 0;
    document.querySelector('.winnerText').textContent = 'Playing again?';
    document.querySelector('.theChoices').textContent = 'I really don\'t see why..';
    document.querySelector('.gameScore').textContent = 'Oh well, have fun!';
  }


}

