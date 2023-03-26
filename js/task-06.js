const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.dataset.length;
const inputLength = inputEl.value.length;

inputEl.addEventListener('blur', onBlur);
function onBlur() {
  if (inputEl.value.length < dataLength || inputEl.value.length > dataLength) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
}

// if (inputEl.value.length === Number(dataLength)) {
//   inputEl.classList.add('valid');
// } else {
//   inputEl.classList.remove('valid');
//   inputEl.classList.add('invalid');
// }
