console.log("Code your solution!")

const body = document.querySelector("body");


const h1 = document.querySelector("h1");
h1.textContent = "My To-Dos"


const hr = document.createElement("hr");
body.append(hr);


const form = document.createElement("form");
body.append(form);


const div = document.createElement("div");
div.classList.add("form-field");
form.appendChild(div);


const label = document.createElement("label");
label.setAttribute("for", "my to-dos");
div.append(label);

const input = document.createElement("input");
input.setAttribute("id", "my to-dos");
input.setAttribute("name", "my to-dos");
input.setAttribute("type", "text");
div.append(input);

const inputing = document.createElement("input");
inputing.setAttribute("type", "submit");
inputing.setAttribute("value", "submit");
div.append(inputing);

const diving =
document.createElement(div);
body.append(diving);
diving.setAttribute("class", "form-field");

const ul = document.createElement("ul");
diving.append(ul);

