const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function onInputChange() {
  input.addEventListener('input', event => {
    output.textContent = event.target.value
      ? event.currentTarget.value
      : 'Anonymous';
  });
}

input.focus = onInputChange();
