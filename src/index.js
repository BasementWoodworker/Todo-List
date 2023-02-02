import Task_Module from "./modules/task-creation-and-storage.js";
import DOM_Module from "./modules/DOM-manipulation.js";
import "./style.css";


// Main Logic
let currentForm;
let currentProject;

/* Initial Filling
currentProject = addProject("general-tasks");
addTask("Walk my dog", "description placeholder", false, "2023-02-05T11:00");
*/
function taskEditButton_Callback(task, taskDOM) {
  currentForm = DOM_Module.buildTaskEdit(task);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    editTask(task, taskDOM.taskContainer);
    DOM_Module.removeForm(currentForm.formElem);
  })
  currentForm.closeEditForm.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
}
function taskDeleteButton_Callback(task, taskDOM) {
  Task_Module.removeTask(task);
  DOM_Module.removeTask(taskDOM.taskContainer)
}

function initialLoad() {
  const allProjects = Task_Module.getAllProjectsAndTasks();
  console.log(allProjects);
  allProjects.forEach(project => {
    addProject(project);
    project.tasks.forEach(task => {
      Task_Module.regainTaskMethods(task);
      const taskDOM = DOM_Module.displayTask(task);
      taskDOM.editTaskButton.addEventListener("click", () => taskEditButton_Callback(task, taskDOM));
      taskDOM.deleteTaskButton.addEventListener("click", () => taskDeleteButton_Callback(task, taskDOM));
    })
  })
}

function addTask(title, description, importance, dueDate) {
  const task = Task_Module.createTask(title, description, importance, dueDate, currentProject.title);
  Task_Module.addTaskToProject(task, currentProject);
  const taskDOM = DOM_Module.displayTask(task);
  taskDOM.editTaskButton.addEventListener("click", () => taskEditButton_Callback(task, taskDOM));
  taskDOM.deleteTaskButton.addEventListener("click", () => taskDeleteButton_Callback(task, taskDOM));
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

function addProject(project) {
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
    const project = Task_Module.createNewProject(projectName);
    currentProject = addProject(project); //!!!
    DOM_Module.removeForm(currentForm.formElem);
  });
  currentForm.closeProjectFormButton.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
});


initialLoad();
window.addEventListener("beforeunload", Task_Module.saveChanges);
DOM_Module.modal.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
