"use strict";

function getData() {
    return JSON.parse(localStorage.getItem('todos'));
}

function setData(array) {
    localStorage.setItem('todos', JSON.stringify(array));
}

// при нажатии на клавишу Add добавить новую карточку с делом

const addButton = document.querySelector("#add-new-todo-item");
addButton.addEventListener('click', () => {
    const todos = document.querySelector('.todos');
    const todosItem = document.createElement('li');

    todosItem.classList.add('todos__item');
    todos.append(todosItem);

    const todosItemCheckbox = document.createElement('input');
    todosItemCheckbox.classList.add('todos__item-checkbox');
    todosItemCheckbox.setAttribute('type', 'checkbox');
    todosItem.append(todosItemCheckbox);
    
    const todosItemText = document.createElement('p');
    todosItemText.classList.add('todos__item-text');
    const addNewTodoText = document.querySelector('#add-new-todo-text');
    todosItemText.textContent = addNewTodoText.value;
    addNewTodoText.value = '';
    todosItem.append(todosItemText);

    const todosItemDelete = document.createElement('div');
    todosItemDelete.classList.add('todos__item-delete');
    todosItem.append(todosItemDelete);

    const todosItemDeleteButton = document.createElement('button');
    todosItemDeleteButton.classList.add('button-delete');
    todosItemDeleteButton.textContent = 'X';
    todosItemDelete.append(todosItemDeleteButton);

    // при нажатии на клавишу Х удалять именно ту карточку, на которой произошел клик по кнопке

    todosItemDeleteButton.addEventListener('click', () => {
        todosItem.remove();
    });

    // поле с датой генерировать автоматически. Используйте объект new Date()

    const todosItemDate = document.createElement('span');
    todosItemDate.classList.add('todos__item-date');
    todosItemDate.textContent = new Date().toISOString().slice(0, 10);
    todosItemDelete.append(todosItemDate);

    const newTodo = {
        id: 1,
        date: todosItemDate.textContent,
        text: todosItemText.textContent,
        isChecked: false,
    }   

    const allTodos = getData();
    allTodos.push(newTodo);
    setData(allTodos);
});

// при нажатии на клавишу Delete All удалить все карточки

const deleteAll = document.querySelector('#delete-all');
deleteAll.addEventListener('click', () => {
    const todos = document.querySelector('.todos');
    todos.innerHTML = '';
})

// при нажатии на клавишу Delete Last удалить все карточки

const deleteLast = document.querySelector('#delete-last');
deleteLast.addEventListener('click', () => {
    const todos = document.querySelector('.todos');
    todos.removeChild(todos.lastChild);
})

// при нажатии на checkbox менять цвет карточки и зачеркивать текст внутри него
// сделала через CSS

// Реализовать функциональность:
// Сохранение карточек с делами в localStorage :

// Создать ключ todos в localStorage
// Написать две функции getDate и setDate для получения и записи данных в localStorage
// Не забудьте сделать проверку в localStorage по ключу, если вдруг его не будет.
// После перезагрузки страницы состояния карточек checked / unchecked должны сохраняться.
// Id у карточек должны быть разными и генерироваться динамически.

// Структура хранения данных карточек дел:
// const todos = [{}, {}, {}, {}, {}, {}, {}, {}]

// Объект карточки дела должен содержать поля:
// const todo = {
// id: 1,
// date: '19:35 17 sept',
// text: 'Play video games',
// isChecked: true,



