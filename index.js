// Leecture Recap and Practive

//console.log("Code your solution!");

// const toDo = document.querySelector("input[type='text']");
// console.log(toDo.value);

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const toDo = document.querySelector("#to-do");
//   console.log(toDo.value);
// });

// Lab Work

const form = document.querySelector("form");
const toDoList = document.querySelector("#list ul");
//const heading = document.querySelector("h1");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const toDo = event.target["to-do"].value;
  console.log(toDo);

  if (!toDo) {
    let paragraph = document.createElement("p");
    paragraph.textContent = "Error! Todo cannot be empty";
    const button = document.querySelector("#button");
    button.after(paragraph);
  } else {
    const newToDoListItem = document.createElement("li");

    newToDoListItem.innerHTML = `${toDo}`;
    //newToDoListItem.setAttribute("style", "color: red");
    newToDoListItem.addEventListener("click", () => {
      newToDoListItem.setAttribute("style", "text-decoration: line-through");
    });

    toDoList.append(newToDoListItem);
  }

  form.reset();
});
