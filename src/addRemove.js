/* eslint-disable */
import { taskArr, setLocalStorage } from './storage.js';

const makeTaskElement = require('../__mock__/makeTaskElement.js');

function addTask(description) {
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

function remove({ target }) {
  const li = target.parentElement;
  const index = parseInt(li.id, 10);

  li.remove();
  taskArr.remove(index);

  //  rearrange();
  setLocalStorage();
}

module.exports = {
  addTask,
  remove,
};
