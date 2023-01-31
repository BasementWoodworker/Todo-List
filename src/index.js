import task_Module from "./modules/task-creation-and-storage.js";
import DOM_Module from "./modules/DOM-manipulation.js";
import "./style.css";


// Main Logic
let currentForm;
let currentProject;

// Initial Filling
currentProject = addProject("general-tasks");
// Initial Filling End

function submitTaskForm(event) {
  event.preventDefault();
  const task = task_Module.createTask(
    currentForm.titleInput.value, 
    currentForm.descriptionInput.value, 
    currentForm.importanceInput.checked, 
    currentForm.dateInput.value,
  );
  task_Module.addTaskToProject(task, currentProject);
  DOM_Module.displayTask(task);
  DOM_Module.removeForm(currentForm.formElem);
}

function addProject(projectName) {
  const project = task_Module.addNewProject(projectName);
  const projectElem = DOM_Module.displayProject(project);

  projectElem.addEventListener("click", () => {
    currentProject = project;
    DOM_Module.highlightProject(projectElem);
  });

  return project;
}


DOM_Module.showTaskForm.addEventListener("click", () => {
  currentForm = DOM_Module.buildTaskForm();
  currentForm.formElem.addEventListener("submit", submitTaskForm);
  currentForm.closeTaskForm.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
})


DOM_Module.showProjectForm.addEventListener("click", () => {
  currentForm = DOM_Module.buildProjectForm();
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectName = event.target.children[1].value
    addProject(projectName);
    DOM_Module.removeForm(currentForm.formElem);
  });
  currentForm.closeProjectForm.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
});


DOM_Module.modal.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));