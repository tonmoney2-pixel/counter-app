let countEl=document.getElementById("count-el")
let count=0
console.log(countEl)

function increment(){
    count+=1
    countEl.innerText = count
}

let previousEl=document.getElementById("previous-el")
function save(){
    let saveBtn=  " "+ count + " - "
    previousEl.textContent += saveBtn
    countEl.innerText=0
    count =0
}
