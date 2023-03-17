const form= document.querySelector("#form")
const list = document.querySelector("#list ul")



form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    const ToDoTexts = event.target.ToDoText

//creates list item to add
    const newToDo = document.createElement("li");
    newToDo.innerHTML = `${ToDoTexts.value}`
//adds it to the list
    list.append(newToDo)

//error message
    if(!event.target.ToDoText.value){
        const alert = document.createElement("p")
        alert.textContent = 'Error. Todo cannot be empty';
        form.append(alert)
    }else{
                //cossing out
         const listItem = document.querySelectorAll("#list ul");
        for(let item of listItem){
        item.addEventListener("click", () =>{

        item.style.textDecoration = "line-through solid"
        // item.style.textDecoration = "line-through solid
       })}


    }
})




