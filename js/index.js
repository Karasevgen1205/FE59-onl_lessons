"use strict";

const addButton = document.querySelector('.banner__top__module-buttonAdd');
const list = document.querySelector('.banner__bottom');
const deleteAllButton = document.querySelector('.banner__top__module-buttonDelAll');
const deleteLastButton = document.querySelector('.banner__top__module-buttonDelLast');
const newDate = document.querySelector('.banner__bottom__block__container-textDate');
const todoItems = document.querySelector('.banner__bottom__block__container');
const create = document.querySelector('.banner__top__module-input');
const deleteButton = document.querySelectorAll('.banner__bottom__block__container-button');

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

  //   deleteLastButton.addEventListener('click', (event) => {
  //   const lastItem = todoItems[todoItems.length - 1];
  //   lastItem.remove();
  // });




    addButton.addEventListener('click', () => {
    const inputText = create.value;

    if  (inputText) {
      const todoAdd = document.createElement ('div');
    
      todoAdd.classList.add('banner__bottom__block__container')
      todoAdd.innerHTML = `
          <input class="banner_bottom__block__container-input" type="checkbox">
            <p class="banner__bottom__block__container-text">${inputText}</p>
            <button class="banner__bottom__block__container-button">x</button>
            <p class="banner__bottom__block__container-textDate">Date</p>
        `;
      list.append(todoAdd);
      }

      create.value = "";
    
  });




  
  function generateDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }
