function endGame(){
    if(rivalSum <= 15){
        setTimeout(() => {rivalNewCard()}, 500)
    }
    else{
        if(rivalSum > 21 && sum > 21){
            message = "Equailzed game!"
            document.getElementById("new-game").style = "display: block"
            isAlive = false
            chips += stake
            chipsEl.textContent = chips
        }
        else if(rivalSum === sum){
            message = "Equailzed game!"
            document.getElementById("new-game").style = "display: block"
            isAlive = false
            chips += stake
            chipsEl.textContent = chips
        }
        else if(rivalSum > 21){
            message = "You're the winner!"
            hasBlackJack = true
            document.getElementById("new-game").style = "display: block"
            chips += stake * 2
            chipsEl.textContent = chips
        }
        else if(sum > 21){
            message = "You're out of the game!"
            isAlive = false
            document.getElementById("new-game").style = "display: block"
        }
        else if(sum > rivalSum){
            message = "You're the winner!"
            hasBlackJack = true
            document.getElementById("new-game").style = "display: block"
            chips += stake * 2
            chipsEl.textContent = chips
        }
        else if(rivalSum === 21 && sum === 21){
            message = "Equailzed game!"
            document.getElementById("new-game").style = "display: block"
            hasBlackJack = true
            chips += stake
            chipsEl.textContent = chips
        }
        else if(rivalSum === 21){
            message = "You lost!"
            isAlive = false
            document.getElementById("new-game").style = "display: block"
        }
        else if (sum === 21) {
            message = "You've got Blackjack!"
            hasBlackJack = true
            document.getElementById("new-game").style = "display: block"
            chips += stake * 2
            chipsEl.textContent = chips
        } 
        else
        {
            message = "You lost!"
            isAlive = false
            document.getElementById("new-game").style = "display: block"
        }
        messageEl.textContent = message
    }
}