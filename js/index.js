"use strict";

const addButton = document.querySelector('banner__top__module-buttonAdd');
const list = document.querySelector('banner__bottom');
const deleteAllButton = document.querySelector('banner__top__module-buttonDelAll');
const deleteLastButton = document.querySelector('banner__bottom__block__container');
const Date = document.querySelector('banner__bottom__block__container-textDate');

    deleteAllButton.addEventListener('click', () => {
    const todoList = document.querySelector('.banner__bottom');
    todoList.innerHTML = '';
    localStorage.clear();
  });

    deleteLastButton.addEventListener('click', () => {
    const todoItems = document.querySelectorAll('.banner__bottom__block__container');
    const lastItem = todoItems[todoItems.length - 1];
    lastItem.remove();
  });

  function generateDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }
  console.log(generateDate);