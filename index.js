console.log("Code your solution!");

const form = document.querySelector("form");

const list = document.querySelector("ul");

const pTag = document.querySelector("p");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const listItem = document.createElement("li");

  if (event.target.todo.value === "") {
    pTag.innerText = "Error. Todo cannot be empty";
  } else {
    listItem.innerText = event.target.todo.value;

    list.append(listItem);
  }

  const liTag = document.querySelectorAll("li");

  liTag.forEach((element) => {
    element.addEventListener("click", (item) => {
      item.target.style.textDecoration = "line-through solid";
    });
  });

  form.reset();
});
