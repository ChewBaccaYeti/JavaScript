const Joi = require('joi');
const shortid = require('shortid');

const passwordValidator = Joi.string().min(4).max(16).alphanum();
console.log(passwordValidator.validate(shortid.generate()));

export default function passwordValidation(password) {
  const passwordValidator = Joi.string().min(4).max(16).alphanum();
  return passwordValidator.validate(shortid.generate());
}

console.log(passwordValidation('123456qwerty'));
