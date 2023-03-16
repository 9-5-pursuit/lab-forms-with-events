console.log("Code your solution!")

let hone = document.querySelector('h1')

hone.textContent = 'My To-Dos'

let ba = document.querySelector('body')

ba.append(document.createElement('ul'))

let nf = document.createElement('form')

let uin = document.createElement('input')

uin.setAttribute('type', 'text')
uin.setAttribute('name', 'todo')

let ubtn = document.createElement('input')

ubtn.setAttribute('type', 'submit')
ubtn.setAttribute('value', 'submit')

nf.appendChild(uin)
nf.appendChild(ubtn)

document.getElementsByTagName('body')[0].appendChild(nf)

let inputList = document.querySelector('ul')

nf.addEventListener("submit", (event) => {
    event.preventDefault();

    const { todo } = event.target;

    const userInputs = document.createElement("li");

    if (todo.value){
    userInputs.innerHTML = `${todo.value}`


    inputList.append(userInputs)}
    else {
        const errorInputs = document.createElement("p");
        errorInputs.textContent = 'Error. Todo Cannot be empty'
        
        document.getElementsByTagName('body')[0].appendChild(errorInputs)

    }
})



