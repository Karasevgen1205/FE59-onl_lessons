import { cardsArray } from './data.js';





let todos = document.querySelector('.todos');



cardsArray.forEach(({imgSrc, discount, salesPrice, fullPrice, name, imgAdd}) => {
    const card = document.createElement('div');
    card.classList.add('.todo');
    card.innerHTML = `
    <img class="todo_imj" src="${imgSrc}" alt="">
    <button class="add_on_korzina"><img class="add_on_korzina_img" src="${imgAdd}" alt=""></button>
    <p class="sales">${discount}</p>
    <div class="Prices">
    <p class="sales_prise">${salesPrice}</p>
    <p class="fool_prise">${fullPrice}</p>
    </div>
    <p class="name">${name}</p>
`   

    card.querySelector('.add_on_korzina').addEventListener('click', () => addToCart(name, salesPrice)); 
    
    todos.append(card);
    
})


let list = document.querySelector('.todo_list')

function addToCart(name, salesPrice) {

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
        <p class="name">${name}</p>
        <p class="sales_prise">${salesPrice}</p>
    `;
    list.appendChild(cartItem);
  
}

const purchase = document.querySelectorAll('.add_on_korzina')
const counter = document.querySelector('.number_purchase')
const basketButton = document.querySelector('.header_button')
const basket = document.querySelector('.basket')

basketButton.addEventListener('click', () => {
  basket.classList.toggle('basket_opacity')
 
});

for (let i of purchase) {
  let clicks = 0
  i.addEventListener('click', () => {
  counter.textContent = ++clicks
  })
};

  
  // Увеличение картинки //
const result = document.querySelectorAll('.todo_imj')
result.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('fff');
  });
});


