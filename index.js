console.log("Code your solution!")

document.querySelector("h1").textContent = "TO-DOS"
document.querySelector("h1").setAttribute("style", "text-shadow: 1px 1px 2px gray")
document.querySelector("body").style.background = "linear-gradient(azure, gray)"

let form = document.createElement("form")
form.setAttribute("id", "to-do-list")
document.querySelector("h1").after(form)

let textInput = document.createElement("input")
textInput.setAttribute("type", "text")
textInput.setAttribute("id", "todo")
form.append(textInput)

let submitButton = document.createElement("input")
submitButton.setAttribute("type", "submit")
submitButton.setAttribute("value", "Add")
submitButton.style.margin = "10px"
textInput.after(submitButton)

let todoList = document.createElement("ul")
form.append(todoList)

let errorMessage = document.createElement("p")
errorMessage.textContent = "Error. Todo cannot be empty."
todoList.before(errorMessage)
errorMessage.style.display = "none"

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (textInput.value === "") {
        errorMessage.style.display = "inline"
    } else {
        let lis = document.createElement("li")
        lis.style.margin = "10px"

        let deleteButton = document.createElement("input")
        deleteButton.setAttribute("type", "button")
        deleteButton.setAttribute("value", "delete")
        deleteButton.style.margin = "10px"

        lis.textContent = `${textInput.value}`
        lis.style.fontWeight = "100"
        lis.style.fontSize = "30px"
        lis.style.fontFamily = "Helvetica, sans-serif"
        todoList.append(lis)
        lis.append(deleteButton)
        
        textInput.value = ""
        errorMessage.style.display = "none"
        let listButtons = document.querySelectorAll("ul li input")
        for (let button of listButtons) {
            button.addEventListener("click", (event) => {
                event.target.parentNode.style.display = "none"
          })
        }  
    }

    let listElements = document.querySelectorAll("ul li")
    for (let element of listElements) {
        element.addEventListener("click", () => {
            element.style.textDecoration = "line-through"
        /*
            this code below (in my mind) should work but for some reason it does not. 
            it works for each OTHER element and also some other weird quirkiness.
            i had my friend do the same exact code and it was doing different
            things. I have absolutely no idea why.
        */

        //  if (element.style.textDecoration !== "line-through") {
        //      element.style.textDecoration = "line-through"
        //  } else {
        //      element.style.textDecoration = "none"
        //  }
      })
    }
})