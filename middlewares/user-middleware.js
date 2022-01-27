const {User} = require('../models');
const {userValidator} = require('../validators');

module.exports = {
    checkUserEmail: async (req, res, next) => {
        try {
            const checkEmail = await User.findOne({email: req.body.email});

            if (checkEmail) {
                throw new Error('email already exist');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    isUserBodyValid: async (req, res, next) => {
        try {
            const {error, value} = await userValidator.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            req.body = value;

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
