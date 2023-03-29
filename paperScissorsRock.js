
//this function defines an array of 3 choices
//then assigns as a variable a random number based on the array length (0-2)
//then returns an array object based on the random number

function getComputerChoice(result) {
    const arrayChoices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * arrayChoices.length);
    let computerChoice = arrayChoices[randomNumber];



    console.log(arrayChoices);
    console.log(randomNumber);
    console.log(computerChoice);  //return and use this
}