let countEl=document.getElementById("count-el")
let count=0
console.log(countEl)

function increment(){
    count+=1
    countEl.innerText = count
}

let previousEl=document.getElementById("previous-el")
let message="Previous entries are"
function save(){
    previousEl.textContent=count + "-"
    countEl.innerText=0
    count=0
}
