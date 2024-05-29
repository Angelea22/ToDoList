import { todoForm } from "/modules/todoForm.js";

// const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTask(task) {
  const listItem = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = task;
  listItem.appendChild(taskText);

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", "checkbox");
  listItem.appendChild(checkBox);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("id", "deletebutton");
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  checkBox.addEventListener("change", function () {
    if (this.checked) {
      taskText.style.textDecoration = "line-through";
      taskText.style.color = "#ffffff8c";
    } else {
      taskText.style.textDecoration = "none";
      taskText.style.color = "#FFFFFF";
    }
  });

  deleteButton.addEventListener("click", function () {
    todoList.removeChild(listItem);
  });

  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
  const tasks = [];
  document.querySelectorAll("#todo-list li").forEach((task) => {
    const taskText = task.querySelector("span").textContent;
    const isCompleted = task.classList.contains("completed");
    tasks.push({ text: taskText, completed: isCompleted });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.addEventListener("DOMContentLoaded", function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    addTask(task.text);
  });
});
