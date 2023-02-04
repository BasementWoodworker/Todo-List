import Storage_Module from "./modules/Storage_Module";
import DOM_Module from "./modules/DOM_Module";
import "./style.css";


// Main Logic
let currentForm;
let currentProject;


function addTaskToStorage(title, description, importance, dueDate) {
  const task = Storage_Module.createTask(title, description, importance, dueDate, currentProject.title);
  Storage_Module.addTaskToProject(task, currentProject);
  return task;
}

function addTaskToDOM(task) {
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

function taskEditButton_Callback(event, task, taskContainer) {
  event.stopPropagation();
  currentForm = DOM_Module.buildTaskEdit(task);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(taskContainer);
    editTask(task, taskContainer);
    DOM_Module.removeForm(currentForm.formElem);
  })
  currentForm.closeEditForm.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
}

function taskDeleteButton_Callback(event, task, taskContainer) {
  event.stopPropagation();
  currentForm = DOM_Module.buildDeletionForm(task);
  currentForm.yesButton.addEventListener("click", () => {
    console.log(task);
    Storage_Module.removeTask(task);
    DOM_Module.removeTask(taskContainer);
  });
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    DOM_Module.removeForm(currentForm.formElem);
  });
}

function taskInfoButton_Callback(event, task) {
  event.stopPropagation();
  currentForm = DOM_Module.buildTaskInfo(task);
  currentForm.formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    DOM_Module.removeForm(currentForm.formElem);
  })
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
  DOM_Module.clearTaskContainer();
  DOM_Module.highlightProject(projectContainer);
  DOM_Module.highlightNav(projectContainer);
  DOM_Module.setMainTitle(project.title);
  project.tasks.forEach(task => addTaskToDOM(task));
}

function selectGeneralProject() {
  selectProject(Storage_Module.getAllProjectsAndTasks()[0], document.querySelector(".project-container"));
}

function editProject(project, newTitle, projectContainer) {
  Storage_Module.editProject(project, newTitle);
  DOM_Module.editProject(projectContainer, newTitle);
}



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


DOM_Module.navAll.addEventListener("click", event => topNav_Callback(event, "All"));
DOM_Module.navToday.addEventListener("click", event => topNav_Callback(event, "Today"));
DOM_Module.navWeek.addEventListener("click", event => topNav_Callback(event, "Week"));
DOM_Module.navImportant.addEventListener("click", event => topNav_Callback(event, "Important"));

function topNav_Callback(event, criteria) {
  DOM_Module.highlightNav(event.target);
  DOM_Module.clearTaskContainer();
  DOM_Module.setMainTitle(criteria);

  const filteredArray = Storage_Module.getFilteredTasks(criteria);
  filteredArray.forEach(task => addTaskToDOM(task));
}


function initialLoad() {            
  const allProjects = Storage_Module.getAllProjectsAndTasks();
  console.log(allProjects);
  allProjects.forEach(project => addProjectToDOM(project));
  selectGeneralProject();
  document.querySelector(".project-container:first-child button.delete-project").disabled = true;
  DOM_Module.navAll.click();
  window.addEventListener("beforeunload", Storage_Module.saveChanges);
  DOM_Module.modal.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
}

initialLoad();

