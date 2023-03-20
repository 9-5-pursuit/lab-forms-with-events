const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const errorMessage = document.getElementById("error-message");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const todoText = todoInput.value;
  if (todoText.trim() === "") {
    errorMessage.textContent = "Error. Todo cannot be empty.";
    return;
  }
  errorMessage.textContent = "";
  const newTodo = document.createElement("li");
  newTodo.textContent = todoText;
  newTodo.addEventListener("click", function () {
    newTodo.style.textDecoration = "line-through";
  });
  todoList.append(newTodo);
  todoInput.value = "";

  form.reset();
});
