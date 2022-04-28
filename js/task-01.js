const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  alert(
    "Батьківський обробник кліків. Це сповіщення не з’явиться при натисканні на Нащадок, подія не потрапить сюди!"
  );
});

child.addEventListener("click", () => {
  alert(
    "Обробник дочірніх кліків. Це сповіщення не з’явиться при натисканні на Нащадок, подія не потрапить сюди!"
  );
});

descendant.addEventListener("click", (event) => {
  event.stopPropagation();

  alert("Нащадковий обробник кліків");
});
