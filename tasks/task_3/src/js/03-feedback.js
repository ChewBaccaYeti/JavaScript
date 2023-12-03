import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let email = '';
let message = '';

const feedbackRefs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

if (localStorage.getItem(STORAGE_KEY)) {
  const savedFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY));
  feedbackRefs.email.value = localStorage.getItem(STORAGE_KEY);
  feedbackRefs.message.value = localStorage.getItem(STORAGE_KEY);
}

feedbackRefs.form.addEventListener(
  'input',
  throttle(e => {
    if (e.target === feedbackRefs.email) {
      email = e.target.value;
    }

    if (e.target === feedbackRefs.message) {
      message = e.target.value;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
  }, 500)
);

feedbackRefs.form.addEventListener('submit', e => {
  e.preventDefault();

  console.log({ email, message });
  email = '';
  message = '';

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});
