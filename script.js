function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
   
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";
}

function removeTask(button) {
    const taskList = document.getElementById("taskList");
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}