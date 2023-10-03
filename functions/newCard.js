function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomNumber()
        sum += card
        myNumbers.push(card)
        renderGame()  
    }      
}
function rivalNewCard() {
    let card = getRivalRandomNumber()
    rivalSum += card
    rivalNumbers.push(card)
    rivalSumEl.textContent = rivalSum
    endGame()     
}
