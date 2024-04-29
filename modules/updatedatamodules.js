function updateAllCount() {
    const newToDoActiveCards = document.querySelectorAll('.block__container__todo_Active');
    block__text_all.textContent = `All: ${newToDoActiveCards.length}`;
  }
  
  function updateCompletedCount() {
    const checkedCheckboxes = document.querySelectorAll('.block__container__todo_Active_Checkbox:checked');
    block__text_completed.textContent = `Completed: ${checkedCheckboxes.length}`;
  }
  