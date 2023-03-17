console.log("Code your solution!");
// write code below

//create variables to store our elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const errorMessage = document.getElementById("error-message");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const newTodo = document.createElement("li");
    newTodo.textContent = todoText;

    newTodo.addEventListener("click", () => {
      newTodo.classList.toggle("completed");
    });
    todoList.append(newTodo);
    todoInput.value = "";
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Error. Todo cannot be empty";
  }
});
