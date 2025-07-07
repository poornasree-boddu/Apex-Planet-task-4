let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    taskList.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">❌</button></li>`;
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim()) {
    tasks.push(taskInput.value.trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    displayTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

displayTasks();
