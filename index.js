console.log("Code your solution!")

document.querySelector('h1').textContent = 'My To-Dos'

const form = document.createElement("form");

const textarea = document.createElement("textarea");
textarea.setAttribute('name', 'todo')
textarea.setAttribute('type', 'text')
form.appendChild(textarea);

const submitBtn = document.createElement("button");
submitBtn['type'] = 'submit';
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);

const list = document.createElement("ul");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const { todo } = event.target;
    if (/^\w/.test(todo.value.trim())) {
        todo.value.split('\n').forEach((item) => {
            const textareaValue = item;
            const listItem = document.createElement("li");
            const textNode = document.createTextNode(textareaValue);
            listItem.appendChild(textNode);

            const delBtn = document.createElement("button");

            delBtn.textContent = "delete";

            listItem.appendChild(delBtn)
            list.appendChild(listItem);

            delBtn.addEventListener("click", () => {
                listItem.remove()
            })

            form.reset();
            const sthru = document.querySelectorAll("li");

            sthru.forEach((item) => {
                item.addEventListener("click", () => {
                    if (!item.style.textDecoration) item.style.textDecoration = 'line-through';
                    else item.style.textDecoration = 'none';
                });
            });
        }
        )
    } else {
        let errorp = document.querySelector('p')
        errorp.textContent = 'Error. Todo cannot be empty'
        form.reset()
    }
});

document.body.appendChild(form);
document.body.appendChild(list);
document.body.append(document.createElement('p'))



