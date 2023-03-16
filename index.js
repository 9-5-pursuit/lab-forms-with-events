const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const listElements = document.createElement("li");
  if (event.target.text.value === "") {
    document.querySelector("p").textContent = "Error - Empty String";
  } else {
    document.querySelector("p").textContent = "";
    listElements.textContent = event.target.text.value;

    listElements.addEventListener("click", (handleClick) => {
      handleClick.target.style.textDecoration = "line-through";
    });

    let ulElement = document.querySelector("ul");
    ulElement.append(listElements);
    event.target.text.value = "";
    form.reset();
    // $('#form').focus()
  }
});

// const list =  document.querySelector("li")
// list.addEventListener("dblclick", event => {
//     event.preventDefault()
//     if(list.target.text.value !== ""){
//         target.style.textDecoration = "none";
//     }
// })
