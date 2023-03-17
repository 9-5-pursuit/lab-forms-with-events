console.log("Code your solution!");
const form = document.querySelector("form");
const list = document.querySelector("#list");
const taskText = document.querySelector("#taskText");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let listItem = document.createElement("li");
  if (!event.target.value) {
    throw "You must enter a task before submitting.";
  } else {
    listItem.innerText = event.target.value;
    list.append(listItem);
  }
});
