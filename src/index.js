import Task_Module from "./modules/task-creation-and-storage.js";
import DOM_Module from "./modules/DOM-manipulation.js";
import "./style.css";


// Main Logic
let currentForm;
let currentProject;

// Initial Filling
currentProject = addProject("general-tasks");
addTask("Walk my dog", "description placeholder", false, "2023-02-05T11:00");
// Initial Filling End

function addTask(title, description, importance, dueDate) {
  const task = Task_Module.createTask(title, description, importance, dueDate, currentProject);
  Task_Module.addTaskToProject(task, currentProject);
  const taskDOM = DOM_Module.displayTask(task);

  taskDOM.editTaskButton.addEventListener("click", () => {
    currentForm = DOM_Module.buildTaskEdit(task);
    currentForm.formElem.addEventListener("submit", (event) => {
      event.preventDefault();
      editTask(task, taskDOM.taskContainer);
      DOM_Module.removeForm(currentForm.formElem);
    })
    currentForm.closeEditForm.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
  })
  taskDOM.deleteTaskButton.addEventListener("click", (event) => {
    const taskElem = event.target.parentNode;
    Task_Module.removeTask(task);
    DOM_Module.removeTask(taskElem)
  })
}

function editTask(task, taskContainer) {
  Task_Module.editTask(
    task, 
    currentForm.titleInput.value,
    currentForm.descriptionInput.value,
    currentForm.importanceInput.checked,
    currentForm.dateInput.value
  );
  DOM_Module.editTask(task, taskContainer);
}

function addProject(projectName) {
  const project = Task_Module.createNewProject(projectName);
  const projectElem = DOM_Module.displayProject(project);
  selectProject(project, projectElem);
  projectElem.addEventListener("click", () => selectProject(project, projectElem));

  return project;
}

function selectProject(project, projectElem) {
  currentProject = project;
  DOM_Module.highlightProject(projectElem);
}


DOM_Module.showTaskForm.addEventListener("click", () => {
  currentForm = DOM_Module.buildTaskForm();
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask(
      currentForm.titleInput.value, 
      currentForm.descriptionInput.value, 
      currentForm.importanceInput.checked,
      currentForm.dateInput.value,
    );
    DOM_Module.removeForm(currentForm.formElem);
  });
  currentForm.closeTaskForm.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
})


DOM_Module.showProjectForm.addEventListener("click", () => {
  currentForm = DOM_Module.buildProjectForm();
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectName = event.target.children[1].value
    currentProject = addProject(projectName);
    DOM_Module.removeForm(currentForm.formElem);
  });
  currentForm.closeProjectForm.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
});


DOM_Module.modal.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));