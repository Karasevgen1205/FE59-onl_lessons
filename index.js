"use strict";

const todos = document.querySelector('.todos');
const todosItem = document.createElement('li');

todosItem.classList.add('todos__item');
todos.append(todosItem);

const todosItemCheckbox = document.createElement('input');
todosItemCheckbox.classList.add('todos__item-checkbox');
todosItemCheckbox.setAttribute('type', 'checkbox');
todosItemCheckbox.setAttribute('checked', '');
todosItem.append(todosItemCheckbox);

const todosItemText = document.createElement('p');
todosItemText.classList.add('todos__item-text');
todosItemText.textContent = 'Todo text';
todosItem.append(todosItemText);

const todosItemDelete = document.createElement('div');
todosItemDelete.classList.add('todos__item-delete');
todosItemDelete.innerHTML = `<button class="button">X</button> <span class="todos__item-date">Date</span>`;
todosItem.append(todosItemDelete);
