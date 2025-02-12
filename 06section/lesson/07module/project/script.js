// const taskInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// add task item and add list item
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("input task please...");
  // console.log("taskText =", taskText);

  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskItem.classList.add("task");

  taskItem.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  taskList.appendChild(taskItem);
  taskInput.value = "";
}
