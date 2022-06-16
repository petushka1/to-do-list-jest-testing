const makeTaskElement = require('../__mock__/makeTaskElement.js');
import { taskArr, setLocalStorage } from './storage.js';

export function addTask(description) {
  const newTask = {
    index: taskArr.length,
    description,
    completed: false,
  };

  taskArr.push(newTask);
  setLocalStorage();

  const newListItem = makeTaskElement(newTask);
  newListItem.id = newTask.index;
  return newListItem;
}

module.exports = addTask;
