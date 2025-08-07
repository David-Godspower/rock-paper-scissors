console.log("Welcome to this game of Rock Paper Scissors");

// Declaring scores for both human and computer
let humanScore = 0;
let computerScore = 0;


alert('Rock wins over scissors\n Paper wins over Rock\n Scissors wins Paper');
// Function for the computer choice
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);
   return  choices[randomNumber];
}
let computerChoice = getComputerChoice();

// Function for the human choice
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice(Rock, Paper or Scissors): ").toLowerCase();
    if((humanChoice == "rock") || (humanChoice == "paper") || (humanChoice == "scissors")){
    return humanChoice;
    }else{
         console.log("Please enter a valid choice: Rock Paper Scissors");
         alert("Please enter a valid choice: Rock Paper Scissors");
        return getHumanChoice();
    }
}


// Play round
function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("Your choice = " + humanChoice);
         console.log("Computer choice = " + computerChoice);
        console.log("It's a tie\n");
    }else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("Your choice = " + humanChoice);
         console.log("Computer choice = " + computerChoice);
        console.log("You Won\n");
        humanScore+=10;
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("Your choice = " + humanChoice);
         console.log("Computer choice = " + computerChoice);
        console.log("Computer Won\n");
        computerScore+=10;
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("Your choice = " + humanChoice);
         console.log("Computer choice = " + computerChoice);
        console.log("You Won\n");
        humanScore+=10;
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("Your choice = " + humanChoice);
         console.log("Computer choice = " + computerChoice);
        console.log("Computer Won\n");
        computerScore+=10;
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("Your choice = " + humanChoice);
         console.log("Computer choice = " + computerChoice);
        console.log("You Won\n");
        humanScore+=10;
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("Your choice = " + humanChoice);
         console.log("Computer choice = " + computerChoice);
        console.log("Computer Won\n");
        computerScore+=10;
    }

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame(){
    for(counter = 0; counter<5; counter++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("\n Overall Winner ")
    console.log("Your Score: "+ humanScore);
    console.log("Computer Score: "+ computerScore);
    if(humanScore > computerScore){
        console.log("You are the Overall Winner of this game!🥇🥇🥇");
        
    }else if(computerScore > humanScore){
        console.log("Computer is the Overall Winner 🥇🥇🥇! You can do better next time");
    }else{
        console.log("It's a Tie Overall! You tried!");
    }

}
playGame();












