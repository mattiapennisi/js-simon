// Variabili

const countdown = document.querySelector('#countdown')
const instructions = document.querySelector('#instructions')
const numbersList = document.querySelector('#numbers-list')
const listItem = document.querySelector('.listItem')
const answersForm = document.querySelector('#answers-form')
const inputBtn = document.querySelector('#inputBtn')
const formControl = document.querySelector('.form-control')
const inputOne = document.querySelector('#inputOne')
const inputTwo = document.querySelector('#inputTwo')
const inputThree = document.querySelector('#inputThree')
const inputFour = document.querySelector('#inputFour')
const inputFive = document.querySelector('#inputFive')

let countdownCounter = 30
let numbersArray = []
let inputsArray = []

// Fa partire il countdown

countdown.innerText = countdownCounter

setInterval(function () {
    if (countdownCounter > 0) {
    countdownCounter -= 1
    countdown.innerText = countdownCounter
    } else {
        countdownCounter = 'Inserisci i numeri!'
        countdown.innerText = countdownCounter
        numbersList.classList.add('d-none')
        answersForm.classList.remove('d-none')
        instructions.classList.add('d-none')
    }
}, 100)

// Genera 5 numeri casuali

for (let i = 1; i <= 5; i++) {
    randomNumber = Math.floor(Math.random()*50 + 1)

    if (!numbersArray.includes(randomNumber)){

    numbersArray.push(randomNumber)

    numbersList.innerHTML += `<li class='listItem'>${randomNumber}</li>`
    } else {
        i -= 1
    }
} 

// Al click del button controlla se i valori inseriti dall'utente nel form corrispondono a quelli generati casualmente e fornisce un feedback

inputBtn.addEventListener('click', function(event) {
    event.preventDefault()

    let correctCheck = 0

    if (numbersArray.includes(Number(inputOne.value)) && inputsArray.length < 5) {
        inputsArray.push(inputOne.value)
        
        inputOne.classList.add('border-success')

        correctCheck += 1
    } else {
        inputOne.classList.add('border-danger')
    }

    if (numbersArray.includes(Number(inputTwo.value)) && inputsArray.length < 5) {
        inputsArray.push(inputTwo.value)
        
        inputTwo.classList.add('border-success')

        correctCheck += 1
    } else {
        inputTwo.classList.add('border-danger')
    }

    if (numbersArray.includes(Number(inputThree.value)) && inputsArray.length < 5) {
        inputsArray.push(inputThree.value)
        
        inputThree.classList.add('border-success')

        correctCheck += 1
    } else {
        inputThree.classList.add('border-danger')
    }

    if (numbersArray.includes(Number(inputFour.value)) && inputsArray.length < 5) {
        inputsArray.push(inputFour.value)
        
        inputFour.classList.add('border-success')

        correctCheck += 1
    } else {
        inputFour.classList.add('border-danger')
    }

    if (numbersArray.includes(Number(inputFive.value)) && inputsArray.length < 5) {
        inputsArray.push(inputFive.value)
        
        inputFive.classList.add('border-success')

        correctCheck += 1
    } else {
        inputFive.classList.add('border-danger')
    }

    inputBtn.disabled = true

    countdownCounter = ' '

    instructions.innerText = `Hai indovinato ${correctCheck} numeri`
})