//console.log("CODE YOUR SOLUTION");

const body = document.querySelector("#body");
const form = document.querySelector("form");
const uList = body.querySelector("ul");
const todoBox = document.querySelector("#todo-box");
const submitTask = document.querySelector("#sumit-task");

form.addEventListener("submit", (e) => {
  // console.log(e.target.todo);
  e.preventDefault();
  if (document.querySelector("p")) {
    document.querySelector("p").remove();
  }
  const liList = document.createElement("li");
  liList.textContent = e.target["todo"].value;
  if (e.target["todo"].value) {
    uList.append(liList);
  } else {
    pTag = document.createElement("p");
    pTag.innerText = "Error: To-Do can't be empty";
    body.append(pTag);
  }
  e.target.reset();
});
