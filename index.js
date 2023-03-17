const form = document.querySelector("form");
const p = document.createElement("p");
const h4 = document.querySelector("h4");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = document.querySelector("input[type='text']");

  if (todo.value === "") {
    h4.append(p);
    p.textContent = "Error!";
  }

  const item = document.createElement("li");
  const item2 = document.querySelector("ul");
  item.textContent = todo.value;
  todo.append(item);
  item2.append(item);

  item.addEventListener("click", () => {
    item.style.textDecoration = "line-through";
  });
});
