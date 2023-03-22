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

let submitButton = document.createElement("button")
submitButton.setAttribute("type", "submit")
submitButton.textContent = "add"
submitButton.style.margin = "10px"
submitButton.style.background = "silver"
textInput.after(submitButton)

let todoList = document.createElement("ul")
form.append(todoList)

let errorMessage = document.createElement("p")
errorMessage.textContent = "Error. Todo cannot be empty."
todoList.before(errorMessage)
errorMessage.style.display = "none"

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (!textInput.value) {
        errorMessage.style.display = "inline"
        console.log("Error!")
    } else {
        let lis = document.createElement("li")
        lis.style.margin = "10px"

        let deleteButton = document.createElement("button")
        deleteButton.setAttribute("type", "submit")
        deleteButton.textContent = "delete"
        deleteButton.style.margin = "10px"

        lis.textContent = `${textInput.value}`
        lis.style.fontWeight = "100"
        lis.style.fontSize = "30px"
        lis.style.fontFamily = "Helvetica, sans-serif"
        todoList.append(lis)
        lis.append(deleteButton)
        
        textInput.value = ""
        errorMessage.style.display = "none"
        let listButtons = document.querySelectorAll("ul li button")
        for (let button of listButtons) {
            button.addEventListener("click", (event) => {
                event.target.parentNode.remove()
          })
        }
        
        lis.addEventListener("click", (event) => {
         if (event.target.style.textDecoration !== "line-through") {
             event.target.style.textDecoration = "line-through"
         } else {
             event.target.style.textDecoration = "none"
         }
      })
    }
    
    form.reset()
})