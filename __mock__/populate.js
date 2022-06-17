const populate = () => {
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
}

module.exports = populate;
