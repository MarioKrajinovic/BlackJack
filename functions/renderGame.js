let message = ""
let messageEl = document.getElementById("message")

function renderGame(){
    sumEl.textContent = sum
    if (sum <= 20 && rivalSum < 21) {
        message = "Do you want to draw a new card?"
    } 
    messageEl.textContent = message
}