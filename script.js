function getHumanChoice (choice) {
    choice = prompt("rock, paper o scissor? ", "").toLowerCase();
    console.log(choice);
    return choice;
}

getHumanChoice()

function getComputerChoice(random) {
    random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        random = "rock"
    }else if (random === 2) {
        random = "paper";
    } else if (random === 3) {
        random = "scissor";
    }
    
    console.log(random);
}

getComputerChoice()

