const generalTasks = [];

class Task {
  constructor(title, description, importance, dueDate) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.dueDate = dueDate;
  }

  get importanceSymbol() {
    if (this.importance) return "!";
    return "";
  }

  timeLeft() {
    console.log(this.dueDate);
    const msLeft = new Date(this.dueDate) - new Date();
    if (msLeft < 0) return "Past Due";
    const minutesLeft = Math.floor(msLeft / 1000 / 60);
    if (minutesLeft < 60) return `🕐 ${minutesLeft} minutes left`;
    const hrsLeft = Math.floor(minutesLeft / 60);
    if (hrsLeft < 24) return `🕐 ${hrsLeft} hours left`;
    return `🕐 ${Math.round(hrsLeft / 24)} days left`;
  }
}

function addTaskToProject(task, project) {
  if (project === "general") generalTasks.push(task);
}

export default {
  Task,
  addTaskToProject,
}