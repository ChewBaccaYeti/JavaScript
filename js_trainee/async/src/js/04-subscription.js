import '../css/common.css';
import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#subscription-modal'),
};
const modal = new BSN.Modal('#subscription-modal');
console.log(modal);

refs.modal.addEventListener('hide.bs.modal', () => {
  console.log('Russian sucks!');
});

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

setTimeout(() => {
  console.log('Open modal');
  modal.show();
}, PROMPT_DELAY);

let promptCounter = 0;
let hasSubscribed = true;

const intervalId = setInterval(() => {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Interval must be stoped');
    clearInterval(intervalId);
    return;
  }

  console.log('Prompt on subscription! - ' + Date.now());
  promptCounter += 1;
}, PROMPT_DELAY);
