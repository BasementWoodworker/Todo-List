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


function initialLoad() {
  const allProjects = Task_Module.getAllProjectsAndTasks();
  console.log(allProjects);
  allProjects.forEach(project => {
    addProject(project);
    project.tasks.forEach(task => {
      Task_Module.regainTaskMethods(task);
      const taskDOM = DOM_Module.displayTask(task);
      taskDOM.editTaskButton.addEventListener("click", () => taskEditButton_Callback(task, taskDOM.taskContainer));
      taskDOM.deleteTaskButton.addEventListener("click", () => taskDeleteButton_Callback(task, taskDOM.taskContainer));
    })
  })
}

function addTask(title, description, importance, dueDate) {
  const task = Task_Module.createTask(title, description, importance, dueDate, currentProject.title);
  Task_Module.addTaskToProject(task, currentProject);
  const taskDOM = DOM_Module.displayTask(task);

  console.log("+");
  console.log(taskDOM.taskContainer);
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

function displayExistingTask(task) {
  const taskDOM = DOM_Module.displayTask(task);
  taskDOM.editTaskButton.addEventListener("click", () => taskEditButton_Callback(task, taskDOM.taskContainer));
  taskDOM.deleteTaskButton.addEventListener("click", () => taskDeleteButton_Callback(task, taskDOM.taskContainer));
}


function addProject(project) {
  const projectDOM = DOM_Module.displayProject(project);
  selectProject(project, projectDOM.projectContainer);
  projectDOM.projectContainer.addEventListener("click", () => projectClick_Callback(project, projectDOM.projectContainer));
  projectDOM.editProjectButton.addEventListener("click", (event) => projectEditButton_Callback(event, project, projectDOM.projectContainer));
  projectDOM.deleteProjectButton.addEventListener("click", (event) => projectDeleteButton_Callback(event, project, projectDOM.projectContainer));
  return project;
}

function projectClick_Callback(project, projectContainer) {
  selectProject(project, projectContainer);
  DOM_Module.clearTaskContiner();
  project.tasks.forEach(task => displayExistingTask(task));
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
}

function selectProject(project, projectContainer) {
  currentProject = project;
  DOM_Module.highlightProject(projectContainer);
}

function editProject(project, newTitle, projectContainer) {
  Task_Module.editProject(project, newTitle);
  DOM_Module.editProject(projectContainer, newTitle);
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


DOM_Module.navAll.addEventListener("click", () => {
  DOM_Module.highlightNav(DOM_Module.navAll);
  displayAllTasks();
});
DOM_Module.navToday.addEventListener("click", () => {
  DOM_Module.highlightNav(DOM_Module.navToday);
  displayTodayTasks();
});
DOM_Module.navWeek.addEventListener("click", () => {
  DOM_Module.highlightNav(DOM_Module.navWeek);
  displayWeekTasks();
});
DOM_Module.navImportant.addEventListener("click", () => {
  DOM_Module.highlightNav(DOM_Module.navImportant);
  displayImportantTasks();
});

function displayAllTasks() {
  const allProjects = Task_Module.getAllProjectsAndTasks();
  DOM_Module.clearTaskContiner();
  allProjects.forEach(project => {
    project.tasks.forEach(task => displayExistingTask(task));
  });
}

function displayTodayTasks() {
  const allProjects = Task_Module.getAllProjectsAndTasks();
  DOM_Module.clearTaskContiner();
  allProjects.forEach(project => {
    project.tasks.forEach(task => {
      const today = new Date().getDate();
      const dueDay = new Date(task.dueDate).getDate();
      if (today === dueDay) displayExistingTask(task);
    });
  });
}

function displayWeekTasks() {
  const allProjects = Task_Module.getAllProjectsAndTasks();
  DOM_Module.clearTaskContiner();
  allProjects.forEach(project => {
    project.tasks.forEach(task => {
      const dayDifference = ((new Date(task.dueDate) - new Date()) / (1000 * 60 * 60 * 24));
      if ((dayDifference <= 7) && (dayDifference > 0)) displayExistingTask(task);
    });
  });
}

function displayImportantTasks() {
  const allProjects = Task_Module.getAllProjectsAndTasks();
  DOM_Module.clearTaskContiner();
  allProjects.forEach(project => {
    project.tasks.forEach(task => {
      if (task.importance) displayExistingTask(task)
    });
  });
}


initialLoad();
window.addEventListener("beforeunload", Task_Module.saveChanges);
DOM_Module.modal.addEventListener("click", () => DOM_Module.removeForm(currentForm.formElem));
