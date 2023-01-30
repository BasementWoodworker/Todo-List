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
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Task");
  titleInput.setAttribute("required", "");
  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("placeholder", "Description");
  descriptionInput.setAttribute("maxlength", 300);
  form.append(
    titleInput,
    descriptionInput,
    createElementWithClassAndContent("button", "", "Add")
  )

  return {
    form,
    titleInput,
    descriptionInput
  }
}

function displayTask(task) {
  console.log("A");
  const taskContainer = createElementWithClassAndContent("div", "task-container", "");
  taskContainer.append(
    createElementWithClassAndContent("span", "task-title", task.title),
    createElementWithClassAndContent("span", "task-description", task.description),
    createElementWithClassAndContent("span", "task-importance", task.importance),
    createElementWithClassAndContent("span", "task-date", task.dueDate)
  )
  main.appendChild(taskContainer);

}

export default {
  showForm,
  displayTask
}