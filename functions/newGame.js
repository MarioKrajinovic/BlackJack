function newGame(){
    isAlive = true
    hasBlackJack = false
    message = ""
    for(let i = 0; i < chipsButtons.length; i++){
        document.querySelector(chipsButtons[i]).disabled = false
    }
    if(chips === 0){
        chips = 1000
    }
    if(chips < 1000){
        document.querySelector(".one-thousand").disabled=true;
    }if(chips < 500){
        document.querySelector(".five-hundred").disabled=true;
    }if(chips < 100){
        document.querySelector(".one-hundred").disabled=true;
    }if(chips < 50){
        document.querySelector(".fifty").disabled=true;
    }if(chips < 25){
        document.querySelector(".twenty-five").disabled=true;
    }if(chips < 10){
        document.querySelector(".ten").disabled=true;
    }if(chips < 5){
        document.querySelector(".five").disabled=true;
    }if(chips < 1){
        document.querySelector(".one").disabled=true;
    }
    stake = 0
    stakeEl.textContent = stake

    for(let i = 0; i < chipsArray.length; i++){
        table.removeChild(chipsArray[i])
    }
    for(let i = 0; i < cardsArray.length; i++){
        for(let j = 0; j < cardsArray[i].Name.length; j++){
            cardsArray[i].Name[j].isUsed = false
        }
    }
    for(let i = 0; i < myCards.length; i++){
        myCardsEl.removeChild(myCards[i])
    }
    for(let i = 0; i < rivalCards.length; i++){
        rivalEl.removeChild(rivalCards[i])
    }
    chipsArray = []
    myCards = []
    myNumbers = []
    sum = 0
    hasCards = false
    rivalCards = []
    rivalNumbers = []
    rivalSum = 0
    document.getElementById("new-game").style = "display: none"
    startGame()
}