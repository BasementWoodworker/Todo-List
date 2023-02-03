import Task_Module from "./modules/task-creation-and-storage.js";
import DOM_Module from "./modules/DOM-manipulation.js";
import "./style.css";


// Main Logic
let currentForm;
let currentProject;


function addTaskToStorage(title, description, importance, dueDate) {
  const task = Task_Module.createTask(title, description, importance, dueDate, currentProject.title);
  Task_Module.addTaskToProject(task, currentProject);
  return task;
}

function addTaskToDOM(task) {
  const taskDOM = DOM_Module.displayTask(task);
  taskDOM.editTaskButton.addEventListener("click", () => taskEditButton_Callback(task, taskDOM.taskContainer));
  taskDOM.deleteTaskButton.addEventListener("click", () => taskDeleteButton_Callback(task, taskDOM.taskContainer));
}


function taskEditButton_Callback(task, taskContainer) {
  currentForm = DOM_Module.buildTaskEdit(task);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(taskContainer);
    editTask(task, taskContainer);
    DOM_Module.removeForm(currentForm.formElem);
  })
  currentForm.closeEditForm.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
}

function taskDeleteButton_Callback(task, taskContainer) {
  Task_Module.removeTask(task);
  DOM_Module.removeTask(taskContainer);
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
  Task_Module.removeProject(project);
  DOM_Module.removeProject(projectContainer);
  selectGeneralProject();
}

function selectProject(project, projectContainer) {
  currentProject = project;
  DOM_Module.clearTaskContainer();
  DOM_Module.highlightProject(projectContainer);
  DOM_Module.highlightNav(projectContainer);
  DOM_Module.setMainTitle(project.title);
  project.tasks.forEach(task => addTaskToDOM(task));
}

function selectGeneralProject() {
  selectProject(Task_Module.getAllProjectsAndTasks()[0], document.querySelector(".project-container"));
}

function editProject(project, newTitle, projectContainer) {
  Task_Module.editProject(project, newTitle);
  DOM_Module.editProject(projectContainer, newTitle);
}



DOM_Module.showTaskForm.addEventListener("click", () => {
  currentForm = DOM_Module.buildTaskForm();
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
    const project = Task_Module.createNewProject(projectName);
    addProject(project);
    DOM_Module.removeForm(currentForm.formElem);
  });
  currentForm.closeProjectFormButton.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
});


DOM_Module.navAll.addEventListener("click", event => topNav_Callback(event, "All"));
DOM_Module.navToday.addEventListener("click", event => topNav_Callback(event, "Today"));
DOM_Module.navWeek.addEventListener("click", event => topNav_Callback(event, "Week"));
DOM_Module.navImportant.addEventListener("click", event => topNav_Callback(event, "Important"));

function topNav_Callback(event, criteria) {
  DOM_Module.highlightNav(event.target);
  DOM_Module.clearTaskContainer();
  DOM_Module.setMainTitle(criteria);

  const filteredArray = Task_Module.getFilteredTasks(criteria);
  filteredArray.forEach(task => addTaskToDOM(task));
}


//!!!!!!
function initialLoad() {            
  const allProjects = Task_Module.getAllProjectsAndTasks();
  console.log(allProjects);
  allProjects.forEach(project => addProject(project));
  selectGeneralProject();
  DOM_Module.navAll.click();
}//!!!!!

initialLoad();
window.addEventListener("beforeunload", Task_Module.saveChanges);
DOM_Module.modal.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
