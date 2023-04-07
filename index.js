console.log("Code your solution!");

const h1 = document.querySelector("h1");
h1.textContent = "Todos";

const hr = document.createElement("hr");

const form = document.createElement("form");

const body = document.querySelector("body");

body.append(hr);

const div = document.createElement("div");

div.classList.add("form-field");

div.appendChild(form);

body.append(div);

const label = document.createElement("label");

label.setAttribute("for", "todos");

form.append(label);

const input = document.createElement("input");

input.setAttribute("id", "todo");
input.setAttribute("name", "todos");
input.setAttribute("type", "text");
form.append(input);

const input2 = document.createElement("input");
input2.setAttribute("type", "submit");
input2.setAttribute("value", "submit");
input2.setAttribute("name", "submit");

form.append(input2);

const div2 = document.createElement("div");
body.append(div2);
div2.setAttribute("class", "list-of-todos");


const ul = document.createElement("ul");

div2.append(ul);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const list = event.target.todo.value;
 console.log(list);

   const listOfTodos = document.createElement("li");
   listOfTodos.textContent = list
   ul.appendChild(listOfTodos);

  
});
