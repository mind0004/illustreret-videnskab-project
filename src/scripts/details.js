const choicesArray =document.querySelectorAll("#details .choice");

console.log(choicesArray)

choicesArray.forEach(choice=>{
    choice.addEventListener("click",changeChoice);
})

function changeChoice(){
choicesArray.forEach(choice=>{
    choice.classList.remove("selected")
})
    this.classList.add("selected")
}