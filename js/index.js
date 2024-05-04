"use strict";

const addButton = document.querySelector('.banner__top__module-buttonAdd');
const list = document.querySelector('.banner__bottom');
const deleteAllButton = document.querySelector('.banner__top__module-buttonDelAll');
const deleteLastButton = document.querySelector('.banner__top__module-buttonDelLast');
const newDate = document.querySelector('.banner__bottom__block__container-textDate');
const todoItems = document.querySelector('.banner__bottom__block__container');
const create = document.querySelector('.banner__top__module-input');
const deleteButton = document.querySelectorAll('.banner__bottom__block__container-button');
const checkboxes = document.querySelectorAll('banner_bottom__block__container-input');



const date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');

  addButton.addEventListener('click', () => {
    const inputText = create.value;

    if  (inputText) {
      const todoAdd = document.createElement ('div');
    
      todoAdd.classList.add('banner__bottom__block__container')
      todoAdd.innerHTML = `
            <input class="banner_bottom__block__container-input" type="checkbox" id="check">
            <p class="banner__bottom__block__container-text">${inputText}</p>
            <button class="banner__bottom__block__container-button" onclick="deleteToDo(event)">x</button>
            <p class="banner__bottom__block__container-textDate">${date}</p>
        `;
      list.append(todoAdd);
      }

      create.value = "";
    
    });

    deleteAllButton.addEventListener('click', () => {
      const todoList = list;
      todoList.innerHTML = '';
    });

    function deleteToDo(event) {
      const curruentLi = event.target.parentElement;
      list.removeChild(curruentLi);
    }

    deleteLastButton.addEventListener('click', () => {
      const lastItem = list.lastChild;  
      lastItem.remove();
    })

    function clickCheck(checkbox) {
      const element = checkboxes.parentElement;
      const textDatePass = element.querySelector('banner__bottom__block__container-text');
      
        checkbox.addEventListener('click', () => {
          if (checkbox.checked) {
            element.style.backgroundColor = 'gray'; 
            textDatePass.style.textDecoration = 'line-through'; 
          } else {
            element.style.backgroundColor = '';
            textDatePass.style.textDecoration = 'none';
          }
        });
  }

  checkboxes.forEach(clickCheck);

  
