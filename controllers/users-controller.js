const {User} = require('../models');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (e) {
            res.json(e);
        }
    },
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (e) {
            res.json(e);
        }
    },

    getUserById: async (req, res) => {
        try {
            const {id} = req.params;
            const user = await User.findById(id);
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },

    delete: async (req, res) => {
        try {
            const {id} = req.params;
            const user = await User.findByIdAndDelete(id);
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },

};
