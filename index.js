const form = document.querySelector("form");
const todo = document.querySelector("#todo-input");
// const list = document.querySelector("#list ul")
const error = document.querySelector("#errorSection");

const errorMessage=document.querySelector("#p-error");

form.addEventListener("submit", (event)=> {
    event.preventDefault();
   
    if (!todo.value){
        console.log("Error message!");
        error.classList.add("error-div");
        errorMessage.textContent = "Please enter a todo";
    }else{
        error.classList.remove("error-div");
        errorMessage.textContent = "";
   
    // create li tag
    const todoList1 = document.createElement("li");
    todoList1.classList.add("appear");
    
    // create strikethrough 
    const spanTag = document.createElement("span");
    spanTag.addEventListener("click", handleStrikeThrough);
    spanTag.textContent = todo.value;


    todoList1.append(spanTag);

    const divTag = document.createElement("div");
    const deleteButton = document.createElement("button");
   
   // addEventListener to delete button
    deleteButton.addEventListener("click", handleDelete);
    deleteButton.textContent = "DELETE";
   
    divTag.append(deleteButton);
    todoList1.append(divTag);
 
    const list = document.querySelector("#ul-todo")
    list.append(todoList1)

    form.reset() 

}

});
function handleStrikeThrough(event){
    event.target.classList.toggle("strike-through") ;
}

function handleDelete(event){
    const currentLi = event.target.parentElement.parentElement;

    currentLi.classList.add("removed");
  
    currentLi.addEventListener("transitionend", function () {
      console.log("this function triggers when a transition element ended");
      currentLi.remove();
    });
}

// const todoList1 = document.createElement("li");
// todoList1.classList.add("appear");

// const spanTag = document.createElement("span");

// spanTag.addEventListener("click", handleStrikeThrough);
// spanTag.textContent=todo.value


// todoList1.append(spanTag);

// const divTag = document.createElement("div");
// const deleteButton = document.createElement("button");
//  deleteButton.addEventListener("click",handleDelete);
//  deleteButton.textContent = "delete"
//  divTag.append(deleteButton)
//  todoList1.append(divTag)
 
// const list = document.querySelector("#ul-list")
//  list.append(todoList1)
