import task_Module from "./modules/task-creation-and-storage.js";
import DOM_Module from "./modules/DOM-manipulation.js";
import "./style.css";


// Main Logic
let currentForm;
const showFormButton = document.querySelector(".show-form-button");
const main = document.querySelector("main");

function isFormPresent() {
  if (main.lastElementChild.tagName === "FORM") return true;
  return false;
}

showFormButton.addEventListener("click", () => {
  if (isFormPresent()) {
    currentForm.form.remove();
    return;
  }
  currentForm = DOM_Module.showForm();

  const closeFormButton = document.querySelector(".form-close-button");
  closeFormButton.addEventListener("click", () => currentForm.form.remove());

  currentForm.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = new task_Module.Task(
      currentForm.titleInput.value, 
      currentForm.descriptionInput.value, 
      currentForm.importanceInput.checked, 
      currentForm.dateInput.value,
    );
    task_Module.addTaskToProject(task, "general");
    DOM_Module.displayTask(task);
    currentForm.form.remove();
  })
})