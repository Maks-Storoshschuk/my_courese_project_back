const joi = require('joi');
const {regExp, userRoles} = require('../constants');

const createUserValidator = joi.object({
    name: joi.string()
        .min(3)
        .max(16)
        .trim()
        .required(),
    email: joi.string().regex(regExp.emailRegExp),
    surname: joi.string()
        .min(3)
        .max(16)
        .trim()
        .required(),
    password: joi.string().regex(regExp.passwordRegExp),
    isCritic: joi.boolean(),
    role: joi.string().allow(...Object.values(userRoles)),
    avatar: joi.any(),

});

module.exports = {createUserValidator};
