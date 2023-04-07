function handleStrikeThrough(event) {
    event.target.classList.toggle("strikethrough");
  }
  
  function handleDelete(event) {
    event.target.parentElement.remove();
  }
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    try {
      if (!todoInput.value) {
        throw new Error("Please enter a todo");
      }
  
      // Create a li tag
      const liTag = document.createElement("li");
      liTag.classList.add("appear");
  
      const spanTag = document.createElement("span");
      // Attach a click event
      spanTag.addEventListener("click", handleStrikeThrough);
      spanTag.textContent = todoInput.value;
  
      liTag.append(spanTag);
  
      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "DELETE";
      // Add click event to the deleteButton
      deleteButton.addEventListener("click", handleDelete);
  
      liTag.append(deleteButton);
  
      // Append liTag to ul
      const ulList = document.querySelector("#list");
  
      ulList.append(liTag);
  
      // Reset form
      form.reset();
  
    } catch (error) {
      console.log("An error occurred!");
      console.log(error.message);
  
      errorMessageContainer.classList.add("error-div");
      pErrorMessage.textContent = error.message;
    }
  });
  
  function handleDelete(event) {
    setTimeout(() => {
      event.target.parentElement.remove();
    }, 100);
  }