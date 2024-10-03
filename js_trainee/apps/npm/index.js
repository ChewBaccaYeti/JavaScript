import apiService, {
  getRandomHexColor as hexColor,
  getRandomString,
} from './src/js/api-service';
import * as allExports from './src/js/api-service';
import { addUser } from './src/js/api-service';
import validateJoiPassword from './src/js/validateJoiPassword';
import passwordValidation from './src/js/validator';
import * as app from './src/app';

document.body
  .appendChild(document.createElement('div'))
  .classList.add('parcel-container');

const parcelDiv = document.querySelector('.parcel-container');

parcelDiv.textContent = 'This is Parcel container';
console.log(parcelDiv.textContent);

console.log(apiService, hexColor(), getRandomString());
console.log(allExports);
addUser('Isaac');

console.log(validateJoiPassword());
console.log(passwordValidation());

console.log(app);
