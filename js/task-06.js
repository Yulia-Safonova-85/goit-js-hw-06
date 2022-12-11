// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то
// border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const inputName = document.querySelector('input');


inputName.addEventListener('blur',checkInputName)

function checkInputName (){
    if (inputName.value.length !== Number(inputName.dataset.length)) {
    inputName.classList.add(`invalid`);
  } else inputName.classList.replace(`invalid`, `valid`);
}
    
console.log(inputName);