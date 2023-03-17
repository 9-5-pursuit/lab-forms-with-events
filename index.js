
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let userInput = event.target.form.value;
    if(userInput === ""){
        let p = document.querySelector("p");
        p.textContent = "Error! To-Do input cannot be empty";
    } else {
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        li.textContent = userInput;
        ul.append(li);
    }

    let unorderedListItems = document.querySelectorAll("ul li");
    
    for(let ulItem of unorderedListItems){
        ulItem.addEventListener("click", () => {
            ulItem.setAttribute("style", "text-decoration: line-through");
        })
    }

    for(ulItem2 of unorderedListItems){
        ulItem2.addEventListener("dblclick", () => {
            ulItem2.setAttribute("style", "text-decoration: none");
        })
    }





    form.reset();
})

// let listItems = document.querySelectorAll("li");

// listItems.forEach((listItem) => {
//     listItem.addEventListener("click", (event) => {
//         let li = event.target;
//         li.style.textDecoration = underline;
//     })
// })