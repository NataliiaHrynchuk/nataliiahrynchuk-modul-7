const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// Тут відбувається «магія» делегування
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}
// Деякі допоміжні функції для візуалізації елементів палітри
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRangomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

 






