/* eslint-disable */
import { taskArr, setLocalStorage } from '../src/storage.js';

function updateTaskDescription({ target }) {
  const { value } = target;
  target.placeholder = value;
  target.value = '';

  const index = parseInt(target.parentElement.parentElement.id, 10);
  taskArr.list[index].description = value;

  setLocalStorage();
}

function taskCompleted(target) {
  const taskCompletedLi = target.parentElement.parentElement;
  const index = parseInt(taskCompletedLi.id, 10);

  if (target.checked) {
    taskArr.list[index].completed = true;
    target.nextElementSibling.style['text-decoration'] = 'line-through';
  } else {
    taskArr.list[index].completed = false;
    target.nextElementSibling.style['text-decoration'] = 'none';
  }
  return taskArr.list[index].completed
  setLocalStorage();
}

function clearCompleted() {
  taskArr.filter();

  document.body.querySelectorAll(':checked').forEach(({ parentElement }) => {
    const parent = parentElement.parentElement;
    parent.remove();
  });
//  rearrange();
// return taskArr
  setLocalStorage();
}

module.exports = {
  updateTaskDescription,
  taskCompleted,
  clearCompleted,
}
