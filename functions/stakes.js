let chipsButtons = [".one-thousand", ".five-hundred", ".one-hundred", ".fifty", ".twenty-five", ".ten", ".five", ".one"]
let chipsArray = []
let stake = 0
let stakeEl = document.getElementById("stake")

let table = document.getElementById("table")

function bet(value){
    stake += value
    stakeEl.textContent = stake + "€"
    chips -= value
    chipsEl.textContent = chips + "€"
    setStake(value)
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
}
function setStake(value){
    if(value === 1000){
        let chip = document.createElement("img")
        chip.setAttribute("src", "chips/one-thousand.png")
        chipsArray.push(chip)
        table.appendChild(chip)
    }else if(value === 500){
        let chip = document.createElement("img")
        chip.setAttribute("src", "chips/five-hundred.png")
        chipsArray.push(chip)
        table.appendChild(chip)
    }else if(value === 100){
        let chip = document.createElement("img")
        chip.setAttribute("src", "chips/one-hundred.png")
        chipsArray.push(chip)
        table.appendChild(chip)
    }else if(value === 50){
        let chip = document.createElement("img")
        chip.setAttribute("src", "chips/fifty.png")
        chipsArray.push(chip)
        table.appendChild(chip)
    }else if(value === 25){
        let chip = document.createElement("img")
        chip.setAttribute("src", "chips/twenty-five.png")
        chipsArray.push(chip)
        table.appendChild(chip)
    }else if(value === 10){
        let chip = document.createElement("img")
        chip.setAttribute("src", "chips/ten.png")
        chipsArray.push(chip)
        table.appendChild(chip)
    }else if(value === 5){
        let chip = document.createElement("img")
        chip.setAttribute("src", "chips/five.png")
        chipsArray.push(chip)
        table.appendChild(chip)
    }else{
        let chip = document.createElement("img")
        chip.setAttribute("src", "chips/one.png")
        chipsArray.push(chip)
        table.appendChild(chip)
    }
}






