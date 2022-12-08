const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const listEl = ingredients.map(ingredient => {
  const elem = document.createElement('li');
  elem.classList.add('item');
  elem.textContent = ingredient;
  console.log(elem);
  return elem;
})

list.append(...listEl);