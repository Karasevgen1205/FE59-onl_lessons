export function createElements() {
   
const main = document.body;
const block = document.createElement('div');
block.className = 'block';
main.append(block);

const block__button__delete__all = document.createElement('button');
block__button__delete__all.className = 'block__button__delete__all';
block__button__delete__all.textContent = "Delete All";
block.append(block__button__delete__all);

const block__button__delete__last = document.createElement('button');
block__button__delete__last.className = 'block__button__delete__last';
block__button__delete__last.textContent = "Delete Last";
block.append(block__button__delete__last);

const block__input_todo = document.createElement('input');
block__input_todo.className = 'block__input_todo';
block__input_todo.name = "todo";
block__input_todo.placeholder = "Enter ToDo";
block.append(block__input_todo);

const block__button__add_todo = document.createElement('button');
block__button__add_todo.className = 'block__button__add_todo';
block__button__add_todo.textContent = "Add";
block.append(block__button__add_todo);

const block__text_all = document.createElement('div');
block__text_all.className = 'block__text_all';
block__text_all.textContent = 'All: ';
block.append(block__text_all);

const block__text_completed = document.createElement('div');
block__text_completed.className = 'block__text_completed';
block__text_completed.textContent = 'Completed: ';
block.append(block__text_completed);

const block__button__show_all = document.createElement('button');
block__button__show_all.className = 'block__button__show_all';
block__button__show_all.textContent ="Show All";
block.append(block__button__show_all);

const block__button__show_completed = document.createElement('button');
block__button__show_completed.className = 'block__button__show_completed';
block__button__show_completed.textContent = "Show Completed";
block.append(block__button__show_completed);

const block__input__search = document.createElement('input');
block__input__search.className = 'block__input__search';
block__input__search.name = "Search";
block__input__search.placeholder = "Search...";
block.append(block__input__search);

const block__container__todo = document.createElement('div');
block__container__todo.className = 'block__container__todo';
block.append(block__container__todo);
}