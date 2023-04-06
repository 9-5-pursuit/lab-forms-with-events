const form = document.querySelector("form"); //puts form into variable
const emptyList = document.querySelector("ul"); //puts list in variable
const textBar = document.querySelector("#textbox"); //puts text in variable
const error = document.createElement("p"); //puts error in variable

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stops page from refreshing to default state
  // console.log(event.target);
  const { todo } = event.target; //grabs the value of the textbox

  if (`${todo.value}` === "") {
    const error = document.createElement("p"); //puts error in variable
    error.innerHTML = "Error! Todo cannot be empty";
    form.append(error);
  } else {
    const listItem = document.createElement("li"); //creates list item html

    const listItemDelete = document.createElement("button"); // created delete button
    listItemDelete.style.color = "red";
    listItemDelete.innerHTML = "Delete"; //writes delete on the button
    listItem.innerHTML = `${todo.value}`;
    emptyList.append(listItem); // attaches li to ul
    listItem.append(listItemDelete); // attches delete button

    form.reset(); // clears form elements

    listItemDelete.addEventListener("click", function () {
      listItem.remove();
    });
  }

  const done = document.querySelectorAll("li");

  done.forEach((e) => {
    e.addEventListener("click", () => {
      e.style.textDecoration =
        e.style.textDecoration === "line-through" ? "" : "line-through";
    });
  });
});
