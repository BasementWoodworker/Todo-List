import Storage_Module from "./Storage_Module";
import DOM_Module from "./DOM_Module";

// Variables
let currentForm;
let currentProject;
let displayedTasks = [];

// Tasks
function addTaskToStorage(title, description, importance, dueDate) {
  const task = Storage_Module.createTask(title, description, importance, dueDate);
  Storage_Module.addTaskToProject(task, currentProject);
  return task;
}

function addTaskToDOM(task) {
  displayedTasks.push(task);
  const taskDOM = DOM_Module.displayTask(task);
  taskDOM.taskContainer.addEventListener("click", () => taskClick_Callback(task, taskDOM.taskContainer));
  taskDOM.editTaskButton.addEventListener("click", (event) => taskEditButton_Callback(event, task, taskDOM.taskContainer));
  taskDOM.deleteTaskButton.addEventListener("click", (event) => taskDeleteButton_Callback(event, task, taskDOM.taskContainer));
  taskDOM.infoTaskButton.addEventListener("click", (event) => taskInfoButton_Callback(event, task));
}

function taskClick_Callback(task, taskContainer) {
  Storage_Module.toggleTaskCompletion(task);
  DOM_Module.toggleTaskCompletion(taskContainer);
}

function taskInfoButton_Callback(event, task) {
  event.stopPropagation();
  currentForm = DOM_Module.buildTaskInfo(task);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    DOM_Module.removeForm(currentForm.formElem);
  })
}

function taskEditButton_Callback(event, task, taskContainer) {
  event.stopPropagation();
  currentForm = DOM_Module.buildTaskEdit(task);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    editTask(task, taskContainer);
    DOM_Module.removeForm(currentForm.formElem);
  })
  currentForm.closeEditForm.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
}

function taskDeleteButton_Callback(event, task, taskContainer) {
  event.stopPropagation();
  currentForm = DOM_Module.buildDeletionForm(task);
  currentForm.yesButton.addEventListener("click", () => {
    Storage_Module.removeTask(task);
    DOM_Module.removeTask(taskContainer);
    displayedTasks.splice(displayedTasks.indexOf(task), 1);
  });
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    DOM_Module.removeForm(currentForm.formElem);
  });
}

function editTask(task, taskContainer) {
  Storage_Module.editTask(
    task, 
    currentForm.titleInput.value,
    currentForm.descriptionInput.value,
    currentForm.importanceInput.checked,
    currentForm.dateInput.value
  );
  DOM_Module.editTask(task, taskContainer);
}

function replaceAllTasks(taskArray) {
  DOM_Module.clearTaskContainer();
  displayedTasks = [];
  taskArray.forEach(task => addTaskToDOM(task));
}

// Projects
function addProjectToDOM(project) {
  const projectDOM = DOM_Module.displayProject(project);
  selectProject(project, projectDOM.projectContainer);
  projectDOM.projectContainer.addEventListener("click", () => projectClick_Callback(project, projectDOM.projectContainer));
  projectDOM.editProjectButton.addEventListener("click", (event) => projectEditButton_Callback(event, project, projectDOM.projectContainer));
  projectDOM.deleteProjectButton.addEventListener("click", (event) => projectDeleteButton_Callback(event, project, projectDOM.projectContainer));
}

function projectClick_Callback(project, projectContainer) {
  selectProject(project, projectContainer);
}

function projectEditButton_Callback(event, project, projectContainer) {
  event.stopPropagation();
  currentForm = DOM_Module.buildProjectEdit(project.title);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    editProject(project, currentForm.titleInput.value, projectContainer);
    DOM_Module.removeForm(currentForm.formElem);
  })
  currentForm.closeProjectFormButton.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
}

function projectDeleteButton_Callback(event, project, projectContainer) {
  event.stopPropagation();
  currentForm = DOM_Module.buildDeletionForm(project);
  currentForm.yesButton.addEventListener("click", () => deleteProject(project, projectContainer));
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    DOM_Module.removeForm(currentForm.formElem);
  });
}

function deleteProject(project, projectContainer) {
  Storage_Module.removeProject(project);
  DOM_Module.removeProject(projectContainer);
  selectGeneralProject();
}

function selectProject(project, projectContainer) {
  currentProject = project;
  DOM_Module.highlightProject(projectContainer);
  DOM_Module.highlightNav(projectContainer);
  replaceAllTasks(project.tasks);
  DOM_Module.setMainTitle(project.title);
}

function selectGeneralProject() {
  selectProject(Storage_Module.getAllProjectsAndTasks()[0], document.querySelector(".project-container"));
}

function editProject(project, newTitle, projectContainer) {
  Storage_Module.editProject(project, newTitle);
  DOM_Module.editProject(projectContainer, newTitle);
}

// 2 main Buttons (Add task, Add project)
DOM_Module.showTaskForm.addEventListener("click", () => {
  currentForm = DOM_Module.buildTaskForm(currentProject);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = addTaskToStorage(
      currentForm.titleInput.value, 
      currentForm.descriptionInput.value, 
      currentForm.importanceInput.checked,
      currentForm.dateInput.value,
    );
    addTaskToDOM(task);
    DOM_Module.removeForm(currentForm.formElem);
  });
  currentForm.closeTaskForm.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
})

DOM_Module.showProjectForm.addEventListener("click", () => {
  currentForm = DOM_Module.buildProjectForm();
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectName = event.target.children[1].value
    const project = Storage_Module.createNewProject(projectName);
    addProjectToDOM(project);
    DOM_Module.removeForm(currentForm.formElem);
  });
  currentForm.closeProjectFormButton.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
});

// Task filtering and sorting
DOM_Module.navAll.addEventListener("click", event => topNav_Callback(event, "All"));
DOM_Module.navToday.addEventListener("click", event => topNav_Callback(event, "Today"));
DOM_Module.navTomorrow.addEventListener("click", event => topNav_Callback(event, "Tomorrow"));
DOM_Module.navWeek.addEventListener("click", event => topNav_Callback(event, "Week"));
DOM_Module.navImportant.addEventListener("click", event => topNav_Callback(event, "Important"));
DOM_Module.navCompleted.addEventListener("click", event => topNav_Callback(event, "Completed"));

function topNav_Callback(event, criteria) {
  DOM_Module.highlightNav(event.target);
  const filteredArray = Storage_Module.getFilteredTasks(criteria);
  replaceAllTasks(filteredArray);
  DOM_Module.setMainTitle(criteria);
}

DOM_Module.taskSort.addEventListener("click", (event) => sortTasks(event))

function sortTasks(event) {
  const criteria = event.target.value;
  if (criteria === "default") return;
  const sorted = Storage_Module.sortTasks(displayedTasks, criteria);
  replaceAllTasks(sorted);
}

// Initial page load
function initialLoad() {            
  const allProjects = Storage_Module.getAllProjectsAndTasks();
  allProjects.forEach(project => addProjectToDOM(project));
  selectGeneralProject();
  document.querySelector(".project-container:first-child button.delete-project").disabled = true;
  DOM_Module.navAll.click();
  window.addEventListener("beforeunload", Storage_Module.saveChanges);
  DOM_Module.modal.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
}

export default {
  initialLoad
}
