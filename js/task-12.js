
const tech = [
  { label: 'HTML'},
  { label: 'CSS'} ,
  { label: 'JavaScript'},
  { label: 'Node.js'},
  { label: 'React'},
  { label: 'Vue'},
  { label: 'Next.js'},
  { label: 'Mobx'},
  { label: 'Redux'},
  { label: 'React Router'},
  { label: 'GraphQl'},
  { label: 'PostgreSQL'},
  { label: 'MongoDB'},
  ];

/* 1.Рендерим розмітку тексту
* 2. Слухаємо зміну фільтра
* 3. Фільтруємо дані і рендеримо нові елементи
*/


const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};
//---використаємо throttle для слухача події
// refs.input.addEventListener('input', _.throttle(onFilterChange, 300));
//---використаємо debounce для слухача події
refs.input.addEventListener('input', _.debounce(onFilterChange, 300));
const listItemsMarkup = createListItemMarkup(tech);

populateList(listItemsMarkup);

// refs.list.innerHTML = listItemsMarkup;//додай створений рядок в ul


 function createListItemMarkup (items) {
return items.map(item => `<li>${item.label}</li>`).join('');
 }
function onFilterChange(evt) {
  // console.log(evt.target.value);
  const filter = evt.target.value.toLowerCase();//значення інпута перводимо в нижній регістр
  const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));//відфльтровуємо у об'єкта властивость label, перведену в нижній регістр, на наявність шматка тексту, який лежить в інпуті. Якщо ж інпут пустий, то виведе всіх
  // console.log(filteredItems);
  const listItemsMarkup = createListItemMarkup(filteredItems);
  // console.log(listItemsMarkup);//Виведи відфільтрований рядок
  // refs.list.innerHTML = listItemsMarkup;//додай в розмітку в ul відфільтрований створений рядок
  //----додавання в розмітку рядка за допомогою ф-ції
  populateList(listItemsMarkup);
}

function populateList (markup) {
  refs.list.innerHTML = markup;
}//ф-ція, яка заміняє в розмітці список відфільрованим списком