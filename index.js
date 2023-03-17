const form = document.querySelector("#myForm");
// console.log(form);

let body = document.querySelector("body");

//we want something to happen when the submit button is pressed
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event.target);
  if (document.querySelector("p")) {
    document.querySelector("p").remove();
  }
  console.log(event);

  const textInput = event.target.box.value; //include .value to access the value of the text
  // console.log(textInput);
  const listItem = document.createElement("li");

  listItem.textContent = textInput;
  const list = document.querySelector("ul");

  if (textInput.length) {
    list.append(listItem);
  } else {
    const pTag = document.createElement("p");
    pTag.textContent = "You must enter text here!";

    body.append(pTag);
  }

  let taskComplete = document.querySelectorAll("li");
  for (let task of taskComplete) {
    task.addEventListener("click", () => {
      task.style.textDecoration = "line-through";
    });
  }

  event.target.reset();
});
