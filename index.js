console.log("Code your solution!");
// script.js
let form = document.querySelector("form");
let taskInput = document.querySelector("textarea[type='text']");

let subButton = document.querySelector("button[type='submit']");
// const newLi = document.createElement("li");
subButton.addEventListener("click", (event) => {
  event.preventDefault();

  const ul = document.querySelector("ul");
  let p = document.createElement("p");
  if (taskInput.value === "") {
    p.textContent = "Error: Must provide a task!";
    ul.prepend(p);
  } else {
    const newLi = document.createElement("li");
    newLi.textContent = taskInput.value;
    ul.append(newLi);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    newLi.append(deleteButton);
    deleteButton.addEventListener("click", (event) => {
      newLi.remove();
    });
  }
  const lis = document.querySelectorAll("li");
  for (let li of lis) {
    li.addEventListener("click", (event) => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });
  }
  form.reset();
});
