const decrementEl = document.querySelector(`[data-action = "decrement"]`);
const incrementEl = document.querySelector(`[data-action = "increment"]`);
const span = document.querySelector('#value');
let counterValue = 0;

decrementEl.addEventListener('click', onDec);
incrementEl.addEventListener('click', onInc);

function onDec() {
  counterValue -= 1;
  span.textContent = counterValue;
}

function onInc() {
  counterValue += 1;
  span.textContent = counterValue;
}
