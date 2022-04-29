const refs ={
   parent: document.querySelector("#parent"),
   child: document.querySelector("#child"),
   descendant: document.querySelector("#descendant"),
}

// refs.parent.addEventListener("click", () => {
//   alert(
//     "Батьківський обробник кліків. Це сповіщення не з’явиться при натисканні на Нащадок, подія не потрапить сюди!"
//   );
// });
refs.parent.addEventListener("click", onParentClick);

// refs.child.addEventListener("click", () => {
//   alert(
//     "Обробник дочірніх кліків. Це сповіщення не з’явиться при натисканні на Нащадок, подія не потрапить сюди!"
//   );
// });

refs.child.addEventListener("click", onChildClick);

// refs.descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Нащадковий обробник кліків");
// });

refs.descendant.addEventListener("click", oneDescendantClick);

function onParentClick(evt) {
  console.log('onParentClick');
  console.log('onParentClick -> evt.target', evt.target);
  console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
}

function onChildClick(evt) {
  console.log('onChildClick');
  console.log('onChildClick -> evt.target', evt.target);
  console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
}

function oneDescendantClick(evt) {
  console.log('oneDescendantClick');
  console.log('oneDescendantClick -> evt.target', evt.target);
  console.log('oneDescendantClick -> evt.currentTarget', evt.currentTarget);
}
