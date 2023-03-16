const formGrab = document.querySelector(".user-form");
const resultsList = document.querySelector(".displayItem");

// console.log(formGrab);
// console.log(resultsList);

formGrab.addEventListener("submit", (event) => {
  event.preventDefault();
  const errorElement = document.createElement("p");
  const todoInput = document.querySelector("#new-ToDo");
  const newInput = document.createElement("li");

  errorElement.setAttribute("class", "format");

  newInput.textContent = todoInput.value;
  if (todoInput.value.length === 0) {
    errorElement.textContent = "Please type in textfield";
    formGrab.after(errorElement);
  } else {
    //errorElement.classList.add(".hidden");
    resultsList.append(newInput);
  }
  newInput.addEventListener("click", () => {
    newInput.style.textDecoration = "line-through solid rgb(0, 0, 0)";
    console.log("I can be clicked");
  });
});
