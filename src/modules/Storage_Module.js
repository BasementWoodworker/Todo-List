class Task {
  constructor(title, description, importance, dueDate, projectName, completion) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.dueDate = dueDate;
    this.projectName = projectName;
    this.completion = false;
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


let allProjects = JSON.parse(localStorage.getItem("allProjects"));
if ((allProjects === null) || (allProjects.length === 0)) {
  allProjects = [];
  createNewProject("General Tasks");
} else {
  allProjects.forEach(project => {
    project.tasks.forEach(task => regainTaskMethods(task));
  });
}

function regainTaskMethods(task) {
  Object.setPrototypeOf(task, Task.prototype);
}


function createTask(title, description, importance, dueDate, projectName) {
  return new Task(title, description, importance, dueDate, projectName);
}

function toggleTaskCompletion(task) {
  task.completion = !task.completion;
}

function editTask(task, newTitle, newDescription, newImportance, newDate) {
  task.title = newTitle;
  task.description = newDescription;
  task.importance = newImportance;
  task.dueDate = newDate;
}

function addTaskToProject(task, project) {
  project.tasks.push(task);
}

function removeTask(task) {
  const taskProject = allProjects.find(project => project.tasks.includes(task));
  const taskArray = taskProject.tasks;
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
}


function getAllProjectsAndTasks() {
  return allProjects;
}

function saveChanges() {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}

function getFilteredTasks(criteria) {
  const filteredTasks = [];

  if (criteria === "All") {
    allProjects.forEach(project => {
      project.tasks.forEach(task => filteredTasks.push(task));
    })
  }
  if (criteria === "Today") {
    allProjects.forEach(project => {
      project.tasks.forEach(task => {
        const today = new Date().getDate();
        const dueDay = new Date(task.dueDate).getDate();
        if (today === dueDay) filteredTasks.push(task);
      })
    })
  }
  if (criteria === "Week") {
    allProjects.forEach(project => {
      project.tasks.forEach(task => {
        const dayDifference = ((new Date(task.dueDate) - new Date()) / (1000 * 60 * 60 * 24));
        if ((dayDifference <= 7) && (dayDifference > 0)) filteredTasks.push(task);
      })
    })
  }
  if (criteria === "Important") {
    allProjects.forEach(project => {
      project.tasks.forEach(task => {
        if (task.importance) filteredTasks.push(task);
      })
    })
  }

  return filteredTasks;
}

let previousCriteria;
let sorted;
function sortTasks(tasks, criteria) {
  if (previousCriteria === criteria) {
    sorted.reverse()
    return sorted;
  };
  previousCriteria = criteria;

  switch (criteria) {
    case "recent":
      sorted = [...tasks].reverse();
      break;
    case "time left":
      sorted = [...tasks].sort((task1, task2) => {return new Date(task1.dueDate) - new Date(task2.dueDate);});
      break;
    case "alphabetic":
      sorted = [...tasks].sort((task1, task2) => {if (task1.title < task2.title) return -1;});
      break;
  }
  return sorted;
}

export default {
  createTask,
  toggleTaskCompletion,
  editTask,
  addTaskToProject,
  removeTask,
  createNewProject,
  editProject,
  removeProject,
  getAllProjectsAndTasks,
  saveChanges,
  regainTaskMethods,
  getFilteredTasks,
  sortTasks
}