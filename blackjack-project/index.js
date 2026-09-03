let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = true

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

let player = {
    name: "Avien",
    chips: 0
}

playerEl.textContent = player.name + " has won: " + "$" + player.chips 

function getRandomCard() {
    let randomCard = Math.floor( Math.random()* 13 ) + 1
    if(randomCard === 1) {
        return 11
    } else if(randomCard === 11 || randomCard === 12 || randomCard === 13){
        return 10
    } else {
    return randomCard
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    hasBlackjack = false
    isAlive = true
    renderGame()
}

function renderGame() { 
    cardsEl.textContent = "Cards: " //resets
    let message = ""
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
    message = "Blackjack! Yohoo!"
    hasBlackjack = true
    player.chips += 100
    playerEl.textContent = player.name + " has won: " + "$" + player.chips 
    } else {
    message = "You are out of the game."
    isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    if(isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
} 