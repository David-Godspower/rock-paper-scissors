console.log("Welcome to this game of Rock Paper Scissors");

// Declaring scores for both human and computer
let humanScore = 0;
let computerScore = 0;

let counter = 0;

// Function for the computer choice
function getComputerChoice(){
   return  Math.floor(Math.random()*3);
}
let computerChoice = getComputerChoice();
if (computerChoice == 0){
    console.log("Rock");
}else if(computerChoice == 1){
    console.log("Paper");
}else{
    console.log("Scissors");
}
// Function for the human choice
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice(Rock, Paper or Scissors): ").toLowerCase();
    return humanChoice;

}
console.log(getHumanChoice())