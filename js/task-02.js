const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients');

ingredients.forEach(i => {
  const fruit = document.createElement('li');
  fruit.textContent = i;
  fruit.classList.add('item');
  listIngredientsEl.append(fruit);
});
