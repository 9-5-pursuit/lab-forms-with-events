let form = document.querySelector("form");
let list = document.querySelector("ul");
let submit = document.createElement("button");
submit.id = "submit-button";
submit.type = "submit";
submit.innerText = "submit";
submit.style.display = "inline-block";
form.append(submit);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = event.target["list-input"].value;

  if (input.length === 0) {
    let error = document.createElement("p");
    error.id = "error";
    error.innerText = "Error! Todo cannot be empty";
    document.body.after(error);
  } else {
    newTodo = document.createElement("li");
    newTodo.textContent = input;
    newTodo.addEventListener("click", () => {
      if (newTodo.style.textDecoration === "line-through") {
        newTodo.style.textDecoration = "none";
      } else {
        newTodo.style.textDecoration = "line-through";
      }
    });
    list.append(newTodo);
  }
  form.reset();
});
