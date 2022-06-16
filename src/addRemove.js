// import {makeTaskElement} from './__mock__/makeTaskElement.js';
const makeTaskElement = require('../__mock__/makeTaskElement.js');

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

  LIST.appendChild(newListItem);
}

module.exports = addTask;
