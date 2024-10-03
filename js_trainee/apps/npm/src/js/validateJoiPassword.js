import Joi from 'joi';

console.log(Joi);

const passSchema = Joi.string().min(4).max(12);

export default function validateJoiPassword(password) {
  if (passSchema.validate(password) === true) {
    let message = 'Password successfully accepted, security override completed';
    return message;
  } else {
    let message =
      'Attention, invalid password, required security access override.';
    return message;
  }
}
