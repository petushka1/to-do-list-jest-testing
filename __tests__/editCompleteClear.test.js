const { updateTaskDescription, taskCompleted, clearCompleted } =
require('../src/editCompleteClear');

import { taskArr, setLocalStorage } from '../src/storage.js';
jest.mock('../__mock__/populate.js');

describe('should update item description; tag items as completed; clear all selected items', () => {
  taskArr.taskArr = [
    {
      index: 0,
      description: 'this is the first',
      completed: false
    },
    {
      index: 1,
      description: 'this is the second',
      completed: false
    },
    {
      index: 2,
      description: 'this is the third',
      completed: false
    },
  ];

  document.body.innerHTML = `<ul class='list'></ul>`;
  const LIST = document.querySelector('.list');

  const populate = require('../__mock__/populate.js');

  populate.mockImplementation(() => {
    let listItems = "";
    taskArr.list.forEach(({ index, description }) => {
      listItems += `
        <li id='${index}' class="item element">
          <label>
            <input type="checkbox">
            <input type='text' class="edit" placeholder='${description}'>
          </label>
        </li>
      `;
  });
  LIST.innerHTML = listItems;
});
  // Act
  test('should save input value in placeholder and reset input value', () => {
    populate();
    const liFirst = document.getElementById('1');
    const input = liFirst.querySelector('input[type="text"]');
    input.addEventListener ('click', updateTaskDescription)
    input.value = 'updated';
    input.click();
    // updateTaskDescription(input);
    // Assert
    expect(input.placeholder).toEqual('updated');
  });
});
