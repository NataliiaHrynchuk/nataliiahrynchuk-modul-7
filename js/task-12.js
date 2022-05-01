
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

let listItemsMarkup = createListItemMarkup(tech);

console.log(listItemsMarkup);

refs.list.innerHTML = listItemsMarkup;


 function createListItemMarkup (items) {
return items.map(item => `<li>${item.label}</li>`).join('');
 }
