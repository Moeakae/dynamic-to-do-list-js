// Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and persed");
});
// select DOM Elements
const addButton = document.getElementById("addbutton");
const tasklist = document.getElementById('task-list');
const taskInput = document.getAnimations('task-input');
const li = document.createElement('li');
li.textContent = tasktext;


// Define the addTask Function
function addTask() {
    const addTask = (title, dueDate, priority);
         checked = true;
    return title + dueDate + priority;
}
// Get the value of the input and remove the the whitespace
const text = input.value.trim();
if (text !== '') {
    addTask(text);
    input.value = '';
    input.focus();
}