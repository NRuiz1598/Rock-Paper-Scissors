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



function playRound() {

    let humanScore = 0; 
    let computerScore = 0;
    let round = 0

        do {

            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            // USER CHOOSES ROCK

            if (humanSelection === "rock" && computerSelection === "scissors" ) {
                return console.log("You win this round! Rock defeats scissors!");
            }else if (humanSelection === "rock" && computerSelection === "paper"){
                return console.log("You lose this round! Paper defeats rock!");
            }else if (humanSelection === "rock" && computerSelection=== "rock") {
                return console.log("It's a draw! You both drew rock!");
            }
              
            // USER CHOOSES SCISSORS
    
            if (humanSelection === "scissors" && computerSelection === "paper") {
                return console.log("You win this round! Scissors defeats paper!")
            } else if (humanSelection === "scissors" && computerSelection === "rock") {
                return console.log("You lose this round! Rock defeats scissors!");
            } else if (humanSelection === "scissors" && computerSelection === "scissors") {
                return console.log("It's a draw! You both drew scissors!");
            }
    
            // USER CHOOSES PAPER 
    
            if (humanSelection === "paper" && computerSelection === "rock") {
                return console.log("You win this round! Paper defeats rock");
            } else if (humanSelection === "paper" && computerSelection === "scissors") {
                return console.log ("You lose this round! Scissors defeats paper");
            }else {
                return console.log("It's a draw! You both drew paper!");
            }
        }while (round < 5)



}



playRound();