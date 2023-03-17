console.log("Code your solution!")

const body = document.querySelector("body");

//An h1 title (e.g. "My To-Dos").
const h1 = document.createElement("h1");

h1.textContent = "My To-Dos";
h1.setAttribute("id", "my-todos");

body.append(h1);


//A single ul tag, empty when the page is first loaded.

const ul = document.createElement("ul");
body.append(ul);

//A form for the user to add a new to-do, with a single text input and a submit button.
const form = document.createElement("form");

const label = document.createElement("label");
label.textContent = "New Task:"
const text = document.createElement("input");
text.setAttribute("id", "text");
text.setAttribute("name", "text");
text.setAttribute("type", "text");

label.append(text);

const submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "Create New Task");

form.append(label);
form.append(submit);
body.append(form);

const testParagraph = document.createElement("p");

testParagraph.setAttribute("id", "testP");


const paragraph = document.createElement("p");

h1.after(testParagraph)
body.append(paragraph)

//When the user writes something in the form's text input area and clicks submit, the ul should update with a new li item at the bottom of the list. The page should not refresh.
form.addEventListener("submit", (event) => {
    event.preventDefault();
    //I tried to use value.length and it did give me a correct length, but would not work when I created an if statement based on a length of 0.
    if (!event.target.text.value) {
        paragraph.innerHTML = `<strong>Error: New Task cannot be empty!</strong>`;
    } else {
    const li = document.createElement("li");
    li.textContent = event.target.text.value;
    ul.append(li);
    //I'm going to create an event listener and add it to each li as it's made
    li.addEventListener("click", (event) => {
        event.target.style.textDecoration = "line-through";
    })  

    // I want to know how to reset the event.target.text.value but for now lets just hard code it.
    event.target.text.value = "";
    //error message keeps popping up so I'm going to make sure it's set to nothing
    paragraph.innerHTML = testParagraph.innerHTML;
    }
})


//When the user writes nothing in the form's text input area and clicks submit, an error message (inside a p tag) should appear below the form.

    //I'm gonna add this to the loop in an if else statement. First lets make a p tag to place our error message and place it below our form within our body tag. I wanna make sure it exists before the loop is implemented so I'm gonna move my code for this up to line 38.



//When the user clicks on one of the li items, the item should be crossed out, indicating that that to-do is complete. You will need to look at [element].style.textDecoration for the cross out effect. Look at all the different text decoration options.

let lis = document.querySelectorAll("li");

for (let li of lis) {
    li.addEventListener("click", (event) => {
        if (event.target.style.textDecoration) {
            event.target.style.textDecoration = "none";
        }
    })
}
