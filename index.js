// console.log("Code your solution!")

const form = document.querySelector("form");
const list = document.querySelector("body ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const body = document.querySelector("body");
  if (document.querySelector("p")) {
    document.querySelector("p").remove();
  }
  //   console.log(event);

  const newListItem = document.createElement("li");
  //   this will target the name of the input, NOT the id
  newListItem.textContent = event.target["new-task"].value;
  //   newListItem.textContent = document.getElementById("new-task").value;
  if (event.target["new-task"].value) {
    list.append(newListItem);
  } else {
    const pTag = document.createElement("p");
    pTag.innerText = "Error: To-do cannot be empty";
    body.append(pTag);
  }

  let listItemsArr = document.querySelectorAll("li");

  for (let item of listItemsArr) {
    item.addEventListener("click", () => {
      item.style.textDecoration = "line-through";
    });
  }

  event.target.reset();
});
