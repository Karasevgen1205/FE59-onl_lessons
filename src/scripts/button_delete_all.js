deleteAllCards = document.querySelector('.delete_all_cards');
cikle = document.querySelector('.number_purchase')

deleteAllCards.addEventListener('click', () => {
    let list = document.querySelector('.todo_list')
    const todoList = list;
    list.innerHTML = '';
    cikle.innerHTML = '';
  });