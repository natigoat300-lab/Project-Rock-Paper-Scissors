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

const computerSelection = getComputerChoice();


// create buttons
const body = document.querySelector('body')
const rock = document.createElement('button')
rock.textContent = "rock"
body.append(rock)
//paper
const paper = document.createElement('button')
paper.textContent = "paper"
body.append(paper)
//scissors
const scissors = document.createElement('button')
scissors.textContent = "scissors"
body.append(scissors)

const btns = document.querySelectorAll('button')
btns.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.textContent;
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice))
    })
})