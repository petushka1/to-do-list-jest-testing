/* eslint-disable */
function makeTaskElement({ description }) {
  const li = document.createElement('li');
  li.className = 'item element';
  li.innerHTML = `<label><input type="checkbox"><input class="edit" placeholder='${description}'></input></label><img src='${dots}'>`;
  return li;
}

module.exports = makeTaskElement;
