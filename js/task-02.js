const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList = 'item';
  return listItem;
});

listIngredientsEl.append(...ingredientsArr);
