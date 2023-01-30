const generalTasks = [];

function createNewTask(title, description, importance, dueDate) {
  return {
    title,
    description,
    importance,
    dueDate
  }
}

function addTaskToProject(task, project) {
  if (project === "general") generalTasks.push(task);
}

export default {
  createNewTask,
  addTaskToProject,
}