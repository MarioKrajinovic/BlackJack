let isAlive = false
let hasBlackJack = false

let chips = 1000
let chipsEl = document.getElementById("my-chips") 

let sum = 0
let sumEl = document.getElementById("sum")

let rivalSum = 0
let rivalSumEl = document.getElementById("rival-sum")

function startGame(){
    isAlive = true
    document.getElementById("start-game").style="display: none"
    document.getElementById("play-game").style="display: flex"
    document.getElementById("stakes").style="display: flex"
    chipsEl.textContent = chips + "€"
    sumEl.textContent = sum
    rivalSumEl.textContent = rivalSum
}