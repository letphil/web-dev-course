const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("tasks");
const allBtn = document.getElementById("all-btn");
const activeBtn = document.getElementById("active-btn");
const completedBtn = document.getElementById("completed-btn");
const clearBtn = document.getElementById("clear-btn");

let tasks = [];

addBtn.addEventListener("click", () => {
  const taskValue = taskInput.value.trim();
  if (taskValue) {
    tasks.push({ id: Date.now(), value: taskValue, completed: false });
    taskInput.value = "";
    renderTasks();
  }
});

function renderTasks() {
  taskList.innerHTML = "";
  console.log(tasks);
  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
      <input type="checkbox" id="${task.id}" ${
      task.completed ? "checked" : ""
    } />
      <span>${task.value}</span>
      <button onclick="editTask(${task.id})">Edit</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    taskList.appendChild(taskItem);
  });
}

function editTask(id) {
  const task = tasks.find((task) => task.id === id);
  const taskValue = prompt("Edit task:", task.value);
  if (taskValue) {
    task.value = taskValue;
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

taskList.addEventListener("change", (event) => {
  const id = parseInt(event.target.id);
  const task = tasks.find((task) => task.id === id);
  task.completed = event.target.checked;
  renderTasks();
});

allBtn.addEventListener("click", () => {
  renderTasks();
});

activeBtn.addEventListener("click", () => {
  const activeTasks = tasks.filter((task) => !task.completed);
  taskList.innerHTML = "";
  activeTasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
      <input type="checkbox" id="${task.id}" ${
      task.completed ? "checked" : ""
    } />
      <span>${task.value}</span>
      <button onclick="editTask(${task.id})">Edit</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    taskList.appendChild(taskItem);
  });
});

completedBtn.addEventListener("click", () => {
  const completedTasks = tasks.filter((task) => task.completed);
  taskList.innerHTML = "";
  completedTasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task completed";
    taskItem.innerHTML = `
      <input type="checkbox" id="${task.id}" ${
      task.completed ? "checked" : ""
    } />
      <span>${task.value}</span>
      <button onclick="editTask(${task.id})">Edit</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    taskList.appendChild(taskItem);
  });
});

clearBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  renderTasks();
});

renderTasks();

// Local Storage
window.addEventListener("beforeunload", () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

window.addEventListener("load", () => {
  const tasksData = localStorage.getItem("tasks");
  if (tasksData) {
    tasks = JSON.parse(tasksData);
    renderTasks();
  }
});
