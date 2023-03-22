const listItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItemsEl.length}`);

const listItem = document.querySelector('.item');

listItemsEl.forEach(item => {
  console.log('');
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
