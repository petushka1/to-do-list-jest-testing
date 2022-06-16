import {
  clearCompleted, taskCompleted, updateTaskDescription,
  addTask, populate, taskSelectionChange,
} from './extend.js';
import './style.css';
import enter from './enter.svg';
import refresh from './refresh.svg';

// daclare variables and initial data
const refreshIcon = document.getElementById("refreshIcon");
const enterIcon = document.getElementById("enterIcon");
const input = document.querySelector('#yourTask');

refreshIcon.src = refresh;
enterIcon.src = enter;

input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 && e.target.value !== '') {
    e.preventDefault();
    const { value } = input;
    addTask(value);
    e.target.value = "";
  }
});

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('item')) taskSelectionChange(e);
});

// edit task description
document.body.addEventListener('keypress', (e) => {
  if (e.target.classList.contains('edit') && e.keyCode === 13 && e.target.value !== '') {
    updateTaskDescription(e);
  }
});

// assign event listeners
document.body.addEventListener('change', ({ target }) => {
  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    taskCompleted(target);
  }
});

document.getElementById('btn').addEventListener('click', clearCompleted);

window.addEventListener('DOMContentLoaded', populate);
