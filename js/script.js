// Variabili

const countdown = document.querySelector('#countdown')
const numbersList = document.querySelector('#numbers-list')

let countdownCounter = 30

// Fa partire il countdown

countdown.innerText = countdownCounter

setInterval(function () {
    if (countdownCounter > 0) {
    countdownCounter -= 1
    countdown.innerText = countdownCounter
    } else {
        countdownCounter = 'Inserisci i numeri!'
        countdown.innerText = countdownCounter
    }
}, 100)

// Genera 5 numeri casuali

for (let i = 1; i <= 5; i++) {
    randomNumber = Math.floor(Math.random()*50 + 1)

    numbersList.innerHTML += `<li class='listItem'>${randomNumber}</li>`
}

// if (countdownCounter == 30) {
    numbersList.classList.add('displayNone')
// }