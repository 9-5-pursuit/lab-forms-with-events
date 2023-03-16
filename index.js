const form = document.querySelector("form");
const listArea = document.querySelector("#lists ul");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { todo } = event.target;
    const fieldSet = document.querySelector("#error");
    if(fieldSet) {
        fieldSet.remove()
    }
    if(!todo.value) {
        const fieldSet = document.querySelector("fieldset");
        const newPelement = document.createElement("p");
        newPelement.setAttribute("id","error");
        newPelement.innerText = "Error - Empty String" 
        fieldSet.append(newPelement)
    } else {
        let inputText = todo.value.split("\n");
        for (let todoText of inputText){ 
            if(todoText) {
                const newListItem = document.createElement("li");
                const newDiv = document.createElement("span");
                newDiv.style.paddingRight = "10px";
                newDiv.innerText = todoText;
                const newDelete = document.createElement("button");
                newDelete.innerHTML = "&#10060;";
                newListItem.prepend(newDiv);
                newDiv.after(newDelete);
                newListItem.addEventListener("click",() => { 
                    if(newListItem.style.textDecoration) {
                        newListItem.style.textDecoration = "";
                    } else {
                        newListItem.style.textDecoration = "line-through solid rgb(0, 0, 0)";
                    }
                }); 
                newDelete.addEventListener("click",() => { 
                    newListItem.remove();
                });
                listArea.append(newListItem);
            }
        }
        form.reset();
    }
});

