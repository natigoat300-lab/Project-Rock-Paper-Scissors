// creat a function for a computer to choice random number
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 1) {
        return 'rock';
    } else if (choice == 2) {
        return 'paper'
    } else {
        return 'scissors'
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
// display each round winner
const displayEachRound = document.createElement('p')
displayEachRound.textContent = `Each round result: `
body.append(displayEachRound)
const div = document.createElement('div')
div.textContent = `human Score: ${humanScore} computerScore:${computerScore}`
body.append(div)

const winer = document.createElement('h1')
body.append(winer)


const btns = document.querySelectorAll('button')
btns.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.textContent;
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice)
        displayEachRound.textContent = `Each round result: ${result}`
        div.textContent = `human Score: ${humanScore} computerScore:${computerScore}`
        
        
        if (humanScore === 5) {
            winer.textContent = "🏆 Human wins the game! Refresh to play again.";
            disableButtons();
        }else if (computerScore === 5) {
            winer.textContent = "💻 Computer wins the game! Refresh to play again.";
            disableButtons();
        }
        
})})
// create div

function disableButtons() {
    btns.forEach(btn => {
        btn.disabled = true; 
    });
}