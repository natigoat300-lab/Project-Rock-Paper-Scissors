// create a div for container of buttons
const body = document.querySelector('body')
const div = document.createElement('div')
div.classList.add('container')
body.append(div)

// create rock button
const rock = document.createElement('button')
rock.textContent = 'rock'
div.append(rock)

// create paper button
const paper = document.createElement('button')
paper.textContent = 'paper'
div.append(paper)

// create scissors button
const scissors = document.createElement('button')
scissors.textContent = 'scissors'
div.append(scissors)

// create result
let result = document.createElement('div')
div.append(result)
// create score

// make computer to choose randomly
function computerChoice() {
    let choice = ['rock','paper','scissors']
    return choice[Math.floor(Math.random() * choice.length )]
}

let humanScore = 0;
let computerScore = 0;

// make a function return winner
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "it's a tie"
    }else if (humanChoice == 'rock' && computerChoice == 'scissors'|| humanChoice == 'scissors' && computerChoice == 'paper' || (humanChoice == 'paper' && computerChoice == 'rock')) {
        humanScore++
        return `You Win! ${humanChoice} beats ${computerChoice}`
    } else {
        computerScore++
        return `You lost! ${computerChoice} beats ${humanChoice}`
    }
}



const btns = document.querySelectorAll('button')
btns.forEach((button) => {
    button.addEventListener('click', () => {
        let humanChoice = button.textContent
        let computerSelection = computerChoice()
        result.textContent = playRound(humanChoice, computerSelection)
        p.textContent = `Score - Human: ${humanScore} | Computer: ${computerScore}`

        if (humanScore > 5 && computerScore > 5 ) {
            return
        }
        else if (humanScore == 5) {
            disableButtons();
            returnGame()
            return winer.textContent = 'You win!'
        }else if (computerScore == 5){
            returnGame()
            disableButtons();

            return winer.textContent = 'You lost! Computer win'
        }   
    })
})
const p = document.createElement('p')
p.textContent = `Score - Human: ${humanScore} | Computer: ${computerScore}`
div.append(p)

const winer  = document.createElement('h1')
div.append(winer)
winer.style.color = "green"

function disableButtons() {
    btns.forEach(btn => {
        btn.disabled = true;
    });
}
const playAgain = document.createElement('p')
div.append(playAgain)

function returnGame() {
    return playAgain.textContent = "To play again return the browser"
}