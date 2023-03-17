// Select the elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const errorMessage = document.querySelector("#error-message");

// Handle the form submission
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value the user typed and trim any extra whitespace
  const todoText = todoInput.value.trim();

  // Check if the input is not empty
  if (todoText !== "") {
    // Create a new li element
    const newTodo = document.createElement("li");

    // Set the text of the new li element to be the input value
    newTodo.textContent = todoText;

    // Add a click event listener to the new li element
    newTodo.addEventListener("click", () => {
      // Toggle the 'completed' class of the clicked li element
      newTodo.classList.toggle("completed");
    });

    // Add the new li element to the ul list
    todoList.appendChild(newTodo);

    // Clear the input
    todoInput.value = "";

    // Clear any previous error message
    errorMessage.textContent = "";
  } else {
    // Display an error message if the input is empty
    errorMessage.textContent = "Error. Todo cannot be empty";
  }
});
