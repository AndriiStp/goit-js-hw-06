const inputRange = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
spanEl.style.fontSize = inputRange.value + 'px';

inputRange.addEventListener('input', onMove);

function onMove(evt) {
  console.dir(evt.currentTarget.value);
  spanEl.style.fontSize = evt.currentTarget.valueAsNumber + 'px';
}
