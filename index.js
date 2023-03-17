//console.log("Code your solution!")
const form = document.querySelector("body form");
//console.log(form);
const list = document.querySelector("body ul");
//console.log(list);
form.addEventListener("submit", (event) => {
    event.preventDefault();
      
    let lists = document.createElement("li");
    lists.textContent = event.target.todo.value;
    
    
});
