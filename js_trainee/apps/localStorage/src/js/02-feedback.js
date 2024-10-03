import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-message';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  name: document.querySelector('.js-name'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.name.addEventListener('input', onTextareaInput);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));

populateTextArea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('Отправляем форму');

  evt.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */

function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
  console.log(message);
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */

function populateTextArea() {
  const SavedMessage = localStorage.getItem(STORAGE_KEY);

  if (SavedMessage) {
    refs.textarea.value = SavedMessage;
    console.log(SavedMessage);
  }
}
