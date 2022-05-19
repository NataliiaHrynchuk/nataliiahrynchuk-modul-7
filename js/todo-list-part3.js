console.log('Module 7.1');
let items = [
    { id: '1', text: 'молоко', isDone: false },
    { id: '2', text: 'сметана', isDone: true },
    { id: '3', text: 'сир', isDone: false },
    { id: '4', text: 'хліб', isDone: true },
    { id: '5', text: 'масло', isDone: false },
  ];

  const itemTemplate = ({ id, isDone, text }) => `
<li data-id="${id}">
  <label>
    <input type="checkbox" ${isDone ? 'checked' : ''} />
    <span>${text}</span>
  </label>
  <button>x</button>
</li>`; //в інпута якщо isDone true, то стан checked, якщо false, то нічого

const refs = {
    ul: document.querySelector('ul'),
    form: document.querySelector('form'),
    };//Посилання на елементи, які у нас є: список (ul) і форма (form)


const handleIsDoneChange = (event) => {
  const parent = event.target.closest('li');//батьківський елемент клікнутого
  const {id} = parent.dataset;
  items = items.map(item => item.id === id ? {
    ...item,
    isDone: !item.isDone,
  } : item);// Мепаємо наші ітемс. Якщо id поточного item дорівнює id, тоді 
  // повертаємо новий об'єкт, який ми змінимо. В іншому випадку повертаємо те, 
  // що було раніше. В новому об'єкті розпилюємо дані, які були до того, 
  // тільки змінюємо значення isDone на не Done
  console.log(id);//видає батьківський id клікнутого ел-та
  renderList();
};

const handleDeleteItem = (event) => {
  const parent = event.target.closest('li');//батьківський елемент клікнутого
  const {id} = parent.dataset;
  items = items.filter(item => item.id !== id);//У списку залишаються ті, по яких не клацнули
  renderList();
};
// ---Опрацьовуємо івент сабміта-----
const handleSubmit = (event) => {
  event.preventDefault();
  // console.log(event);
  // console.log(event.target);
  // console.log(event.target.elements);
  // console.log(event.target.elements.todoText);
  // console.log(event.target.elements.todoText.value);
  const text = event.target.elements.todoText.value;
  //--створюємо новий об'єкт--
  const newItem = {
    id: Date.now().toString(), //к-сть мілісекунд від 01.01.1970 перводимо в текст
    text, 
    isDone: false,
  };
  // console.log(newItem);
  //---пушимо новостворений об'єкт в айтеми----
  items.push(newItem);
  renderList();//формуємо новий список
  refs.form.reset();//очищаємо поле для введення після кожного івенту
};

const toggleItem = (id) => {
  // console.log('check');
  //--ф-ція, яка зберігає чекнуті інпути при додаванні нового елемента списку
  // ---перебираємо всі items і шукаємо з них той, що по id співпадає з поточним id.
  //--якщо співпадає, то для нього створимо новий item, який буде складатись
  //-- з усього, що там було раніше, а значення isDone запишемо, як !item.isDone,
  //-- в іншому випадку залишаємо все, як є
  items = items.map(item => item.id === id 
  ? {
    ...item,
    isDone: !item.isDone,
  } 
  : item);
};
const deleteItem = (id) => {
  console.log('delete');
  items = items.filter(item => item.id !== id);//в новий список потрапляють лише ті item, у яких
  // id не співпадає з id елемента, на кнопку якого клікнули
}
const handleListClick = (event) => {
  if (event.target === event.currentTarget) return;// якщо клік припадає на ul, то виходимо з ф-ції
//  console.log(event.target);//щоб зрозуміти, на який item ми потрапили при кліку
 const parent = event.target.closest('li');// ми хочемо, щоб, куди ми не клікнули, 
//  отримати батьківський ел-т li, у якого можна взяти id
//  console.log(parent);
 const {id} = parent.dataset;//отримуємо id елемента списку, по якому клікнули
//  console.log(id);
//--щоб подивитись, яка Node-назва в елемента, на який ми клікнули--
//--буде великимилітерами LI, BUTTON чи INPUT:
// console.log(event.target.nodeName);
//розмежуємо кліки на кнопку і на input:
switch (event.target.nodeName) {
  case 'INPUT':
    toggleItem(id);
    break;
  case 'BUTTON':
    deleteItem(id);
    break;
  default:
    break;
}
renderList();
};

//-----Ф-ція, яка видаляє всі попередні елементи зі списку і генерує нам 
// новий список, який ми підготували через items.map ----------
const renderList = () => {
    
  const list = items.map(itemTemplate).join(''); 
  // console.log(list);
  refs.ul.innerHTML = '';
  refs.ul.insertAdjacentHTML('beforeend', list);
  
  // console.log(items);//виводить сформований список 
};

refs.form.addEventListener('submit', handleSubmit);// Підписка на сабміт
refs.ul.addEventListener('click', handleListClick);

renderList();//Генеруємо список перший раз після старту програми з масиву, який в нас є


