const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.dataset.length;

inputEl.addEventListener('blur', onBlur);
function onBlur() {
  if (inputEl.value.trim().length === Number(dataLength)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
