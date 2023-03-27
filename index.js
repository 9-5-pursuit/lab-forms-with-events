console.log("Code your solution!")





// 1.qs select 2.addeventlistener 3.<body>
//   <ol>
//   <li>Click me to make more!</li>
// </ol>
// </body>
// // script.js
// const lis = document.querySelectorAll("li");
// for (let li of lis) {
// li.addEventListener("click", () => {
//   const ol = document.querySelector("ol");
//   const newLi = document.createElement("li");
//   newLi.textContent = "Click me to make more!";
//   ol.append(newLi);
// });
// }

// select form w/qs
const form = document.querySelector('form')
// select box input/text with qs
const input = document.querySelector('#newTask')
// select list with qs
const ul = document.querySelector('#list')

// add event listner when the add button is clicked
form.addEventListener('submit', (e) => {
    // eventpreventDefault  not refresh page
    e.preventDefault();
    // remove space and store new task
    const newTask = input.value.trim();
    // when new task is entered new task will be enetered and will be added to the list after the previous new task
    if(newTask !== ''){
        const li = document.createElement('li');
        li.textContent = newTask;
        ul.appendChild(li);
        input.value = '';
    }
})








