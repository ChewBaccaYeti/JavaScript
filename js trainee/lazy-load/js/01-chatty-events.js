/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
 */
const coordsOutputRefs = document.querySelectorAll('.js-coords');
let mouseMoveCounter = 0;

window.addEventListener('mousemove', _.throttle(onMouseMove, 300));

function onMouseMove(event) {
  mouseMoveCounter += 1;

  coordsOutputRefs.textContent = `
  Кол-во вызовов onMouseMove: ${mouseMoveCounter},
  X: ${event.clientX},
  Y: ${event.clientY}
`;
}

/*
 * Input и debounce
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
