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
const navWeek = createElementWithClassAndContent("div", "this-week-projects", "Week");
const navImportant = createElementWithClassAndContent("div", "important-projects", "Important");
generalNav.append(
  navAll,
  navToday,
  navWeek,
  navImportant
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
const mainTitle = createElementWithClassAndContent("h1", "main-title", "")
const containerOfAllTasks = createElementWithClassAndContent("div", "all-tasks-container", "");
main.append(
  mainTitle,
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

function buildTaskForm() {
  const formElem = createElementWithClassAndContent("form", "task-form", "");
  body.appendChild(formElem);

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
  const closeTaskForm = createElementWithClassAndContent("button", "close-task-form", "⨉");

  formElem.append(
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

function displayTask(task) {
  const taskContainer = createElementWithClassAndContent("div", "task-container", "");
  containerOfAllTasks.appendChild(taskContainer);
  const editTaskButton = createElementWithClassAndContent("button", "edit-task", "EDIT");
  const deleteTaskButton = createElementWithClassAndContent("button", "delete-task", "x");
  taskContainer.append(
    createElementWithClassAndContent("div", "task-title", task.title),
    createElementWithClassAndContent("div", "task-description", task.description),
    createElementWithClassAndContent("div", "task-importance", task.importanceSymbol),
    createElementWithClassAndContent("div", "task-date", task.timeLeft()),
    editTaskButton,
    deleteTaskButton
  )

  return {
    taskContainer,
    editTaskButton,
    deleteTaskButton
  }
}

function buildTaskEdit(task) {
  const formElem = createElementWithClassAndContent("form", "task-edit-form", "");
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

  const submitButton = createElementWithClassAndContent("button", "submit-edit-form", "Save");
  const closeEditForm = createElementWithClassAndContent("button", "close-edit-form", "⨉");

  formElem.append(
    titleInput,
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

function editTask(updatedTask, taskContainer) {
  taskContainer.querySelector(".task-title").textContent = updatedTask.title;
  taskContainer.querySelector(".task-description").textContent = updatedTask.description;
  taskContainer.querySelector(".task-importance").textContent = updatedTask.importanceSymbol;
  taskContainer.querySelector(".task-date").textContent = updatedTask.timeLeft();
}

function removeTask(taskContainer) {
  taskContainer.remove();
}

function clearTaskContainer() {
  containerOfAllTasks.replaceChildren();
  mainTitle.textContent = "";
}


function buildProjectForm() {
  const formElem = createElementWithClassAndContent("form", "project-form", "");
  body.appendChild(formElem);

  const titleLabel = createElementWithClassAndContent("label", "project-title-label", "Project Name");
  const titleInput = createElementWithClassAndContent("input", "project-title-input", "");
  titleInput.setAttribute("id", "project-title-input");
  titleLabel.setAttribute("for", "project-title-input");

  const submitButton = createElementWithClassAndContent("button", "project-form-submit", "Add");
  const closeProjectFormButton = createElementWithClassAndContent("button", "close-project-form", "⨉");

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

function buildProjectEdit(projectTitle) {
  const formElem = createElementWithClassAndContent("form", "project-form", "");
  body.appendChild(formElem);

  const titleLabel = createElementWithClassAndContent("label", "project-title-label", "Project Name");
  const titleInput = createElementWithClassAndContent("input", "project-title-input", "");
  titleInput.setAttribute("id", "project-title-input");
  titleInput.value = projectTitle;
  titleLabel.setAttribute("for", "project-title-input");

  const submitButton = createElementWithClassAndContent("button", "project-form-submit", "Save");
  const closeProjectFormButton = createElementWithClassAndContent("button", "close-project-form", "⨉");

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

function editProject(projectContainer, newTitle) {
  projectContainer.querySelector(".project-title").textContent = newTitle;
}

function removeProject(projectContainer) {
  projectContainer.remove();
}

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
  clearTaskContainer,
  buildTaskEdit,
  editTask,
  removeTask,
  buildProjectForm,
  displayProject,
  buildProjectEdit,
  editProject,
  removeProject,
  highlightProject,
  highlightNav,
  removeForm,
  setMainTitle,
  showTaskForm,
  showProjectForm,
  navAll,
  navToday,
  navWeek,
  navImportant,
  modal
}