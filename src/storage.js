class TasksArray {
  constructor() {
    this.taskArr = JSON.parse(localStorage.getItem('storedArr')) || [];
  }

  push(task) {
    this.taskArr.push(task);
  }

  remove(index) { this.taskArr.splice(index, 1); }

  get length() { return this.taskArr.length; }

  get list() { return this.taskArr; }

  filter() {
    this.taskArr = this.taskArr.filter(({ completed }) => completed === false);
  }
}

export const taskArr = new TasksArray();

export function setLocalStorage() {
  localStorage.setItem('storedArr', JSON.stringify(taskArr.list));
}
