let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 

let hasBlackjack = false
let isAlive = true
let message = ""

function startGame() {
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
console.log(message)

}
