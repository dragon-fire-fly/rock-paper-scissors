const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * (possibleChoices.length + 1))
    
    if (randomNumber === 1){
        computerChoice = 'wolfy'
    }
    if (randomNumber === 2){
        computerChoice = 'toucan'
    }
    if (randomNumber === 3){
        computerChoice = 'kitty'
    }
    computerChoiceDisplay.innerHTML = computerChoice
    console.log(computerChoice)
}

function getResult(){
    if (computerChoice === userChoice){
        result = "It's a draw!"
    }
    if (computerChoice === "wolfy" && userChoice === "toucan"){
        result = "RrrRrr....rr....? (you win!)"
    }
    if (computerChoice === "wolfy" && userChoice === "kitty"){
        result = "You lose!"
    }
    if (computerChoice === "kitty" && userChoice === "wolfy"){
        result = "RRrrrRRRRrrrahhhh! (you win)"
    }
    if (computerChoice === "kitty" && userChoice === "toucan"){
        result = "Meeeeow! *pounce* (you lose)"
    }
    if (computerChoice === "toucan" && userChoice === "kitty"){
        result = "Meeeeow! *pounce* (you win)"
    }if (computerChoice === "toucan" && userChoice === "wolfy"){
        result = "RrrRrr....rr....? (you lose!)"
    }
    resultDisplay.innerHTML = result
}