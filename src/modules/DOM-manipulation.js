import createElementWithClassAndContent from "./create-element-custom-function.js"

// Initial page build
const body = document.querySelector("body");

// header
const header = document.createElement("header");
const headerLink = createElementWithClassAndContent("a", "", "Todo List");
headerLink.href = "";
header.appendChild(headerLink);

// sidebar
const sidebar = createElementWithClassAndContent("nav", "sidebar", "");

// main
const main = document.createElement("main");
const showFormButton = createElementWithClassAndContent("button", "show-form-button", "+");
main.appendChild(showFormButton);

body.append(
  header,
  sidebar,
  main
)
// Initial page build end

function showForm() {
  const form = createElementWithClassAndContent("form", "add-form", "");
  main.appendChild(form);

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
  dateInput.value = `${year}-${month}-${day}T${hours+1}:${minutes}`;

  const submitButton = createElementWithClassAndContent("button", "form-submit-button", "Add");

  const closeButton = createElementWithClassAndContent("button", "form-close-button", "⨉");

  form.append(
    titleInput,
    descriptionInput,
    importanceContainer,
    dateInput,
    submitButton,
    closeButton
  )

  return {
    form,
    titleInput,
    descriptionInput,
    importanceInput,
    dateInput
  }
}

function displayTask(task) {
  
  const taskContainer = createElementWithClassAndContent("div", "task-container", "");
  taskContainer.append(
    createElementWithClassAndContent("div", "task-title", task.title),
    createElementWithClassAndContent("div", "task-description", task.description),
    createElementWithClassAndContent("div", "task-importance", task.importanceSymbol),
    createElementWithClassAndContent("div", "task-date", task.timeLeft())
  )
  main.appendChild(taskContainer);
}

export default {
  showForm,
  displayTask
}