"use strict";

  const addButton = document.querySelector('.banner__top__module-buttonAdd');
  const list = document.querySelector('.banner__bottom');
  const deleteAllButton = document.querySelector('.banner__top__module-buttonDelAll');
  const deleteLastButton = document.querySelector('.banner__top__module-buttonDelLast');
  const todoItems = document.querySelector('.banner__bottom__block__container');
  const create = document.querySelector('.banner__top__module-input');
  const deleteButton = document.querySelectorAll('.banner__bottom__block__container-button');
  const checkboxes = document.querySelectorAll('banner_bottom__block__container-input');

  let uniqueIdItem = 0;

  const getDate = () => {
    const data = localStorage.getItem('todos');
    if (!data) {
      return []
    }
    return JSON.parse(data);
  }

  const setDate = (todos) => {

    localStorage.setItem('todos', JSON.stringify(todos));
  }


  const date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');

  addButton.addEventListener('click', () => {
    const inputText = create.value;

    if  (inputText) {
      const todoAdd = document.createElement ('div');
      todoAdd.classList.add('banner__bottom__block__container' )
      
    
      todoAdd.innerHTML = `
            <input class="banner_bottom__block__container-input" type="checkbox" id="check">
            <p class="banner__bottom__block__container-text">${inputText}</p>
            <button class="banner__bottom__block__container-button" onclick="deleteToDo(event)">x</button>
            <p class="banner__bottom__block__container-textDate">${date}</p>
        `;
      list.append(todoAdd);
      create.value = "";

      const todo = {
        id: `${uniqueIdItem}`,
        text: inputText,
        date: date,
        isChecked: true,
      };
  
      const allTodos = getDate();
      allTodos.push(todo);
      setDate(allTodos);
      ++uniqueIdItem;
      }
    });

    deleteAllButton.addEventListener('click', () => {
      const todoList = list;
      todoList.innerHTML = '';
      localStorage.clear();
    });

    function deleteToDo(event) {
      const curruentLi = event.target.parentElement;
      list.removeChild(curruentLi);
    }

    deleteLastButton.addEventListener('click', () => {
      const lastItem = list.lastChild;  
      lastItem.remove();

      const deleteLastTodos = getDate();
      if (deleteLastTodos.length > 0) {
        deleteLastTodos.pop();
        setDate(deleteLastTodos);
       }
    })

  //   function clickCheck(checkbox) {

  //     const element = checkboxes.parentElement;
  //     const textDatePass = element.querySelector('banner__bottom__block__container-text');

  //       checkboxes.addEventListener('click', () => {
  //         if (checkbox.checked) {
  //           element.style.backgroundColor = 'gray'; 
  //           textDatePass.style.textDecoration = 'line-through'; 
  //         } else {
  //           element.style.backgroundColor = '';
  //           textDatePass.style.textDecoration = 'none';
  //         }
  //       })
  //   };

  // checkboxes.forEach(clickCheck);
  // console.log (clickCheck);
  
