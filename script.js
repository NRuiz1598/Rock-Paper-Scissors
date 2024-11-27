function getHumanChoice () {
    choice = prompt("rock, paper o scissors? ", "").toLowerCase();
    return choice;
}


function getComputerChoice() {
    random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        random = "rock"
    }else if (random === 2) {
        random = "paper";
    } else if (random === 3) {
        random = "scissors";
    }
    return random
}

getComputerChoice()

let humanScore = 0; 
let computerScore = 0;


function playRound(humanChoice, computerChoice) {

        // USER CHOOSES ROCK

        if (humanChoice === "rock" && computerChoice === "scissors" ) {
            return console.log("You win this round! Rock defeats scissors!");
        }else if (humanChoice === "rock" && computerChoice === "paper"){
            return console.log("You lose this round! Paper defeats rock!");
        }else if (humanChoice === "rock" && computerChoice === "rock") {
            return console.log("It's a draw! You both drew rock!");
        }
          
        // USER CHOOSES SCISSORS

        if (humanChoice === "scissors" && computerChoice === "paper") {
            return console.log("You win this round! Scissors defeats paper!")
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            return console.log("You lose this round! Rock defeats scissors!");
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            return console.log("It's a draw! You both drew scissors!");
        }

        // USER CHOOSES PAPER 

        if (humanChoice === "paper" && computerChoice === "rock") {
            return console.log("You win this round! Paper defeats rock");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            return console.log ("You lose this round! Scissors defeats paper");
        }else {
            return console.log("It's a draw! You both drew paper!");
        }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);