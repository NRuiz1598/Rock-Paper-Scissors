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
                humanScore++
                console.log("You win this round! Rock defeats scissors! Your Score is: ", humanScore);
            }else if (humanSelection === "rock" && computerSelection === "paper"){
                computerScore++
                console.log("You lose this round! Paper defeats rock! Computer Score is: ", computerScore);
            }else if (humanSelection === "rock" && computerSelection=== "rock") {
                console.log("It's a draw! You both drew rock!");
            }
              
            // USER CHOOSES SCISSORS
    
            if (humanSelection === "scissors" && computerSelection === "paper") {
                humanScore++
                console.log("You win this round! Scissors defeats paper! Your Score is: ", humanScore)
            } else if (humanSelection === "scissors" && computerSelection === "rock") {
                computerScore++
                console.log("You lose this round! Rock defeats scissors! Computer Score is: ", computerScore);
            } else if (humanSelection === "scissors" && computerSelection === "scissors") {
                console.log("It's a draw! You both drew scissors!");
            }
    
            // USER CHOOSES PAPER 
    
            if (humanSelection === "paper" && computerSelection === "rock") {
                humanScore++
                console.log("You win this round! Paper defeats rock! Your Score is: ", humanScore);
            } else if (humanSelection === "paper" && computerSelection === "scissors") {
                computerScore++
                console.log ("You lose this round! Scissors defeats paper! Computer Score is : ", computerScore);
            }else if (humanSelection === "paper" && computerSelection === "paper"){
                console.log("It's a draw! You both drew paper!");
            }

            round++;

        }while (round < 5)
}

playRound();