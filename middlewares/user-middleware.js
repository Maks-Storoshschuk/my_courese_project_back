const {User} = require('../models');

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
    }
};
