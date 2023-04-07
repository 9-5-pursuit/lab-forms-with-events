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

  if (!e.target["todo"].value) {
    pTag = document.createElement("p");
    pTag.innerText = "Error: To-Do can't be empty";
    body.append(pTag);
  } else {
    liList.textContent = e.target["todo"].value;
    uList.append(liList);
    uList.querySelector("h3").style.textDecoration = "underline";
  }
  console.log(uList);

  // liList.forEach((element) => {
  //   console.log(element);
  liList.addEventListener("click", (e) => {
    liList.style.textDecoration = "line-through";
  });
  // });
  e.target.reset();
});
