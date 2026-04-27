// creat a function for a computer to choice random number
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 1) {
        return 'rock';
    } else if (choice == 2) {
        return 'paper'
    } else {
        return 'siccsor'
    }
    
}

function getHumanChoice() {
    return prompt("Choice: rock, paper, or scissors").toLowerCase();
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
    return "It's a tie! No one wins!";

    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') || 
    (humanChoice === 'scissors' && computerChoice === 'paper')) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`; 
    } else {
    computerScore++; 
    return `You lose! ${computerChoice} beats ${humanChoice}`;
}
    
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


// create a play game function
function playGame() {

    for (let i = 0; i < 5; i++ ) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection)
        console.log(result)
        console.log(`CURRENT SCORE -> Human: ${humanScore} | Computer: ${computerScore}`)
    }
    if (humanScore > computerScore) {
        console.log("You win! Human beats computer");

    }else if (humanScore < computerScore) {
        console.log("You lost! Computer beats Human")

    }else {
        console.log("It's draw! Human 🤝 Computer ")
    }
    console.log(`FINAL SCORE -> Human: ${humanScore} | Computer: ${computerScore}`)
}
playGame();

