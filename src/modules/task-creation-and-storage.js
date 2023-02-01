const allProjects = [];

class Task {
  constructor(title, description, importance, dueDate, itsProject) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.dueDate = dueDate;
    this.itsProject = itsProject;
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

function createTask(title, description, importance, dueDate, itsProject) {
  return new Task(title, description, importance, dueDate, itsProject);
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
  const taskArray = task.itsProject.tasks;
  const taskIndex = taskArray.indexOf(task);
  taskArray.splice(taskIndex, 1);
}


function createNewProject(title) {
  const project = new Project(title);
  allProjects.push(project);
  return project;
}


export default {
  createTask,
  editTask,
  addTaskToProject,
  removeTask,
  createNewProject
}