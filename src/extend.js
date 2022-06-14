import { taskArr, setLocalStorage } from './storage.js';
import dots from './dots.svg';
import bin from './remove.svg';

const LIST = document.querySelector('.list');

LIST.innerHTML = '';

function isListempty() {
  if (LIST.hasChildNodes()) {
    return true;
  }

  return false;
}

// rearrange indexes in local storage, task array and assign new IDs
function rearrange() {
  if (LIST.hasChildNodes()) {
    const children = LIST.childNodes;

    for (let i = 0; i < taskArr.length; i += 1) {
      children[i].id = i;
      taskArr.list[i].index = i;
    }
  }
}

// add new item
// new task template added to newly created li
function makeTaskElement({ description }) {
  const li = document.createElement('li');
  li.className = 'item element';
  li.innerHTML = `<label><input type="checkbox"><input class="edit" placeholder='${description}'></input></label><img src='${dots}'>`;
  return li;
}

// render new task by appending this to ul
// assign id to a new li and make a localStorage record
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

// remove li from the list (ul) and from task array
function remove({ target }) {
  const li = target.parentElement;
  const index = parseInt(li.id, 10);

  li.remove();
  taskArr.remove(index);

  rearrange();
  setLocalStorage();
}

export function updateTaskDescription({ target }) {
  const { value } = target;
  target.placeholder = value;
  target.value = '';

  const index = parseInt(target.parentElement.parentElement.id, 10);
  taskArr.list[index].description = value;

  setLocalStorage();
}

// add text decoration for completed tasks
export function taskCompleted(target) {
  const taskCompletedLi = target.parentElement.parentElement;
  const index = parseInt(taskCompletedLi.id, 10);

  if (target.checked) {
    taskArr.list[index].completed = true;
    target.nextElementSibling.style['text-decoration'] = 'line-through';
  } else {
    taskArr.list[index].completed = false;
    target.nextElementSibling.style['text-decoration'] = 'none';
  }
  setLocalStorage();
}

// clear all completed tasks on button click
export function clearCompleted() {
  taskArr.filter();

  document.body.querySelectorAll(':checked').forEach(({ parentElement }) => {
    const parent = parentElement.parentElement;
    parent.remove();
  });

  rearrange();
  setLocalStorage();
}

export function taskSelectionChange({ target: current }) {
  const checkElement = LIST.querySelector('.active');

  if (checkElement != null) {
    checkElement.classList.remove('active');
    const [, lastChild] = checkElement.children;
    lastChild.src = dots;
  }

  current.classList.toggle('active');
  const [, lastChild] = current.children;
  lastChild.src = bin;

  if (!lastChild.isBound) {
    lastChild.addEventListener('click', remove);
    lastChild.isBound = true;
  }
}

export const populate = () => {
  if (taskArr.length === 0) return;

  let listItems = "";

  taskArr.list.forEach(({ index, description }) => {
    listItems += `
      <li id='${index}' class="item element">
        <label>
          <input type="checkbox">
          <input type='text' class="edit" placeholder='${description}'>
        </label>
        <img src='${dots}'>
      </li>
    `;
  });

  LIST.innerHTML = listItems;

  if (isListempty()) {
    taskArr.list.forEach((item, i) => {
      if (item.completed === true) {
        const li = document.getElementById(`${i}`);
        li.querySelector('input[type=checkbox]').checked = true;
      }
    });
  }
};
