import createElementWithClassAndContent from "./create-element-custom-function.js"

// Initial page build
const body = document.body;

// Header
const header = document.createElement("header");
const headerLink = createElementWithClassAndContent("a", "", "Todo List");
headerLink.href = "";
header.appendChild(headerLink);

// Sidebar
const sidebar = createElementWithClassAndContent("nav", "sidebar", "");
const projectsTop = createElementWithClassAndContent("div", "projects-top-container", "");
const projectsHeading = createElementWithClassAndContent("span", "projects-heading", "Projects");
const generalNav = createElementWithClassAndContent("nav", "general-navigation", "");
const navAll = createElementWithClassAndContent("div", "all-projects", "All");
const navToday = createElementWithClassAndContent("div", "today-projects", "Today");
const navTomorrow = createElementWithClassAndContent("div", "tomorrow-projects", "Tomorrow");
const navWeek = createElementWithClassAndContent("div", "this-week-projects", "Week");
const navImportant = createElementWithClassAndContent("div", "important-projects", "Important");
const navCompleted = createElementWithClassAndContent("div", "completed-projects", "Completed");
generalNav.append(
  navAll,
  navToday,
  navTomorrow,
  navWeek,
  navImportant,
  navCompleted
)
const projectNav = createElementWithClassAndContent("nav", "project-navigation", "");
const showProjectForm = createElementWithClassAndContent("button", "show-project-form", "+");
projectsTop.append(
  projectsHeading,
  showProjectForm
)
sidebar.append(
  generalNav,
  projectsTop,
  projectNav
)

// Main
const main = document.createElement("main");
const showTaskForm = createElementWithClassAndContent("button", "show-task-form", "+");
const mainTopContainer = createElementWithClassAndContent("div", "main-top-container", "")
const mainTitle = createElementWithClassAndContent("span", "main-title", "")
const taskSort = createElementWithClassAndContent("select", "task-sort", "");
taskSort.innerHTML = `
<option value = "default">Sort By</option>
<option value = "recent">Recently Added</option>
<option value = "time left">Time Left</option>
<option value = "alphabetic">A-Z</option>
`;
mainTopContainer.append(
  document.createElement("span"),
  mainTitle,
  taskSort
)
const containerOfAllTasks = createElementWithClassAndContent("div", "all-tasks-container", "");
main.append(
  mainTopContainer,
  containerOfAllTasks,
  showTaskForm
);

// Modal
const modal = document.createElement("div");
modal.setAttribute("id", "modal");
modal.classList.add("hidden");

body.append(
  header,
  sidebar,
  main,
  modal
)
// Initial build end

// Task (Creation Form)
function buildTaskForm(currentProject) {
  const formElem = createElementWithClassAndContent("form", "task-form", "");
  body.appendChild(formElem);

  const selectedProject = createElementWithClassAndContent("div", "selected-project", `Project # ${currentProject.title}`);

  const titleInput = createElementWithClassAndContent("input", "title-input", "");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Task");
  titleInput.setAttribute("required", "");

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("placeholder", "Description");
  descriptionInput.setAttribute("maxlength", 300);

  const importanceLabel = createElementWithClassAndContent("label", "importance-label", "Important");
  const importanceInput = createElementWithClassAndContent("input", "importance-input", "");
  importanceInput.setAttribute("type", "checkbox");
  importanceInput.setAttribute("id", "importance-input");
  importanceLabel.setAttribute("for", "importance-input");
  const importanceContainer = createElementWithClassAndContent("div", "importance-container", "")
  importanceContainer.append(importanceLabel, importanceInput);

  const dateInput = createElementWithClassAndContent("input", "date-input", "");
  dateInput.setAttribute("type", "datetime-local");
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth()+1) < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  dateInput.value = `${year}-${month}-${day}T${hours}:${minutes}`;

  const submitButton = createElementWithClassAndContent("button", "submit-task-form", "Add");
  const closeTaskForm = createElementWithClassAndContent("button", "close-form", "✕");

  formElem.append(
    selectedProject,
    titleInput,
    descriptionInput,
    importanceContainer,
    dateInput,
    submitButton,
    closeTaskForm
  )

  toggleModal();

  return {
    formElem,
    titleInput,
    descriptionInput,
    importanceInput,
    dateInput,
    closeTaskForm
  }
}

// Displayed Tasks
function displayTask(task) {
  const taskContainer = createElementWithClassAndContent("div", "task-container", "");
  containerOfAllTasks.appendChild(taskContainer);
  const buttonContainer = createElementWithClassAndContent("button", "task-button-container", "");
  const editTaskButton = createElementWithClassAndContent("button", "edit-task", "EDIT");
  const deleteTaskButton = createElementWithClassAndContent("button", "delete-task", "X");
  const infoTaskButton = createElementWithClassAndContent("button", "task-info", "ⓘ");
  buttonContainer.append(
    infoTaskButton,
    editTaskButton,
    deleteTaskButton
  )
  taskContainer.append(
    createElementWithClassAndContent("div", "task-title", task.title),
    createElementWithClassAndContent("div", "task-importance", task.importanceSymbol),
    createElementWithClassAndContent("div", "task-date", task.timeLeft()),
    buttonContainer
  )
  if (task.completion) toggleTaskCompletion(taskContainer);

  return {
    taskContainer,
    editTaskButton,
    deleteTaskButton,
    infoTaskButton
  }
}

function toggleTaskCompletion(taskContainer) {
  taskContainer.classList.toggle("completed");
}

function editTask(updatedTask, taskContainer) {
  taskContainer.querySelector(".task-title").textContent = updatedTask.title;
  taskContainer.querySelector(".task-importance").textContent = updatedTask.importanceSymbol;
  taskContainer.querySelector(".task-date").textContent = updatedTask.timeLeft();
}

function removeTask(taskContainer) {
  taskContainer.remove();
}

function clearTaskContainer() {
  containerOfAllTasks.replaceChildren();
}

// Task (Edit, Info, Deletion Forms)
function buildTaskEdit(task) {
  const formElem = createElementWithClassAndContent("form", "task-form", "");
  body.appendChild(formElem);

  const titleInput = createElementWithClassAndContent("input", "title-input", "");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("value", task.title);
  titleInput.setAttribute("required", "");

  const descriptionInput = document.createElement("textarea");
  descriptionInput.textContent = task.description;
  descriptionInput.setAttribute("maxlength", 300);

  const importanceLabel = createElementWithClassAndContent("label", "importance-label", "Important");
  const importanceInput = createElementWithClassAndContent("input", "importance-input", "");
  importanceInput.setAttribute("type", "checkbox");
  importanceInput.checked = task.importance;
  importanceInput.setAttribute("id", "importance-input");
  importanceLabel.setAttribute("for", "importance-input");
  const importanceContainer = createElementWithClassAndContent("div", "importance-container", "")
  importanceContainer.append(importanceLabel, importanceInput);

  const dateInput = createElementWithClassAndContent("input", "date-input", "");
  dateInput.setAttribute("type", "datetime-local");
  dateInput.value = task.dueDate;

  const submitButton = createElementWithClassAndContent("button", "submit-task-form", "Save");
  const closeEditForm = createElementWithClassAndContent("button", "close-form", "✕");

  formElem.append(
    createElementWithClassAndContent("div", "task-form-label", "Task:"),
    titleInput,
    createElementWithClassAndContent("div", "task-form-label", "Description:"),
    descriptionInput,
    importanceContainer,
    dateInput,
    submitButton,
    closeEditForm
  )

  toggleModal();

  return {
    formElem,
    titleInput,
    descriptionInput,
    importanceInput,
    dateInput,
    closeEditForm
  }
}

function buildTaskInfo(task) {
  const formElem = createElementWithClassAndContent("form", "task-form", "");
  body.appendChild(formElem);

  const titleLabel = createElementWithClassAndContent("span", "task-form-label", "Task:");
  const taskCompletion = createElementWithClassAndContent("span", "task-form-completion", "")
  titleLabel.appendChild(taskCompletion);
  if (task.completion) taskCompletion.textContent = " Done";

  const titleInput = createElementWithClassAndContent("input", "title-input", "");
  titleInput.setAttribute("disabled", true);
  titleInput.setAttribute("value", task.title);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.textContent = task.description;
  descriptionInput.setAttribute("disabled", true);

  const importanceLabel = createElementWithClassAndContent("span", "task-form-label", "Important: ");
  const importance = createElementWithClassAndContent("span", "task-form-label", task.importance ? "yes" : "no");
  task.importance ? importance.classList.add("important") : importance.classList.add("unimportant");
  const importanceContainer = createElementWithClassAndContent("div", "importance-container", "")
  importanceContainer.append(importanceLabel, importance);

  const dateInput = createElementWithClassAndContent("input", "date-input", "");
  dateInput.setAttribute("type", "datetime-local");
  dateInput.setAttribute("disabled", true);
  dateInput.value = task.dueDate;

  const closeEditForm = createElementWithClassAndContent("button", "close-form", "✕");

  formElem.append(
    titleLabel,
    titleInput,
    createElementWithClassAndContent("div", "task-form-label", "Description:"),
    descriptionInput,
    importanceContainer,
    createElementWithClassAndContent("div", "task-form-label", "Due Date"),
    dateInput,
    closeEditForm
  )

  toggleModal();

  return {
    formElem
  }
}

// Project (Creation Form)
function buildProjectForm() {
  const formElem = createElementWithClassAndContent("form", "project-form", "");
  body.appendChild(formElem);

  const titleLabel = createElementWithClassAndContent("label", "project-title-label", "Project Name");
  const titleInput = createElementWithClassAndContent("input", "project-title-input", "");
  titleInput.setAttribute("id", "project-title-input");
  titleLabel.setAttribute("for", "project-title-input");

  const submitButton = createElementWithClassAndContent("button", "project-form-submit", "Add");
  const closeProjectFormButton = createElementWithClassAndContent("button", "close-form", "✕");

  formElem.append(
    titleLabel,
    titleInput,
    submitButton,
    closeProjectFormButton
  )

  toggleModal();

  return {
    formElem,
    titleInput,
    closeProjectFormButton
  }
}

// Displayed projects
function displayProject(project) {
  const projectContainer = createElementWithClassAndContent("div", "project-container", "");
  projectNav.appendChild(projectContainer);

  const selectContainer = createElementWithClassAndContent("div", "select-container", "");
  const projectTitle = createElementWithClassAndContent("div", "project-title", project.title);
  const editProjectButton = createElementWithClassAndContent("button", "edit-project", "RENAME");
  const deleteProjectButton = createElementWithClassAndContent("button", "delete-project", "DELETE");
  const buttonContainer = createElementWithClassAndContent("div", "project-button-container", "");
  buttonContainer.append(
    editProjectButton,
    deleteProjectButton
  )
  projectContainer.append(
    selectContainer,
    projectTitle,
    buttonContainer
  )
  return {
    projectContainer,
    editProjectButton,
    deleteProjectButton
  };
}

function editProject(projectContainer, newTitle) {
  projectContainer.querySelector(".project-title").textContent = newTitle;
}

function removeProject(projectContainer) {
  projectContainer.remove();
}

// Project (Edit and Deletion Forms)
function buildProjectEdit(projectTitle) {
  const formElem = createElementWithClassAndContent("form", "project-form", "");
  body.appendChild(formElem);

  const titleLabel = createElementWithClassAndContent("label", "project-title-label", "Project Name");
  const titleInput = createElementWithClassAndContent("input", "project-title-input", "");
  titleInput.setAttribute("id", "project-title-input");
  titleInput.value = projectTitle;
  titleLabel.setAttribute("for", "project-title-input");

  const submitButton = createElementWithClassAndContent("button", "project-form-submit", "Save");
  const closeProjectFormButton = createElementWithClassAndContent("button", "close-form", "⨉");

  formElem.append(
    titleLabel,
    titleInput,
    submitButton,
    closeProjectFormButton
  )

  toggleModal();

  return {
    formElem,
    titleInput,
    closeProjectFormButton
  }
}

function buildDeletionForm(object) {
  const formElem = createElementWithClassAndContent("form", "deletion-form", "");
  body.appendChild(formElem);

  const deletionMessageStart = createElementWithClassAndContent("div", "deletion-message", "Are you sure?");
  const objectTitle = createElementWithClassAndContent("div", "deletion-title", object.title);
  const deletionMessageFinish = createElementWithClassAndContent("div", "deletion-message", "will be gone forever");
  const yesButton = createElementWithClassAndContent("button", "deletion-yes", "Yes");
  const noButton = createElementWithClassAndContent("button", "deletion-no", "No")
  const closeDeletionFormButton = createElementWithClassAndContent("button", "close-form", "✕");

  formElem.append(
    deletionMessageStart,
    objectTitle,
    deletionMessageFinish,
    yesButton,
    noButton,
    closeDeletionFormButton
  )

  toggleModal();

  return {
    formElem,
    yesButton,
    noButton,
    closeDeletionFormButton
  }
}

// Sidebar Highlighting
let previousProject;
function highlightProject(currentProject) {
  if (previousProject !== undefined) previousProject.querySelector(".select-container").classList.toggle("chosen");
  currentProject.querySelector(".select-container").classList.toggle("chosen");
  previousProject = currentProject;
}

let previousNav;
function highlightNav(currentNav) {
  if (previousNav !== undefined) previousNav.classList.toggle("highlighted");
  currentNav.classList.toggle("highlighted");
  previousNav = currentNav;
}

// General functions
function removeForm(form) {
  form.remove();
  toggleModal();
}

function toggleModal() {
  modal.classList.toggle("hidden");
}

function setMainTitle(title) {
  mainTitle.textContent = title;
}


export default {
  buildTaskForm,
  displayTask,
  toggleTaskCompletion,
  buildTaskEdit,
  buildTaskInfo,
  editTask,
  removeTask,
  clearTaskContainer,
  buildProjectForm,
  displayProject,
  buildProjectEdit,
  editProject,
  removeProject,
  highlightProject,
  highlightNav,
  removeForm,
  buildDeletionForm,
  setMainTitle,
  showTaskForm,
  showProjectForm,
  navAll,
  navToday,
  navTomorrow,
  navWeek,
  navImportant,
  navCompleted,
  taskSort,
  modal
}