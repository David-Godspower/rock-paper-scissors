console.log("Welcome to this game of Rock Paper Scissors");

// Declaring scores for both human and computer
let humanScore = 0;
let computerScore = 0;

// Prompt to get the user's name

let name = prompt("Enter your name: ").toUpperCase().trim();
while (name == null || name.length < 3 || name.length > 20){
    alert("Please enter a valid name with at least 3 characters and must not be greater than 20 characters.");
    name = prompt("Enter your name: ").toUpperCase().trim();
    
}
alert("Hello " + name + ", let's play Rock Paper Scissors!");

// Alert to explain the rules of the game
alert('Rock wins over scissors\n Paper wins over Rock\n Scissors wins over Paper\n Each round you will get 10 points for winning and 5 points for a tie.\n You will play 5 rounds in total. Good luck!');
// Function for the computer choice
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);
   return  choices[randomNumber];
}
let computerChoice = getComputerChoice();

// Function for the human choice
function getHumanChoice(){
     let humanChoice;
     while(true){
        humanChoice = prompt("Enter your choice(Rock, Paper or Scissors): ").toLowerCase();
        if((humanChoice == "rock") || (humanChoice == "paper") || (humanChoice == "scissors")){
        return humanChoice;
        }else{
            alert("Please enter a valid choice: Rock Paper Scissors");
    }
}
}

// Play round
function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("Your choice = " + humanChoice);
         console.log("Computer choice = " + computerChoice);
        console.log("It's a tie\n");
        humanScore+=5;
        computerScore+=5;
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



// Fuction to play the game for 5 rounds

function playGame(){
    for(let counter = 0; counter<5; counter++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    alert("Overall Winner\nYour Score: "+ humanScore + "\nComputer Score: "+ computerScore);
    
    if(humanScore > computerScore){
        alert("Congratulations " + name + ". You are the Overall Winner of this game!🥇🥇🥇");
        
    }else if(computerScore > humanScore){
        alert("Computer is the Overall Winner 🥇🥇🥇! You can do better next time");
    }else{
        alert("It's a Tie Overall! You tried!");
    }
    alert("Thanks for playing Rock Paper Scissors, " + name + "! Hope you had fun!");

}
playGame();












