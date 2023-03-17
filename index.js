console.log("Code your solution!");
const forms = document.querySelector("#my-form");
const list = document.querySelector("#list ul");
console.log(forms);

forms.addEventListener("submit", function (event) {
  event.preventDefault();

  const todo = document.querySelector("#todo");

  const input = todo.value;
  console.log(input);

  const item = document.createElement("li");

  item.innerHTML = input;

  list.append(item);

  todo.value = "";
});

const itemList = document.querySelector("#list ul");
itemList.classlist.add("item-list");

console.log(itemList);

itemList.forEach((i) => {
  i.addEventListener("click", (event) => {
    const target = event.target;
    target.classlist.add("item-list");

    if (target.classlist.contains("item-list")) {
      target.remove();
    }
  });
});

/// didnt have enough time on this one
