let myNumbers = []
let myCards = []
let myCardsEl = document.getElementById("cards")

let rivalNumbers = []
let rivalCards = []
let rivalEl = document.getElementById("rival-cards")

function dealCards(){
    document.getElementById("stakes").style="display: none"
    let firstNumber = getRandomNumber()
    let secondNumber
    setTimeout(() => {
        secondNumber = getRandomNumber()
        myNumbers = [firstNumber, secondNumber]
        sum = firstNumber + secondNumber
        renderGame()
    }, 500)
}
function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    getRandomCard(randomNumber)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function getRivalRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    getRivalRandomCard(randomNumber)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function getRandomCard(number){
    let randomCard = document.createElement("img")
    for(let i = 0; i < cardsArray.length; i++){
        if(number === cardsArray[i].value){
            function random(){
                return Math.floor(Math.random() * 4)
            }
            let randomNumber = random()
            for(let j = 0; j < cardsArray[i].Name.length; j++){
                if(cardsArray[i].Name[randomNumber].isUsed === false){
                    randomCard.setAttribute("src", cardsArray[i].Name[randomNumber].imageUrl)
                    cardsArray[i].Name[randomNumber].isUsed = true
                    myCards.push(randomCard)
                    myCardsEl.appendChild(randomCard)
                }else{
                    getRandomCard()
                }
            }
        }
    }
}
function getRivalRandomCard(number){
    let randomCard = document.createElement("img")
    for(let i = 0; i < cardsArray.length; i++){
        if(number === cardsArray[i].value){
            function random(){
                return Math.floor(Math.random() * 4)
            }
            let randomNumber = random()
            for(let j = 0; j < cardsArray[i].Name.length; j++){
                if(cardsArray[i].Name[randomNumber].isUsed === false){
                    randomCard.setAttribute("src", cardsArray[i].Name[randomNumber].imageUrl)
                    cardsArray[i].Name[randomNumber].isUsed = true
                    randomCard.classList.add("new-card")
                    rivalCards.push(randomCard)
                    rivalEl.appendChild(randomCard)
                }else{
                    getRivalRandomCard()
                }
            }
        }
    }
}