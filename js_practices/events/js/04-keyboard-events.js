/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keydown', onKeyPress);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeyPress(event) {
    console.log('event.key:', event.key);
    console.log('event.code:', event.code);

    refs.output.textContent += event.key;
}

function onClearOutput() {
    refs.output.textContent = '';
}
