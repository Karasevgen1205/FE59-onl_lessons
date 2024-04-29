function getTodos() {
    return JSON.parse(localStorage.getItem('todos'));
  }
  
  function setTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  