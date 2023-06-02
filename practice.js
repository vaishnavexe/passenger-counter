let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetEl = document.getElementById("reset-el")

let count = 0

function increment() {
count += 1
countEl.textContent = count
}




function save() {
let countStr = count + " - " + " \t"
resetEl.textContent += countStr
count =0;
countEl.textContent = count
}


function reset(){
    resetEl.textContent = ""
}