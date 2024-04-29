export const eventModules = {
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
  