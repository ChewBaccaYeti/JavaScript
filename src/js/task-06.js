const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', event => {
  const length = event.target.value.length;

  if (length === 6) {
    event.target.classList.add('valid'),
      event.target.classList.remove('invalid');
  } else if (length !== 6) {
    event.target.classList.add('invalid'),
      event.target.classList.remove('valid');
  } else {
    event.target.classList.remove('valid'),
      event.target.classList.remove('invalid');
  }
});
