// Variabili

const countdown = document.querySelector('#countdown')
const numbersList = document.querySelector('#numbers-list')
const listItem = document.querySelector('.listItem')
const answersForm = document.querySelector('#answers-form')

let countdownCounter = 30
let numbersArray = []

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

