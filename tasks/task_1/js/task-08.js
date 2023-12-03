const form = document.querySelector('.login-form');

const handlerSubmit = e => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please enter a valid email and password.');
  }

  console.log({
    email: email.value,
    password: password.value,
  });

  form.reset();

  console.log(e.target);
};

form.addEventListener('submit', handlerSubmit);
