const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let task = event.target.textarea.value;
  if (!event.target.textarea.value) {
    let p = document.querySelector("p");
    p.textContent = "Error: Enter A Task!";
  } else {
    let li = document.createElement("li");
    li.textContent = task;
    let ul = document.querySelector("ul");
    ul.append(li);
    const removeButton = document.createElement("button");
    removeButton.textContent = "🚮";
    li.append(removeButton);

    li.addEventListener("click", (event) => {
      if (li.style.textDecoration === "line-through") {
        li.style = "none";
      } else {
        event.target.style.textDecoration = "line-through";
      }
    });
    removeButton.addEventListener("click", (event) => {
      li.remove();
    });
    form.reset();
  }
});
