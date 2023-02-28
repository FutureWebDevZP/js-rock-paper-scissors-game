// pick out all the elements with ID's

const computerChoice = document.getElementById('computer-choice')
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
}))

// by now here the user choice buttons are working.

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) // or you can use possibleChoices.length
    console.log(randomNumber)

}

