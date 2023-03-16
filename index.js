console.log("Code your solution!")

let hone = document.querySelector('h1')

hone.textContent = 'My To-Dos'

const form = document.createElement("form");

    // Create the textarea element
    const textarea = document.createElement("textarea");
    form.appendChild(textarea);

    const submitBtn = document.createElement("button");
    submitBtn['type']= 'submit';
    submitBtn.textContent = "Submit";
    form.appendChild(submitBtn);
    //form.appendChild(delbtn)

    // Create the unordered list element
    const list = document.createElement("ul");

    submitBtn.addEventListener("click", (event) => {
      event.preventDefault()
      if (textarea.value){
      const textareaValue = textarea.value;
      const listItem = document.createElement("li");
      const textNode = document.createTextNode(textareaValue);
      listItem.appendChild(textNode);
      list.appendChild(listItem);
      form.reset();
      const sthru = document.querySelectorAll("li");

      sthru.forEach((item) => {
      item.addEventListener("click", () => {
        item.style.textDecoration = 'line-through'
      });
    });
    } else {

        let errorp = document.querySelector('p')
        errorp.textContent = 'Error. Todo cannot be empty'
        form.reset()
    }
    });

    document.body.appendChild(form);
    document.body.appendChild(list);
    document.querySelector('body').append(document.createElement('p'))



