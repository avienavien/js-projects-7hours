let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard 

let hasBlackjack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function getRandomCard() {
    let randomCard = Math.floor( Math.random()*11 )
    return randomCard
}

function startGame() {
    renderGame()
}
function renderGame() {  
    cardsEl.textContent = "Cards: " //resets
    
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    }   
    else if (sum === 21) {
    message = "Blackjack! Yohoo!"
    hasBlackjack = true
    }
    else {
    message = "You are out of the game."
    isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    thirdCard = getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
    
    renderGame()
} 