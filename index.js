console.log("Code your solution!")
const form = document.querySelector("form");
const toDoList = document.querySelector("ul");
const error = document.createElement("p");

//Adds new task to to-do list
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = document.querySelector("#task").value;
  const newTask = document.createElement("li");
  newTask.textContent = task
  
  //If no task is inputted then error message is displayed
  if (task.trim() === "") {
    error.textContent = "Error. Todo cannot be empty";
    return toDoList.append(error);;
  }

  //Add strike-through to task when user clicks on list item
  const taskList = document.querySelectorAll("ul");
  taskList.forEach((task) => {
  task.addEventListener("click", (event) => {
    event.target.style.textDecoration = "line-through";
  });
});
  
//Add the new task to to-do list
toDoList.append(newTask);

//Clear form fields
form.reset();
});

