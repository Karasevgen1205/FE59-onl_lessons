export const data = {
    getTodos: function() {
    return JSON.parse(localStorage.getItem('todos'));
  },
  
  setTodos: function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
  