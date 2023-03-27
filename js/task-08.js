const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert('Please enter all required fields');
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };

    console.log(user);
    form.reset();
  }
}
