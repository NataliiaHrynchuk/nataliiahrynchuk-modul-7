const colors = [
  { hex: '#f44336', rgb: '244,67,54'},
  { hex: '#e91e63', rgb: '233,30,99'},
  { hex: '#9c27b0', rgb: '156,39,176'},
  { hex: '#673ab7', rgb: '103,58,183'},
  { hex: '#3f51b5', rgb: '63,81,181'},
  { hex: '#2196f3', rgb: '33,150,243'},
  { hex: '#00bcd4', rgb: '0,188,212'},
  { hex: '#009688', rgb: '0,150,136'},
  { hex: '#4caf50', rgb: '76,175,80'},
  { hex: '#ffeb3b', rgb: '255,235,59'},
  { hex: '#ff9800', rgb: '255,152,0'},
  { hex: '#795548', rgb: '121,85,72'},
  { hex: '#607d8b', rgb: '96,125,139'},
];

const palettContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);
palettContainer.insertAdjacentHTML('beforeend', cardsMarkup);

palettContainer.addEventListener('click', onPalettecontainerClick);

function createColorCardsMarkup (colors) {
 return colors
 .map(({hex, rgb}) => {
    return `
    <div class="color-card">
    <div
    class="color-swatch"
    data-hex="${hex}"
    data-rgb="${rgb}"
    style="background-color: ${hex}">
  </div>
  <div class="color-meta">
    <p>HEX: ${hex}</p>
    <p>RGB: ${rgb}</p>
  </div>
  </div> `;
    
  })
   .join('');//join, щоб сформувати не масив, а строку
}

function onPalettecontainerClick(evt) {
// console.log(evt.target);//щоб відслідкувати, де клікнули
const isColorSwatchEl = evt.target.classList.contains('color-swatch');//Елемент з класом color-swatch 

if(!isColorSwatchEl) {
  return;
}
// const swatchEl = evt.target;//клікнутий елемент
// console.log(swatchEl);//якщо клікнули не по елементу з класом color-swatch, то виходимо, а якщо навпаки, виводим поточний елемент в консоль
// console.log(swatchEl.dataset.hex);//Виводить значення дата-атрибуту hex клікнутого елемента

// swatchEl.classList.add('is-active');//клікнутому елементу додаємо клас is-active, а якщо нам потрібно на батьківський елемент, то шукаємо через parentNode 
// const parentColorCard = swatchEl.parentNode;
// console.log(parentColorCard);//Виводить батьківський елемент клікнутої картки

const swatchEl = evt.target;
const parentColorCard = swatchEl.closest('.color-card');//якщо багато рівнів вкладеності, а нам потрібно знайти якогось предка через скількись рівнів вкладеності, шукаємо його за класом 
// console.log(parentColorCard);//Виводим в консоль предка з класом color-card
removeActiveCardClas();
addActiveCardClass(parentColorCard);// Викликаємо ф-цію, яка додасть клас is-active на предка клікнутої картки з класом color-card
// document.body.style.backgroundColor = swatchEl.dataset.hex;//має зафарбовувати лише body в поточний колір, але в мене чомусь зафарбовує все

setBodyBgColor(swatchEl.dataset.hex);//Викликаю ф-цію setBodyBgColor зі значення дата-атрибуту hex на клікнутому елементі
}
function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
 }// ф-ція, яка передає бекграунд колор на боді, але в мене надає на всіх

function removeActiveCardClas () {
  const currentActivCard = document.querySelector('.color-card.is-active');//Шукаємо елемент з класом color-card, в якого є ще клас is-active 
  if(currentActivCard) {
    currentActivCard.classList.remove('is-active');
  }//якщо є карточка з класом color-card, в якого є ще клас is-active, то зняти клас is-active
}

function addActiveCardClass (card) {
  card.classList.add('is-active');// на вказану картку додати клас is-active
}