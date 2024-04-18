const main = document.body; 

const container = document.createElement('div');
container.className = 'container';
main.append(container);

const deleteallButton = document.createElement('button');
deleteallButton.className = 'button';
deleteallButton.textContent = "Delete All"
container.append(deleteallButton);

const deletelastButton = document.createElement('button');
deletelastButton.className = 'button';
deletelastButton.textContent = "Delete Last";
container.append(deletelastButton);

const input = document.createElement('input');
input.className = 'input';
input.name = "todo";
input.placeholder = "Enter ToDo";
container.append(input);

const addButton = document.createElement('button');
addButton.className = 'button';
addButton.textContent = "Add";
container.append(addButton);

const All_text = document.createElement('div');
All_text.className = 'All_text';
All_text.textContent = 'All: 2';
container.append(All_text);

const comp_text = document.createElement('div');
comp_text.className = 'comp_text';
comp_text.textContent = 'Completed: 1';
container.append(comp_text);

const showallButton = document.createElement('button');
showallButton.className = 'button2';
showallButton.textContent = "Show All";
container.append(showallButton);

const showcompButton = document.createElement('button');
showcompButton.className = 'button2';
showcompButton.textContent = "Show Completed";
container.append(showcompButton);

const input2 = document.createElement('input');
input2.className = 'input2';
input2.name = "Search";
input2.placeholder = "Search...";
container.append(input2);

const containerToDo = document.createElement('div');
containerToDo.className = 'containerToDo';
container.append(containerToDo);

const containerToDoElement1 = document.createElement('div');
containerToDoElement1.className = 'containerToDoElement1';
containerToDo.append(containerToDoElement1);

const ToDoElementcheck = document.createElement('input');
ToDoElementcheck.type = 'checkbox';
ToDoElementcheck.className = 'ToDocheckbox';
ToDoElementcheck.id = 'CheckBox'
containerToDoElement1.prepend(ToDoElementcheck);

const inputToDo = document.createElement('input');
inputToDo.className = 'inputToDo';
inputToDo.name = "ToDo_text";
inputToDo.placeholder = "ToDo text";
containerToDoElement1.append(inputToDo);

const XbuttonandData = document.createElement('div');
XbuttonandData.className = 'XbuttonandData';
containerToDoElement1.append(XbuttonandData);

const closeButton = document.createElement('button');
closeButton.className = 'button3';
closeButton.textContent = " X ";
XbuttonandData.prepend(closeButton);

const inputData = document.createElement('input');
inputData.className = 'inputData';
inputData.placeholder = "Data";
XbuttonandData.append(inputData);

const containerToDoElement2 = document.createElement('div');
containerToDoElement2.className = 'containerToDoElement2';
containerToDo.append(containerToDoElement2);

const ToDoElementcheck2 = document.createElement('input');
ToDoElementcheck2.type = 'checkbox';
ToDoElementcheck2.className = 'ToDocheckbox';
ToDoElementcheck2.id = 'CheckBox'
containerToDoElement2.prepend(ToDoElementcheck2);

const inputToDo2 = document.createElement('input');
inputToDo2.className = 'inputToDo2';
inputToDo2.name = "ToDo_text";
inputToDo2.placeholder = "ToDo text";
containerToDoElement2.append(inputToDo2);

const XbuttonandData2 = document.createElement('div');
XbuttonandData2.className = 'XbuttonandData2';
containerToDoElement2.append(XbuttonandData2);

const closeButton2 = document.createElement('button');
closeButton2.className = 'button3repeat';
closeButton2.textContent = " X ";
XbuttonandData2.prepend(closeButton2);

const inputData2 = document.createElement('input');
inputData2.className = 'inputData2';
inputData2.placeholder = "Data";
XbuttonandData2.append(inputData2);