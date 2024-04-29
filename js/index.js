"use strict";

const addButton = document.querySelector('.banner__top__module-buttonAdd');
const list = document.querySelector('.banner__bottom');
const deleteAllButton = document.querySelector('.banner__top__module-buttonDelAll');
const deleteLastButton = document.querySelector('.banner__top__module-buttonDelLast');
const newDate = document.querySelector('.banner__bottom__block__container-textDate');
const todoItems = document.querySelector('.banner__bottom__block__container');
const create = document.querySelector('.banner__top__module-input');
const deleteButton = document.querySelectorAll('.banner__bottom__block__container-button');

  const date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');


    deleteAllButton.addEventListener('click', () => {
    const todoList = list;
    todoList.innerHTML = '';
    });

  deleteButton.forEach(item => {
    item.addEventListener ('click', (event) => {
    const currientBanner = event.target.parentElement;
    list.removeChild (currientBanner);
    });
    
  });

    deleteLastButton.addEventListener('click', () => {
    const lastItem = todoItems.parentElement.lastChild;
    lastItem.remove();
  });

    addButton.addEventListener('click', () => {
    const inputText = create.value;

    if  (inputText) {
      const todoAdd = document.createElement ('div');
    
      todoAdd.classList.add('banner__bottom__block__container')
      todoAdd.innerHTML = `
          <input class="banner_bottom__block__container-input" type="checkbox">
            <p class="banner__bottom__block__container-text">${inputText}</p>
            <button class="banner__bottom__block__container-button">x</button>
            <p class="banner__bottom__block__container-textDate">${date}</p>
        `;
      list.append(todoAdd);
      }

      create.value = "";
    
  });




  
