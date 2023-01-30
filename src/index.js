import task_Module from "./modules/task-creation-and-storage.js";
import DOM_Module from "./modules/DOM-manipulation.js";
import "./style.css";

// Main Logic
const showFormButton = document.querySelector(".show-form-button");
showFormButton.addEventListener("click", () => {
  const formObj = DOM_Module.showForm();

  formObj.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTask = task_Module.createNewTask(formObj.titleInput.value, formObj.descriptionInput.value, 1, 1);
    task_Module.addTaskToProject(newTask, "general");
    DOM_Module.displayTask(newTask);
    formObj.form.remove();
  })
})