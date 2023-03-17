const form = document.querySelector("form")
const ul = document.querySelector("ul")

form.addEventListener("submit",(event) =>{
    event.preventDefault();
   
    const{assignment} = event.target;
    if(assignment.value === ""){
        const p = document.createElement("p");
        p.textContent = "Error! To do should not.be.empty"
        form.prepend(p)
        
    }
    else{
    const li = document.createElement("li");
    li.textContent = assignment.value;
    ul.append(li);

    const li_2 = document.querySelectorAll("li")
    for (let li of li_2){
    li.addEventListener("click",() =>{
        li.style.textDecoration = "line-through solid rgb(0, 0, 0)";
    })
}
    }
    form.reset();
  
})
