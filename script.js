const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskText = inputBox.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    inputBox.value = "";
    saveData();
  }
});

function addTask(taskText) {
  const li = document.createElement("li");
  const task = document.createElement("span");
  const deleteBtn = document.createElement("button");

  task.textContent = taskText;
  deleteBtn.textContent = "Delete";
  deleteBtn.classList = "deleteBtn";
  li.classList = "notComplted";

  taskList.appendChild(li);
  li.appendChild(task);
  li.appendChild(deleteBtn);
}

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
    e.target.classList.toggle("notComplted");
    saveData();
    showTask();
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    saveData();
    showTask();
  }
},false);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}
showTask();
