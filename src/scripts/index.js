
const modal = document.getElementById("add_todo_modal");
const closeButton = document.querySelector("#add_todo_modal .close");
const saveButton = document.getElementById("saveChanges");
const cancelButton = document.getElementById("cancelChanges");
const modalTitleInput = document.getElementById("modalTitle");
const modalDescriptionTextarea = document.getElementById("modalDescription");
const todosContainer = document.querySelector(".new_todos_space");
const inProgressContainer = document.querySelector(".in_progress_space");
const doneContainer = document.querySelector(".done_space");
const deleteAllCard = document.querySelector(".delete_all_button");



function openModal() {
    modal.style.display = "flex";
  }


function closeModal() {
modal.style.display = "none";
}

// Счётчики карточек
function updateCounters() {
    const newTodosCounter = document.querySelector(".new_todos_counter");
    const inProgressCounter = document.querySelector(".in_progress_counter");
    const doneCounter = document.querySelector(".done_counter");
  
    newTodosCounter.textContent = `TODO: ${todosContainer.childElementCount}`;
    inProgressCounter.textContent = `IN PROGRESS: ${inProgressContainer.childElementCount}`;
    doneCounter.textContent = `DONE: ${doneContainer.childElementCount}`;
}


// Функция для добавления новой карточки
function addTodo() {
    openModal();
const title = modalTitleInput.value;
const description = modalDescriptionTextarea.value;
const carddate = NewCardClock();

if (title && description) {
const newTodoCard = document.createElement("div");
newTodoCard.classList.add("column_new_todos_card");

const titleElement = document.createElement("div");
titleElement.classList.add("title");
titleElement.textContent = title;

const descriptionElement = document.createElement("div");
descriptionElement.classList.add("description");
descriptionElement.textContent = description;

const timeElement = document.createElement("div");
timeElement.classList.add("time");
timeElement.textContent = carddate;

// const selectElement = document.createElement("div");
// selectElement.classList.add("select");
// selectElement.textContent = user;


const editButton = createEditButton(newTodoCard);
const deleteButton = createDeleteButton(newTodoCard);
const inprogressButton = createMoveInProgressButton(newTodoCard);

newTodoCard.appendChild(titleElement);
newTodoCard.appendChild(timeElement);
newTodoCard.appendChild(descriptionElement);
// newTodoCard.appendChild(selectElement);
newTodoCard.appendChild(editButton);
newTodoCard.appendChild(deleteButton);
newTodoCard.appendChild(inprogressButton);

NewCardClock(timeElement);
todosContainer.appendChild(newTodoCard);

modalTitleInput.value = "";
modalDescriptionTextarea.value = "";


updateCounters();
} else {
alert("Пожалуйста, введите данные в оба поля.");
}
closeModal();
saveToLocalStorage();
}

function NewCardClock() {
    const carddate = new Date();
    const hours = carddate.getHours().toString().padStart(2, '0');
    const minutes = carddate.getMinutes().toString().padStart(2, '0');
    const seconds = carddate.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
    }

 
function saveToLocalStorage() {
    const todos = [];
    const cards = todosContainer.querySelectorAll(".column_new_todos_card");
    cards.forEach(card => {
        const title = card.querySelector(".title").textContent;
        const description = card.querySelector(".description").textContent;
        const time = card.querySelector(".time").textContent;
        todos.push({ title, description, time });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadFromLocalStorage() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos);
        parsedTodos.forEach(todo => {
            const newTodoCard = document.createElement("div");
            newTodoCard.classList.add("column_new_todos_card");

            const titleElement = document.createElement("div");
            titleElement.classList.add("title");
            titleElement.textContent = todo.title;

            const timeElement = document.createElement("div");
            timeElement.classList.add("time");
            timeElement.textContent = todo.time;

            const descriptionElement = document.createElement("div");
            descriptionElement.classList.add("description");
            descriptionElement.textContent = todo.description;

            const editButton = createEditButton(newTodoCard);
            const deleteButton = createDeleteButton(newTodoCard);
            const inprogressButton = createMoveInProgressButton(newTodoCard);

            newTodoCard.appendChild(titleElement);
            newTodoCard.appendChild(timeElement);
            newTodoCard.appendChild(descriptionElement);
            newTodoCard.appendChild(editButton);
            newTodoCard.appendChild(deleteButton);
            newTodoCard.appendChild(inprogressButton);

            todosContainer.appendChild(newTodoCard);
        });

        updateCounters();
    }
}


function handleSaveChanges() {
    saveButton.addEventListener("click", saveToLocalStorage);
}

function initApp() {
    loadFromLocalStorage();
    handleSaveChanges();
}

initApp();

    
//кнопка удаления карточки
function createDeleteButton(card) {
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.classList.add("delete");

deleteButton.addEventListener("click", function() {
deleteCard(card);
saveToLocalStorage();
});

function deleteCard(card) {
card.remove();
updateCounters();
}

return deleteButton;

}


// Функция создания кнопки перемещения карточки в соседнюю колонну
function createMoveInProgressButton(card) {
    const moveButton = document.createElement("button");
    moveButton.textContent = " > ";
    moveButton.classList.add("move_to_in_progress");
  
    moveButton.addEventListener("click", function () {
      moveToInProgress(card); 
    });
  
    return moveButton;
  }

function moveToInProgress(card) {
const title = card.querySelector(".title").textContent;
const description = card.querySelector(".description").textContent;
const time = card.querySelector(".time").textContent;

const newInProgressCard = document.createElement("div");
newInProgressCard.classList.add("column_in_progress_card");

const inProgressTitleElement = document.createElement("div");
inProgressTitleElement.classList.add("title");
inProgressTitleElement.textContent = title;

const inProgressDescriptionElement = document.createElement("div");
inProgressDescriptionElement.classList.add("description");
inProgressDescriptionElement.textContent = description;

const inProgressTimeElement = document.createElement("div");
inProgressTimeElement.classList.add("time");
inProgressTimeElement.textContent = time;

const backButton = createBackButton(newInProgressCard);
const doneButton = createDoneButton(newInProgressCard);

newInProgressCard.appendChild(inProgressTitleElement);
newInProgressCard.appendChild(inProgressTimeElement);
newInProgressCard.appendChild(inProgressDescriptionElement);
newInProgressCard.appendChild(backButton);
newInProgressCard.appendChild(doneButton);

inProgressContainer.appendChild(newInProgressCard);
card.remove();
saveToLocalStorage();

updateCounters();
}

// Функция создания кнопки "Назад" для карточки
function createBackButton(card) {
    const backButton = document.createElement("button");
    backButton.textContent = "BACK";
    backButton.classList.add("back");
  
    backButton.addEventListener("click", function () {
      moveToNew(card);
    });
  
    return backButton;
}

function moveToNew(card) {
    const title = card.querySelector(".title").textContent;
    const description = card.querySelector(".description").textContent;
    const time = card.querySelector(".time").textContent;
  
    const newTodoCard = document.createElement("div");
    newTodoCard.classList.add("column_new_todos_card");
  
    const titleElement = document.createElement("div");
    titleElement.classList = "title";
    titleElement.textContent = title;

    const timeElement = document.createElement("div");
    timeElement.classList.add("time");
    timeElement.textContent = time;
  
    const descriptionElement = document.createElement("div");
    descriptionElement.classList = "description";
    descriptionElement.textContent = description;
  
    const editButton = createEditButton(newTodoCard);
    const deleteButton = createDeleteButton(newTodoCard);
    const inprogressButton = createMoveInProgressButton(newTodoCard);
  
    newTodoCard.appendChild(titleElement);
    newTodoCard.appendChild(timeElement);
    newTodoCard.appendChild(descriptionElement);
    newTodoCard.appendChild(editButton);
    newTodoCard.appendChild(deleteButton);
    newTodoCard.appendChild(inprogressButton);
  
    todosContainer.appendChild(newTodoCard);
    inProgressContainer.removeChild(card);

    updateCounters();
  }
  
// Функция создания кнопки завершено для карточки
function createDoneButton(card) {
  const doneButton = document.createElement("button");
  doneButton.textContent = "DONE";
  doneButton.classList.add("done");
  
  doneButton.addEventListener("click", function () {
  moveToDone(card);
  });
  
  return doneButton;
  }

  function moveToDone(card) {
    const title = card.querySelector(".title").textContent;
    const description = card.querySelector(".description").textContent;
    const time = card.querySelector(".time").textContent;
  
    const newDoneCard = document.createElement("div");
    newDoneCard.classList.add("done_card");
  
    const doneTitleElement = document.createElement("div");
    doneTitleElement.classList.add("title");
    doneTitleElement.textContent = title;

    const donetimeElement = document.createElement("div");
    donetimeElement.classList.add("time");
    donetimeElement.textContent = time;
  
    const doneDescriptionElement = document.createElement("div");
    doneDescriptionElement.classList.add("description");
    doneDescriptionElement.textContent = description;
  
    newDoneCard.appendChild(doneTitleElement);
    newDoneCard.appendChild(donetimeElement);
    newDoneCard.appendChild(doneDescriptionElement);
  
    doneContainer.appendChild(newDoneCard);
    inProgressContainer.removeChild(card);

    updateCounters();
  }

  function checkInProgressCount() {
    const inProgressContainer = document.querySelector(".in_progress_space");
    if (inProgressContainer.childElementCount > 6) {
        alert("Слишком много дел в процессе!");
    }
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target === inProgressContainer) {
            checkInProgressCount();
        }
    });
});

observer.observe(inProgressContainer, { childList: true });

  deleteAllCard.addEventListener('click', function () {
    if (confirm("Вы уверены?")) {
      clearCards(doneContainer);
    }
  });
  
  function clearCards(doneContainer) {
    while (doneContainer.childElementCount > 0) {
      doneContainer.removeChild(doneContainer.lastChild);

      updateCounters();
      saveToLocalStorage();
    }
  }

// Редактирование карточки
function openEditModal(card) {
    const title = card.querySelector(".title").textContent;
    const description = card.querySelector(".description").textContent;
  
    modalTitleInput.value = title;
    modalDescriptionTextarea.value = description;
    openModal();
  }


function updateCard(card, newTitle, newDescription) {
    const titleElement = card.querySelector(".title");
    const descriptionElement = card.querySelector(".description");
  
    titleElement.textContent = newTitle;
    descriptionElement.textContent = newDescription;
    saveToLocalStorage();
  }
  
  
  function handleEditButton(card) {
    const title = card.querySelector(".title").textContent;
    const description = card.querySelector(".description").textContent;
    
    openEditModal(card);
    
    modal.addEventListener("click", function(event) {
    if (event.target.id === "saveChanges") {
    const newTitle = modalTitleInput.value;
    const newDescription = modalDescriptionTextarea.value;
    
      updateCard(card, newTitle, newDescription);
      closeModal();
    }
    saveToLocalStorage();
    });
    }
    
  
    todosContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit")) {
    handleEditButton(event.target.parentNode);
    }
    });
    
   
    function createEditButton(card) {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    
    editButton.addEventListener("click", function() {
    handleEditButton(card);
    });
    
    return editButton;
    }

// открывает модальное окно при клике
document.querySelector(".new_todos_add_button").addEventListener("click", openModal);

// сохраняет карточку при клике
saveButton.addEventListener("click", addTodo, saveToLocalStorage);

// Кнопка отмена при клике
cancelButton.addEventListener("click", closeModal);

// Закрытие модального окна при клике
closeButton.addEventListener("click", closeModal);

