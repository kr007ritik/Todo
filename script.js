const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList  = document.getElementById("taskList");

addTaskBtn.addEventListener('click',function() {
    const taskText = taskInput.value.trim();

    if(taskText !== ""){
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText){
    const li = document.createElement("li");
    const taskTextElement = document.createElement("span");
    const deleteBtn = document.createElement("button");

    taskTextElement.textContent = taskText;
    deleteBtn.textContent = "Delete";

    li.appendChild(taskTextElement);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
        
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        // deleteBtn.textContent = "✅ Task Completed 😍";
    });
        
}



