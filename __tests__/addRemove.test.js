const addTask = require('../src/addRemove');
jest.mock('../__mock__/makeTaskElement.js');
import { taskArr, setLocalStorage } from '../src/storage.js';

// Test add function
describe('should create a new li element with corresponding input data', () => {
  // Arrange
  const makeTaskElement = require('../__mock__/makeTaskElement.js');
  makeTaskElement.mockImplementation((description) => {
      const li = document.createElement('li');
      li.className = 'item element';
      li.innerHTML =
      `<label>
        <input type="checkbox">
          <input class="edit" placeholder='${description}'>
          </input>
        </label>`;
      return li;
    });

  document.body.innerHTML = `<ul class='list'></ul>`;
  const LIST = document.querySelector('.list');
  const description = 'this is new task';
  LIST.appendChild(addTask(description));
  // Act
  test('new object and li from input "this is new task"', () => {
    //Assert
    expect(taskArr.length).toBe(1);
    expect(LIST.children).toHaveLength(1);
    expect(taskArr.taskArr[0]).toMatchObject({index: 0, description: 'this is new task', completed: false});
  });
});
