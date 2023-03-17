//console.log("CODE YOUR SOLUTION");

const body = document.querySelector("body");
const form = document.querySelector("form");
const uls = body.querySelector("ul");
form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();

  const lis = document.createElement("li");
  lis.textContent = e.target.input.value;
  if (e.target.input.value) {
    uls.append(lis);
  } else {
    pTag = document.createElement("p");
    pTag.innerText = "Error: input can't be empty";
    body.append(pTag);
  }
});
