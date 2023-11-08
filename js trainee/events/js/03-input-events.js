/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const licenseCheckbox = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
refs.input.addEventListener('input', onInput);

refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
    console.log('Input will focus, focus event');
}

function onInputBlur() {
    console.log('Input will blur, blur event');
}

function onInputChange() {
    console.log('Input will change', event.currentTarget.value);
}

function onInput() {
    console.log('Input', event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
    refs.btn.disabled = !event.currentTarget.checked;
}
