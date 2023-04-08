

const form = document.querySelector("form");
 const todoInput = document.querySelector("#todo-input");

const ulTag = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();

    let spliArray = todoInput.value.split("\n");
  for (let i = 0; i < spliArray.length; i++) {
    let element = spliArray[i];
    const newLiTag = document.createElement("li");
    newLiTag.innerHTML = element;
    ulTag.append(newLiTag);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    newLiTag.append(delBtn);
   
    newLiTag.addEventListener("click", (event) => {
      if (!newLiTag.style.textDecoration === "") {
        newLiTag.style = "line-through";
      } else {
        event.target.style.textDecoration = "line-through";
      }
    });
    
    delBtn.addEventListener("click", () => {
      newLiTag.remove();
    });
  }    
    form.reset();

});
   
    

    

 


 