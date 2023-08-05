function addTask() {
    const taskInput = document.getElementById("task");
    const task = taskInput.value.trim();

    if (task !== "") {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");
        listItem.textContent = task;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}
