console.log("Code your solution!");

const h1 = document.querySelector("h1");
h1.textContent = "Todos";

const hr = document.createElement("hr");

//const ul = document.createElement("ul");

const form = document.createElement("form");

const body =document.querySelector("body");

body.append(hr);

body.append(form);

const div = document.createElement("div");

div.classList.add("form-field");

form.appendChild(div);

const label = document.createElement("label");

label.setAttribute("for", "todos");

div.append(label);

const input = document.createElement("input");

input.setAttribute('id', 'to-dos');
input.setAttribute("name",'to-dos');
input.setAttribute("type", 'text');
div.append(input);

const input2 = document.createElement("input");
input2.setAttribute("type", 'submit');
input2.setAttribute("value", "submit");
input2.setAttribute("name", "submit");


div.append(input2);

const div2 = document.createElement("div");
body.append(div2);
div2.setAttribute("class", "list-of-todos");

const ul = document.createElement("ul")

div2.append(ul);



form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const todo = document.querySelector()
    const listOfTodos = document.createElement("li");

})



