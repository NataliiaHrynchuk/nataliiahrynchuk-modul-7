// ======Делегування подій=========
// коли є колекція і однотипні події на всю колекцію
const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(evt) {
    // console.log(evt.target);//взнаємо, на який елемент ми клікнули
    // console.log(evt.target.nodeName);//Покаже назву ел-та, по якому клікнули

    if(evt.target.nodeName !== 'BUTTON') {
        return; // Якщо клікнули не на кнопці, то уходим
    }
    console.log(evt.target.textContent);//Покаже, як підписаний елемент, на який клікнули
    
    
}



// Код додавання кнопок
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    const btn = document.createElement('button');
    btn.textContent = `кнопка ${labelCounter}`;
    btn.type = 'button';

    container.appendChild(btn);
    labelCounter += 1;
}