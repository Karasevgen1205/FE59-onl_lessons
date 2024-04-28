const main = document.body;

const block = document.createElement('div');
block.className = 'block';
main.append(block);

const buttonDeleteAll = document.createElement('button');
buttonDeleteAll.className = 'buttonDeleteAll';
buttonDeleteAll.textContent = "Delete All";
block.append(buttonDeleteAll);

const buttonDeleteLast = document.createElement('button');
buttonDeleteLast.className = 'buttonDeleteLast';
buttonDeleteLast.textContent = "Delete Last";
block.append(buttonDeleteLast);

const inputValue = document.createElement('input');
inputValue.className = 'inputValue';
inputValue.name = "todo";
inputValue.placeholder = "Enter ToDo";
block.append(inputValue);

const buttonAdd = document.createElement('button');
buttonAdd.className = 'buttonAdd';
buttonAdd.textContent = "Add";
block.append(buttonAdd);

const blockAllText = document.createElement('div');
blockAllText.className = 'blockAllText';
blockAllText.textContent = 'All: 2';
block.append(blockAllText);

const blockCompText = document.createElement('div');
blockCompText.className = 'blockCompText';
blockCompText.textContent = 'Completed: 1';
block.append(blockCompText);

const buttonShowAll = document.createElement('button');
buttonShowAll.className = 'buttonShowAll';
buttonShowAll.textContent ="Show All";
block.append(buttonShowAll);

const buttonShowComp = document.createElement('button');
buttonShowComp.className = 'buttonShowComp';
buttonShowComp.textContent = "Show Completed";
block.append(buttonShowComp);

const inputSearch = document.createElement('input');
inputSearch.className = 'inputSearch';
inputSearch.name = "Search";
inputSearch.placeholder = "Search...";
block.append(inputSearch);

const blockContainerToDo = document.createElement('div');
blockContainerToDo.className = 'blockContainerToDo';
block.append(blockContainerToDo);


if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify([]));
  }

  function getTodos() {
    return JSON.parse(localStorage.getItem('todos'));
  }
  

  function setTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  let newToDoActiveId = 1;

buttonAdd.addEventListener('click', function() {
  const newToDoActive = document.createElement('div');
  newToDoActive.className = 'blockContainerToDoActive';
  blockContainerToDo.append(newToDoActive);
  newToDoActive.id = `active-todo-${newToDoActiveId}`; 

  const newToDoActiveCheckbox = document.createElement('input');
  newToDoActiveCheckbox.type = 'checkbox';
  newToDoActiveCheckbox.className = 'blockContainerToDoActiveCheckbox';
  if (getTodos().some(todo => todo.id === newToDoActiveId)) {
    newToDoActiveCheckbox.checked = getTodos().find(todo => todo.id === newToDoActiveId).isChecked;
  }
  
  newToDoActive.prepend(newToDoActiveCheckbox);

  const newinputToDoValue = document.createElement('div');
  newinputToDoValue.className = 'inputToDoValue';
  newinputToDoValue.name = "ToDo_text";
  newToDoActive.append(newinputToDoValue);

  const newinputToDoValueToDotext = document.createElement('span');
  newinputToDoValueToDotext.className = 'inputToDoValueToDotext';
  newinputToDoValueToDotext.textContent = inputValue.value;
  newinputToDoValue.append(newinputToDoValueToDotext);

  const newblockCloseData = document.createElement('div');
  newblockCloseData.className = 'blockCloseData';
  newToDoActive.append(newblockCloseData);

  const newblockCloseButton = document.createElement('button');
  newblockCloseButton.className = 'blockCloseButton';
  newblockCloseButton.textContent = " X ";
  newblockCloseData.prepend(newblockCloseButton);

  const newInputData = document.createElement('input');
  newInputData.className = 'inputData';
  newInputData.placeholder = "Data";
  const currentDate = new Date();
  const dateString = 
    `${currentDate.getHours()}:${currentDate.getMinutes()} ${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
  newInputData.value = dateString;
  newblockCloseData.append(newInputData);

  newblockCloseButton.addEventListener('click', function() {
    newToDoActive.remove();
  });

  
  const newTodo = {
    id: newToDoActiveId,
    date: dateString,
    text: inputValue.value,
    isChecked: newToDoActiveCheckbox.checked,
  };
  const todos = getTodos();
  todos.push(newTodo);
  setTodos(todos);

  newToDoActiveId++;
});

window.addEventListener('load', function() {
  const todos = getTodos();
  todos.forEach(todo => {
    const newToDoActive = document.createElement('div');
    newToDoActive.className = 'blockContainerToDoActive';
    blockContainerToDo.append(newToDoActive);
    newToDoActive.id = `active-todo-${todo.id}`;

    const newToDoActiveCheckbox = document.createElement('input');
    newToDoActiveCheckbox.type = 'checkbox';
    newToDoActiveCheckbox.className = 'blockContainerToDoActiveCheckbox';
    newToDoActiveCheckbox.checked = todo.isChecked;
    newToDoActive.prepend(newToDoActiveCheckbox);

    const newinputToDoValue = document.createElement('div');
    newinputToDoValue.className = 'inputToDoValue';
    newinputToDoValue.name = "ToDo_text";
    newToDoActive.append(newinputToDoValue);

    const newinputToDoValueToDotext = document.createElement('span');
    newinputToDoValueToDotext.className = 'inputToDoValueToDotext';
    newinputToDoValueToDotext.textContent = todo.text;
    newinputToDoValue.append(newinputToDoValueToDotext);

    const newblockCloseData = document.createElement('div');
    newblockCloseData.className = 'blockCloseData';
    newToDoActive.append(newblockCloseData);

    const newblockCloseButton = document.createElement('button');
    newblockCloseButton.className = 'blockCloseButton';
    newblockCloseButton.textContent = " X ";
    newblockCloseData.prepend(newblockCloseButton);

    const newInputData = document.createElement('input');
    newInputData.className = 'inputData';
    newInputData.placeholder = "Data";
    newInputData.value = todo.date;
    newblockCloseData.append(newInputData);

    newblockCloseButton.addEventListener('click', function() {
        newToDoActive.remove();
      
        const todos = getTodos();
        const todoId = parseInt(newToDoActive.id.split('-')[2]);
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        todos.splice(todoIndex, 1);
        setTodos(todos);
      });
      
    });
  });
  
;

buttonDeleteLast.addEventListener('click', function() {
    const lastToDoActive = blockContainerToDo.lastChild;
    if (lastToDoActive) {
      lastToDoActive.remove();
      const todos = getTodos();
      const lastTodoId = parseInt(lastToDoActive.id.split('-')[2]);
      const todoIndex = todos.findIndex(todo => todo.id === lastTodoId);
      todos.splice(todoIndex, 1);
      setTodos(todos);
    }
  });
  
  buttonDeleteAll.addEventListener('click', function() {
    while (blockContainerToDo.firstChild) {
      blockContainerToDo.removeChild(blockContainerToDo.firstChild);
    }
  
    localStorage.setItem('todos', JSON.stringify([]));
  });

  main.addEventListener('change', function(event) {
    const target = event.target;
    if (target.classList.contains('blockContainerToDoActiveCheckbox')) {
      const parentCard = target.parentElement;
      const inputToDoValue = parentCard.querySelector('.inputToDoValueToDotext');
      if (target.checked) {
        inputToDoValue.style.textDecoration = 'line-through';
        parentCard.style.backgroundColor = 'lightgrey';
      } else {
        inputToDoValue.style.textDecoration = 'none';
        parentCard.style.backgroundColor = 'rgb(182, 177, 177)';
      }
  
      const todos = getTodos();
      const todoIndex = todos.findIndex(todo => todo.id === parseInt(parentCard.id.split('-')[2]));
      todos[todoIndex].isChecked = target.checked;
      setTodos(todos);
    }
  });