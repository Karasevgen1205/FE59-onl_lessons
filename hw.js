const main = document.body;

const block = document.createElement('div');
block.className = 'block';
main.append(block);

const buttonDeleteAll = document.createElement('button');
buttonDeleteAll.className = 'buttonDeleteAll';
buttonDeleteAll.textContent = "Delete All";
block.append(buttonDeleteAll);

const buttonDeleteLast = document.createElement('button');
buttonDeleteLast.className = 'buttonDeleteLast';
buttonDeleteLast.textContent = "Delete Last";
block.append(buttonDeleteLast);

const inputValue = document.createElement('input');
inputValue.className = 'inputValue';
inputValue.name = "todo";
inputValue.placeholder = "Enter ToDo";
block.append(inputValue);

const buttonAdd = document.createElement('button');
buttonAdd.className = 'buttonAdd';
buttonAdd.textContent = "Add";
block.append(buttonAdd);

const blockAllText = document.createElement('div');
blockAllText.className = 'blockAllText';
blockAllText.textContent = 'All: 2';
block.append(blockAllText);

const blockCompText = document.createElement('div');
blockCompText.className = 'blockCompText';
blockCompText.textContent = 'Completed: 1';
block.append(blockCompText);

const buttonShowAll = document.createElement('button');
buttonShowAll.className = 'buttonShowAll';
buttonShowAll.textContent ="Show All";
block.append(buttonShowAll);

const buttonShowComp = document.createElement('button');
buttonShowComp.className = 'buttonShowComp';
buttonShowComp.textContent = "Show Completed";
block.append(buttonShowComp);

const inputSearch = document.createElement('input');
inputSearch.className = 'inputSearch';
inputSearch.name = "Search";
inputSearch.placeholder = "Search...";
block.append(inputSearch);

const blockContainerToDo = document.createElement('div');
blockContainerToDo.className = 'blockContainerToDo';
block.append(blockContainerToDo);

const blockContainerToDoActive = document.createElement('div');
blockContainerToDoActive.className = 'blockContainerToDoActive';
blockContainerToDo.append(blockContainerToDoActive);

const blockContainerToDoActiveCheckbox = document.createElement('input');
blockContainerToDoActiveCheckbox.type = 'checkbox';
blockContainerToDoActiveCheckbox.className = 'blockContainerToDoActiveCheckbox';
blockContainerToDoActive.prepend(blockContainerToDoActiveCheckbox);

const inputToDoValue = document.createElement('input');
inputToDoValue.className = 'inputToDoValue';
inputToDoValue.name = "ToDo_text";
inputToDoValue.placeholder = "ToDo text";
blockContainerToDoActive.append(inputToDoValue);

const blockCloseData = document.createElement('div');
blockCloseData.className = 'blockCloseData';
blockContainerToDoActive.append(blockCloseData);

const blockCloseButton = document.createElement('button');
blockCloseButton.className = 'blockCloseButton';
blockCloseButton.textContent = " X ";
blockCloseData.prepend(blockCloseButton);

const inputData = document.createElement('input');
inputData.className = 'inputData';
inputData.placeholder = "Data";
const currentDate = new Date();
const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
inputData.value = dateString; 
blockCloseData.append(inputData);


main.addEventListener('change', function(event) {
    const target = event.target;
    if (target.classList.contains('blockContainerToDoActiveCheckbox')) {
        const parentCard = target.parentElement;
        const inputToDoValue = parentCard.querySelector('.inputToDoValue');
        if (target.checked) {
            inputToDoValue.style.textDecoration = 'line-through';
            parentCard.style.backgroundColor = 'lightgrey';
        } else {
            inputToDoValue.style.textDecoration = 'none';
            parentCard.style.backgroundColor = 'rgb(182, 177, 177)';
        }
        }
});


buttonAdd.addEventListener('click', function() {
const newToDoActive = document.createElement('div');
newToDoActive.className = 'blockContainerToDoActive';
blockContainerToDo.append(newToDoActive);

const newToDoActiveCheckbox = document.createElement('input');
newToDoActiveCheckbox.type = 'checkbox';
newToDoActiveCheckbox.className = 'blockContainerToDoActiveCheckbox';
newToDoActive.prepend(newToDoActiveCheckbox);

const newInputToDoValue = document.createElement('input');
newInputToDoValue.className = 'inputToDoValue';
newInputToDoValue.name = "ToDo_text";
newInputToDoValue.placeholder = "ToDo text";
newToDoActive.append(newInputToDoValue);

const newblockCloseData = document.createElement('div');
newblockCloseData.className = 'blockCloseData';
newToDoActive.append(newblockCloseData);

const newblockCloseButton = document.createElement('button');
newblockCloseButton.className = 'blockCloseButton';
newblockCloseButton.textContent = " X ";
newblockCloseData.prepend(newblockCloseButton);

const newInputData = document.createElement('input');
newInputData.className = 'inputData';
newInputData.placeholder = "Data";
const currentDate = new Date();
const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
newInputData.value = dateString; 
newblockCloseData.append(newInputData);

newblockCloseButton.addEventListener('click', function() {
    newToDoActive.remove();
    });
    });

    buttonDeleteAll.addEventListener('click', function() {
        while (blockContainerToDo.firstChild) {
            blockContainerToDo.removeChild(blockContainerToDo.firstChild);
        }
    });
    
blockCloseButton.addEventListener('click', function() {
    blockContainerToDoActive.remove();
    });




        
        