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
    listItem.innerHTML = `${todo.value}`;
    emptyList.append(listItem); // attaches li to ul
    // const deleteItem = document.createElement("button"); // makes button
    // deleteItem.textContent = "Remove"; //write delete on button
    // listItem.append(deleteItem);

    form.reset(); // clears form elements
  }

  const done = document.querySelectorAll("li");

  done.forEach(function (i) {
    i.addEventListener("click", () => {
      i.style.textDecoration = "line-through";
    });
  });
});
