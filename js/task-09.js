// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн -
// стиль по кліку на button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const btn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

const color = ["red", "pink", "orange", "green"]

btn.addEventListener('click', () => {
  let colorHtml =  getRandomHexColor (color)
 
  document.body.style.background = colorHtml;
  colorName.textContent = colorHtml
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

