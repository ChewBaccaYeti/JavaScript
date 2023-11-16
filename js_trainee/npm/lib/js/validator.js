"use strict";

var Joi = require('joi');
var shortid = require('shortid');
var passwordValidator = Joi.string().min(4).max(16).alphanum();
console.log(passwordValidator.validate(shortid.generate()));