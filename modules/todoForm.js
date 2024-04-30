export const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTask = todoInput.value;

  if (newTask === "") {
    alert("Please enter a task!");
    return;
  }
  todoInput.value = "";
  addTask(newTask);
});
