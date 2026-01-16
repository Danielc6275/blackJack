// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

// firstCard needs to be deleted for the game to be fair
// secondCard needs to be deleted for the game to be fair

let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector('#cards-el')

let player = {
    name: "Daniel",
    chips: 100
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips
// Query selector is like getelementById but more versatile; it can select classes, tags, or ids.
// however, you need to specify what you are selecting with # for id and . for class.


function getRandomCard() {
    let randCard = Math.floor(Math.random() * 13) + 1
    if (randCard === 1) {
        return 11
    } else if (randCard > 10) {
        return 10
    } else {
        return randCard
    }
    // note: the return command produces a value that can be used later; console logging it in the function would not be usable later.
}

function startGame() {
    // This function creates 2 variables and changes a few other variable values.  
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck")
        let card = getRandomCard()
        sum += card
        cards.push(card) // adds the card variable to the end of the cards array
        renderGame()
    }
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo!  You've got Blackjack!"
        hasBlackJack = true
        player.chips += 10
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= 10
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    playerEl.textContent = player.name + ": $" + player.chips
}
// console.log(hasBlackJack)
// console.log("Alive? " + isAlive)  
// //CASH OUT!