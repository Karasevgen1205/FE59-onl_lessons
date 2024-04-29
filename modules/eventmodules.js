
export const eventModules = {

  block__button__add_todo: function(){
    block__button__add_todo.addEventListener('click', function() {
      const newToDoActive = document.createElement('div');
      newToDoActive.className = 'block__container__todo_Active';
      block__container__todo.append(newToDoActive);
      newToDoActive.id = `active-todo-${newToDoActiveId}`;
      
      const newToDoActiveCheckbox = document.createElement('input');
      newToDoActiveCheckbox.type = 'checkbox';
      newToDoActiveCheckbox.className = 'block__container__todo_Active_Checkbox';
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
      newinputToDoValueToDotext.textContent = block__input_todo.value;
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
      `${currentDate.getHours()}:${currentDate.getMinutes()} ${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
      newInputData.value = dateString;
      newblockCloseData.append(newInputData);
      
      newblockCloseButton.addEventListener('click', function() {
      newToDoActive.remove();
      const todos = getTodos();
      const todoId = parseInt(newToDoActive.id.split('-')[2]);
      const todoIndex = todos.findIndex(todo => todo.id === todoId);
      todos.splice(todoIndex, 1);
      setTodos(todos);
      updateAllCount();
      updateCompletedCount();
      });
      
      
      const newTodo = {
      id: newToDoActiveId,
      date: dateString,
      text: block__input_todo.value,
      isChecked: newToDoActiveCheckbox.checked,
      };
      const todos = getTodos();
      todos.push(newTodo);
      setTodos(todos);
      
      newToDoActiveId++;
      updateAllCount();
      updateCompletedCount();
      });
    },
    deleteLastTodo: function () {
      block__button__delete__last.addEventListener('click', function () {
        const lastToDoActive = block__container__todo.lastChild;
        if (lastToDoActive) {
          lastToDoActive.remove();
          const todos = getTodos();
          const lastTodoId = parseInt(lastToDoActive.id.split('-')[2]);
          const todoIndex = todos.findIndex(todo => todo.id === lastTodoId);
          todos.splice(todoIndex, 1);
          setTodos(todos);
          updateAllCount();
          updateCompletedCount();
        }
      });
    },
  
    deleteAllTodos: function () {
      block__button__delete__all.addEventListener('click', function () {
        while (block__container__todo.firstChild) {
          block__container__todo.removeChild(block__container__todo.firstChild);
        }
        localStorage.setItem('todos', JSON.stringify([]));
        updateAllCount();
        updateCompletedCount();
      });
    },
  
    changeTodoStatus: function () {
      main.addEventListener('change', function (event) {
        const target = event.target;
        if (target.classList.contains('block__container__todo_Active_Checkbox')) {
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
          updateCompletedCount();
        }
      });
    },
  
    showAllTodos: function () {
      block__button__show_all.addEventListener('click', function () {
        const allToDos = document.querySelectorAll('.block__container__todo_Active');
        allToDos.forEach(todo => {
          todo.style.display = 'flex';
        });
      });
    },
  
    showCompleteTodos: function () {
      block__button__show_completed.addEventListener('click', function () {
        const allToDos = document.querySelectorAll('.block__container__todo_Active');
        allToDos.forEach(todo => {
          const todoCheckbox = todo.querySelector('.block__container__todo_Active_Checkbox');
          if (todoCheckbox.checked) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
        });
      });
    },
  
    filterTodos: function () {
      block__input__search.addEventListener('input', function () {
        const searchValue = block__input__search.value.toLowerCase();
        const allToDos = document.querySelectorAll('.block__container__todo_Active');
        allToDos.forEach(todo => {
          const todoText = todo.querySelector('.inputToDoValueToDotext').textContent.toLowerCase();
          if (todoText.includes(searchValue)) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
        });
      });
    }
  };
  