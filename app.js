// pick out all the elements with ID's

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

// get all the possible choices and have JS listen for a click
// these are funtions, this is what makes the JS code work
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

// by now here the user choice buttons are working.

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lose!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
    }
    if (computerChoice === 'paper' && userChoice == 'scissors') {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice == 'paper') {
        result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice == 'rock') {
        result = 'you win!'
    }
    resultDisplay.innerHTML = result
}