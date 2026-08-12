/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const registerForm = document.querySelector('.js-register-form');
const registerBtn = document.createElement('button');

registerForm.append(registerBtn);

registerBtn.classList.add('js-register-button');
registerBtn.textContent = 'Зарегистрироваться';
registerBtn.type = 'submit';

registerForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    console.dir(formElements);
    console.dir(event.currentTarget);
    console.dir(event.currentTarget.elements);
    console.dir(event.currentTarget.elements.subscription);
    console.dir(event.currentTarget.elements.subscription.value);

    const mail = formElements.email;
    const password = formElements.password;
    const subscription = formElements.subscription;

    const mailValue = formElements.email.value;
    const passwordValue = formElements.password.value;
    const subscriptionValue = formElements.subscription.value;

    const formData = new FormData(event.currentTarget);

    console.log(mail, password, subscription);
    console.log(mailValue, passwordValue, subscriptionValue);

    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    });

    console.log(formData);
    console.log('Это сабмит формы');
}
