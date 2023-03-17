// console.log(text.value);

let text = document.querySelector("input[type='text']");
// let text = document.querySelector("textarea[type='text']");

let submitButton = document.querySelector("button[type='submit']");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let ul = document.querySelector("ul");
  let p = document.createElement("p");
  const newLi = document.createElement("li");

  if (text.value === "") {
    console.log("error");
    p.textContent = "Error! To-Do cannot be empty.";
    ul.prepend(p);
  } else {
    newLi.textContent = text.value;
    ul.append(newLi);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    newLi.append(deleteButton);
    deleteButton.addEventListener("click", (event) => {
      newLi.remove();
    });

    const form = document.querySelector("form");

    form.reset();
  }

  let lis = document.querySelectorAll("li");
  for (let li of lis) {
    li.addEventListener("click", (event) => {
      if (li.style.textDecoration === "line-through") {
        li.style = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });
  }
});
