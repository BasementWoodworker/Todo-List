if (localStorage.getItem("allProjects") === null) {
  localStorage.setItem("allProjects", "[]");
} 
//localStorage.setItem("allProjects", "[]");
const allProjects = JSON.parse(localStorage.getItem("allProjects"));

class Task {
  constructor(title, description, importance, dueDate, projectName) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.dueDate = dueDate;
    this.projectName = projectName;
  }

  get importanceSymbol() {
    if (this.importance) return "!";
    return "";
  }

  timeLeft() {
    const msLeft = new Date(this.dueDate) - new Date();
    if (msLeft < -60000) return "🕐 Past Due";
    const minutesLeft = Math.ceil(msLeft / 1000 / 60);
    if (minutesLeft < 60) return `🕐 ${minutesLeft} minutes left`;
    const hrsLeft = Math.ceil(minutesLeft / 60);
    if (hrsLeft < 24) return `🕐 ${hrsLeft} hours left`;
    return `🕐 ${Math.ceil(hrsLeft / 24)} days left`;
  }
}

class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}


function regainTaskMethods(task) {
  Object.setPrototypeOf(task, Task.prototype);
}

function createTask(title, description, importance, dueDate, projectName) {
  return new Task(title, description, importance, dueDate, projectName);
}

function editTask(task, newTitle, newDescription, newImportance, newDate) {
  task.title = newTitle;
  task.description = newDescription;
  task.importance = newImportance;
  task.dueDate = newDate;
}

function addTaskToProject(task, project) {
  project.tasks.push(task);
  console.log(allProjects);
}

function removeTask(task) {
  const taskArray = allProjects.find(project => task.projectName === project.title).tasks;
  console.log(allProjects);
  const taskIndex = taskArray.indexOf(task);
  taskArray.splice(taskIndex, 1);
}


function createNewProject(title) {
  const project = new Project(title);
  allProjects.push(project);
  return project;
}

function editProject(project, newTitle) {
  project.title = newTitle;
}

function removeProject(project) {
  const projectIndex = allProjects.indexOf(project);
  allProjects.splice(projectIndex, 1);
  console.log(allProjects);
}


function getAllProjectsAndTasks() {
  return allProjects;
}

function saveChanges() {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}


export default {
  createTask,
  editTask,
  addTaskToProject,
  removeTask,
  createNewProject,
  editProject,
  removeProject,
  getAllProjectsAndTasks,
  saveChanges,
  regainTaskMethods
}